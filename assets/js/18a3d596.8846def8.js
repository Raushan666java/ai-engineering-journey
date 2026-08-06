"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[55596],{

/***/ 43756
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_07_hash_tables_md_18a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-07-hash-tables-md-18a.json
const site_docs_courses_data_structures_07_hash_tables_md_18a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/07-hash-tables","title":"Chapter 7: Hash Tables","description":"Previous Queues | Next: Binary Trees","source":"@site/docs/courses/data-structures/07-hash-tables.md","sourceDirName":"courses/data-structures","slug":"/data-structures/07-hash-tables","permalink":"/ai-engineering-journey/data-structures/07-hash-tables","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-hash-tables","slug":"/data-structures/07-hash-tables","title":"Chapter 7: Hash Tables","sidebar_label":"Chapter 7: Hash Tables","sidebar_position":7},"sidebar":"coursesSidebar","previous":{"title":"Chapter 6: Queues","permalink":"/ai-engineering-journey/data-structures/06-queues"},"next":{"title":"Chapter 8: Binary Trees","permalink":"/ai-engineering-journey/data-structures/08-binary-trees"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/07-hash-tables.md


const frontMatter = {
	id: '07-hash-tables',
	slug: '/data-structures/07-hash-tables',
	title: 'Chapter 7: Hash Tables',
	sidebar_label: 'Chapter 7: Hash Tables',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Hash Tables';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Hash Tables Matter",
  "id": "why-hash-tables-matter",
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
  "value": "Hash Table Concept",
  "id": "hash-table-concept",
  "level": 3
}, {
  "value": "Hash Function",
  "id": "hash-function",
  "level": 3
}, {
  "value": "Chaining",
  "id": "chaining",
  "level": 3
}, {
  "value": "Open Addressing",
  "id": "open-addressing",
  "level": 3
}, {
  "value": "Linear Probing",
  "id": "linear-probing",
  "level": 4
}, {
  "value": "Quadratic Probing",
  "id": "quadratic-probing",
  "level": 4
}, {
  "value": "Double Hashing",
  "id": "double-hashing",
  "level": 4
}, {
  "value": "Rehashing",
  "id": "rehashing",
  "level": 3
}, {
  "value": "Cuckoo Hashing",
  "id": "cuckoo-hashing",
  "level": 3
}, {
  "value": "Comparison: Chaining vs Open Addressing",
  "id": "comparison-chaining-vs-open-addressing",
  "level": 3
}, {
  "value": "Quick Reference: Hash Table Operations",
  "id": "quick-reference-hash-table-operations",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
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
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Problem 1: Two Sum",
  "id": "problem-1-two-sum",
  "level": 3
}, {
  "value": "Problem 2: Subarray Sum Equals K",
  "id": "problem-2-subarray-sum-equals-k",
  "level": 3
}, {
  "value": "Problem 3: Longest Consecutive Sequence",
  "id": "problem-3-longest-consecutive-sequence",
  "level": 3
}, {
  "value": "Problem 4: First Missing Positive",
  "id": "problem-4-first-missing-positive",
  "level": 3
}, {
  "value": "Problem 5: Count Frequency of Elements",
  "id": "problem-5-count-frequency-of-elements",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Python dict",
  "id": "python-dict",
  "level": 3
}, {
  "value": "Java HashMap",
  "id": "java-hashmap",
  "level": 3
}, {
  "value": "Database Indexing",
  "id": "database-indexing",
  "level": 3
}, {
  "value": "Caching (Memcached / Redis)",
  "id": "caching-memcached--redis",
  "level": 3
}, {
  "value": "Bloom Filters",
  "id": "bloom-filters",
  "level": 3
}, {
  "value": "Real-World Hash Table Configuration Summary",
  "id": "real-world-hash-table-configuration-summary",
  "level": 3
}, {
  "value": "Common Mistakes &amp; GFG Deepening",
  "id": "common-mistakes--gfg-deepening",
  "level": 2
}, {
  "value": "Common Mistakes (GFG-Style)",
  "id": "common-mistakes-gfg-style",
  "level": 3
}, {
  "value": "TypeScript HashTable Implementation",
  "id": "typescript-hashtable-implementation",
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
  "value": "Collision Resolution Comparison",
  "id": "collision-resolution-comparison",
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
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
        id: "chapter-7-hash-tables",
        children: "Chapter 7: Hash Tables"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/06-queues",
          children: "Chapter 6: Queues"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/data-structures/08-binary-trees",
          children: "Binary Trees"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define hash tables and the role of hash functions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement collision resolution via chaining and open addressing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze load factor and rehashing strategies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the complexity of search, insert, and delete."
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
        href: "../../assets/images/lessons/data-structures/07-hash-tables/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/07-hash-tables/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/07-hash-tables/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/07-hash-tables/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/07-hash-tables/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/07-hash-tables/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-hash-tables-matter",
      children: "Why Hash Tables Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you have a massive ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dictionary"
      }), " with 100,000 words. To look up the definition of \"serendipity\", you could:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scan every page"
        }), " — O(n), takes forever."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary search"
        }), " — O(log n), faster but requires sorted pages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use an index"
        }), " — the word itself tells you exactly which page to open."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hash table"
      }), " is that magical index. It answers \"where do I store this?\" and \"where do I find this?\" in near-constant time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A library catalog system. Each book gets assigned a shelf number by the librarian (hash function). When you want a book, you compute its shelf number and walk directly to that shelf. If two books land on the same shelf (collision), the librarian puts one right next to the other (chaining) or shifts to the next available shelf (open addressing). Without this system, you'd walk every aisle looking for your book."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Hash Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps keys to bucket indices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be fast and uniform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list per bucket for collisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, O(alpha) search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open Addressing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probe sequence for next empty slot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory efficient, cluster-prone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n/m ratio determines performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rehash when alpha > threshold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rehashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double table, reinsert all keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) cost, infrequent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-step hash for probe sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best clustering behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cuckoo Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two tables, kick-out strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) worst-case lookup"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Hash Table] --> B[Hash Function Design]\n    B --> C[Collision Resolution]\n    C --> D[Chaining vs Open Addressing]\n    D --> E[Probing: Linear, Quadratic, Double]\n    E --> F[Load Factor & Rehashing]\n    F --> G[Cuckoo Hashing]\n    G --> H[Applications: Caches, Symbol Tables]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch04-hash-tables.png",
        alt: "Hash Tables: Collision Resolution and Variants"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hash-table-concept",
      children: "Hash Table Concept"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A hash table maps keys to values using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hash function"
      }), " ( h(k) ) that computes an index into an array (the bucket array). The goal is ( O(1) ) average-case lookup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key space"
        }), ": the set of all possible keys."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash function"
        }), ": maps a key to an integer in ( [0, m-1] ) where ( m ) is the table size."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bucket array"
        }), ": stores key-value pairs at computed indices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collision resolution"
        }), ": handles the case when two keys hash to the same index."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hash-function",
      children: "Hash Function"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A postal code system. When you mail a letter, the ZIP code tells the postal service which region to send it to. A good ZIP code system spreads mail evenly across all postal workers. A bad one dumps everything on one worker — just like a bad hash function dumps all keys into one bucket."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A hash function transforms a key into an integer index within the bucket array range."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties of a good hash function:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic"
        }), " — same key always produces the same hash."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fast to compute"
        }), " — O(len(key)) ideally."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Uniform distribution"
        }), " — keys spread evenly across buckets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimizes collisions"
        }), " — different keys rarely map to the same index."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common hash functions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Division method:"
        }), " ( h(k) = k \\bmod m ) — simple but choose m as a prime not near a power of 2."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiplication method:"
        }), " ( h(k) = \\lfloor m \\cdot (kA \\bmod 1) \\rfloor ) where ( 0 < A < 1 ) (Knuth suggests ( A = (\\sqrt{5} - 1)/2 \\approx 0.618 ))."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Polynomial rolling hash for strings:"
        }), " ( h(s) = (\\sum_{i=0}^{n-1} s[i] \\cdot p^{i}) \\bmod m ) — typical p = 31 or 131."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DJB2 hash (popular for strings):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hash = ((hash << 5) + hash) + c"
        }), " — simple, good distribution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Division Hash"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function hash(key, tableSize):\n    return key mod tableSize\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: DJB2 String Hash"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function hashString(str, tableSize):\n    hash = 5381\n    for each character c in str:\n        hash = ((hash << 5) + hash) + c\n    return hash mod tableSize\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " DJB2 on \"cat\" with tableSize = 16"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "hash (before)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "hash (after)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5381"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5381"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'c' (99)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5381"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5381*33 + 99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "177672"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'a' (97)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "177672"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "177672*33 + 97"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5863273"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'t' (116)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5863273"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5863273*33 + 116"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "193488125"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Final"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "193488125 mod 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(len(key)) — we iterate over each character once."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) — only a few integer variables."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages"
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
            children: "Deterministic — reliable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor choice of modulus causes clustering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast O(k) computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not cryptographic — reversible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary/secondary clustering with bad m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to compose for complex keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collisions unavoidable by pigeonhole principle"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation: DJB2 Hash Function"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def djb2_hash(key, table_size):\n    hash_val = 5381\n    for c in str(key):\n        hash_val = ((hash_val << 5) + hash_val) + ord(c)\n    return hash_val % table_size\n\n# Example\nwords = [\"hello\", \"world\", \"hash\", \"table\", \"function\"]\nfor w in words:\n    print(f\"{w} -> bucket {djb2_hash(w, 16)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation: DJB2 Hash Function"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class HashUtils {\n    public static int djb2Hash(String key, int tableSize) {\n        int hash = 5381;\n        for (int i = 0; i < key.length(); i++) {\n            hash = ((hash << 5) + hash) + key.charAt(i);\n        }\n        return Math.abs(hash) % tableSize;\n    }\n\n    public static void main(String[] args) {\n        String[] words = {\"hello\", \"world\", \"hash\", \"table\", \"function\"};\n        for (String w : words) {\n            System.out.println(w + \" -> bucket \" + djb2Hash(w, 16));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty string:"
        }), " hash = 5381, returns 5381 mod m — valid, maps to bucket ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5381 mod m"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very long key:"
        }), " O(len) cost, no special treatment needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unicode characters:"
        }), " treat as integer codepoints — behavior depends on character encoding."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash function that always returns same value (pathological):"
        }), " every key maps to the same bucket — degenerates to O(n) linked list."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chaining",
      children: "Chaining"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A coat check room with numbered hooks. Each hook can hold multiple coats (chained together on the same hook). When two people get the same number, the attendant hangs one coat and clips the second onto the same hook. Finding your coat means searching through the chain on that hook — fast if the hook is lightly loaded, slow if everyone gets the same number."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Insert with Chaining"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute bucket index: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "idx = hash(key) % tableSize"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Traverse the linked list at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "buckets[idx]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If key already exists, update its value and return."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, append the new key-value pair to the list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increment element count."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If load factor exceeds threshold (typically 1.0), trigger rehash."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Search with Chaining"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute bucket index: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "idx = hash(key) % tableSize"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Traverse the linked list at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "buckets[idx]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If key found, return its value."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, return not-found."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Delete with Chaining"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute bucket index: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "idx = hash(key) % tableSize"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Traverse the linked list at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "buckets[idx]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If key found, remove the node from the list and decrement count."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, return not-found."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Chaining Hash Table"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class HashTableChaining:\n    buckets: array of lists\n    n: number of elements\n    m: number of buckets\n\n    function insert(key, value):\n        if n / m > loadFactorThreshold:\n            rehash()\n        idx = hash(key) mod m\n        for each pair in buckets[idx]:\n            if pair.key == key:\n                pair.value = value\n                return\n        buckets[idx].append((key, value))\n        n++\n\n    function find(key):\n        idx = hash(key) mod m\n        for each pair in buckets[idx]:\n            if pair.key == key:\n                return pair.value\n        return null\n\n    function delete(key):\n        idx = hash(key) mod m\n        for each pair in buckets[idx]:\n            if pair.key == key:\n                buckets[idx].remove(pair)\n                n--\n                return true\n        return false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Insert keys [10, 22, 31, 4, 15, 28, 17, 88, 59] into table of size 7 using chaining, hash = key mod 7, threshold = 1.0."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Table State (bucket → list)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0:[] 1:[] 2:[] 3:[] 4:[] 5:[] 6:[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%7=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0:[] 1:[] 2:[] 3:[10] 4:[] 5:[] 6:[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22%7=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0:[] 1:[22] 2:[] 3:[10] 4:[] 5:[] 6:[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31%7=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0:[] 1:[22] 2:[] 3:[10,31] 4:[] 5:[] 6:[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4%7=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0:[] 1:[22] 2:[] 3:[10,31] 4:[4] 5:[] 6:[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%7=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0:[] 1:[22,15] 2:[] 3:[10,31] 4:[4] 5:[] 6:[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28%7=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0:[28] 1:[22,15] 2:[] 3:[10,31] 4:[4] 5:[] 6:[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17%7=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0:[28] 1:[22,15] 2:[] 3:[10,31,17] 4:[4] 5:[] 6:[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88%7=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0:[28] 1:[22,15] 2:[] 3:[10,31,17] 4:[4,88] 5:[] 6:[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "59%7=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0:[28] 1:[22,15] 2:[] 3:[10,31,17,59] 4:[4,88] 5:[] 6:[]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final load factor:"
      }), " α = 9/7 ≈ 1.29 > 1.0 → rehash needed next insert."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <list>\n#include <utility>\n\ntemplate <typename K, typename V>\nclass HashTableChaining {\nprivate:\n    std::vector<std::list<std::pair<K, V>>> buckets;\n    int numElements;\n    int numBuckets;\n    double loadFactorThreshold;\n\n    int hash(const K& key) const {\n        return std::hash<K>{}(key) % numBuckets;\n    }\n\n    void rehash() {\n        std::vector<std::list<std::pair<K, V>>> oldBuckets = std::move(buckets);\n        numBuckets *= 2;\n        buckets.resize(numBuckets);\n        numElements = 0;\n\n        for (auto& chain : oldBuckets) {\n            for (auto& kv : chain) {\n                insert(kv.first, kv.second);\n            }\n        }\n    }\n\npublic:\n    HashTableChaining(int initialSize = 8, double threshold = 1.0)\n        : numBuckets(initialSize), numElements(0), loadFactorThreshold(threshold) {\n        buckets.resize(numBuckets);\n    }\n\n    void insert(const K& key, const V& value) {\n        if ((double)numElements / numBuckets > loadFactorThreshold) rehash();\n\n        int idx = hash(key);\n        for (auto& kv : buckets[idx]) {\n            if (kv.first == key) {\n                kv.second = value;\n                return;\n            }\n        }\n        buckets[idx].push_back({key, value});\n        ++numElements;\n    }\n\n    bool find(const K& key, V& value) const {\n        int idx = hash(key);\n        for (const auto& kv : buckets[idx]) {\n            if (kv.first == key) {\n                value = kv.second;\n                return true;\n            }\n        }\n        return false;\n    }\n\n    bool remove(const K& key) {\n        int idx = hash(key);\n        auto& chain = buckets[idx];\n        for (auto it = chain.begin(); it != chain.end(); ++it) {\n            if (it->first == key) {\n                chain.erase(it);\n                --numElements;\n                return true;\n            }\n        }\n        return false;\n    }\n\n    int size() const { return numElements; }\n};\n\nint main() {\n    HashTableChaining<std::string, int> ht;\n    ht.insert(\"apple\", 5);\n    ht.insert(\"banana\", 3);\n    ht.insert(\"cherry\", 8);\n\n    int val;\n    if (ht.find(\"banana\", val))\n        std::cout << \"banana -> \" << val << \"\\n\";\n\n    ht.remove(\"banana\");\n    std::cout << \"Size: \" << ht.size() << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HashTableChaining:\n    def __init__(self, initial_size=8, threshold=1.0):\n        self.m = initial_size\n        self.n = 0\n        self.threshold = threshold\n        self.table = [[] for _ in range(self.m)]\n\n    def _hash(self, key):\n        return hash(key) % self.m\n\n    def _rehash(self):\n        old = self.table\n        self.m *= 2\n        self.table = [[] for _ in range(self.m)]\n        self.n = 0\n        for chain in old:\n            for k, v in chain:\n                self.insert(k, v)\n\n    def insert(self, key, value):\n        if self.n / self.m > self.threshold:\n            self._rehash()\n        idx = self._hash(key)\n        for i, (k, v) in enumerate(self.table[idx]):\n            if k == key:\n                self.table[idx][i] = (key, value)\n                return\n        self.table[idx].append((key, value))\n        self.n += 1\n\n    def find(self, key):\n        idx = self._hash(key)\n        for k, v in self.table[idx]:\n            if k == key:\n                return v\n        return None\n\n    def remove(self, key):\n        idx = self._hash(key)\n        for i, (k, v) in enumerate(self.table[idx]):\n            if k == key:\n                del self.table[idx][i]\n                self.n -= 1\n                return True\n        return False\n\n    def size(self):\n        return self.n\n\n\nht = HashTableChaining()\nht.insert(\"apple\", 5)\nht.insert(\"banana\", 3)\nprint(ht.find(\"banana\"))  # 3\nht.remove(\"banana\")\nprint(ht.find(\"banana\"))  # None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass HashTableChaining<K, V> {\n    private LinkedList<Entry<K, V>>[] buckets;\n    private int numElements;\n    private int numBuckets;\n    private double threshold;\n\n    private static class Entry<K, V> {\n        K key;\n        V value;\n        Entry(K k, V v) { key = k; value = v; }\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    public HashTableChaining(int initialSize, double threshold) {\n        this.numBuckets = initialSize;\n        this.numElements = 0;\n        this.threshold = threshold;\n        buckets = new LinkedList[numBuckets];\n        for (int i = 0; i < numBuckets; i++)\n            buckets[i] = new LinkedList<>();\n    }\n\n    public HashTableChaining() { this(8, 1.0); }\n\n    private int hash(K key) {\n        return Math.abs(key.hashCode()) % numBuckets;\n    }\n\n    private void rehash() {\n        LinkedList<Entry<K, V>>[] old = buckets;\n        numBuckets *= 2;\n        buckets = new LinkedList[numBuckets];\n        for (int i = 0; i < numBuckets; i++)\n            buckets[i] = new LinkedList<>();\n        numElements = 0;\n        for (LinkedList<Entry<K, V>> chain : old)\n            for (Entry<K, V> e : chain)\n                insert(e.key, e.value);\n    }\n\n    public void insert(K key, V value) {\n        if ((double) numElements / numBuckets > threshold) rehash();\n        int idx = hash(key);\n        for (Entry<K, V> e : buckets[idx]) {\n            if (e.key.equals(key)) { e.value = value; return; }\n        }\n        buckets[idx].add(new Entry<>(key, value));\n        numElements++;\n    }\n\n    public V find(K key) {\n        int idx = hash(key);\n        for (Entry<K, V> e : buckets[idx])\n            if (e.key.equals(key)) return e.value;\n        return null;\n    }\n\n    public boolean remove(K key) {\n        int idx = hash(key);\n        Iterator<Entry<K, V>> it = buckets[idx].iterator();\n        while (it.hasNext()) {\n            if (it.next().key.equals(key)) {\n                it.remove();\n                numElements--;\n                return true;\n            }\n        }\n        return false;\n    }\n\n    public int size() { return numElements; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1 + α)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average: chain length = α; Worst: all keys in one bucket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average: O(1) amortized; Worst: rehash or collision chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1 + α)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average: find then remove from list; Worst: full chain scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rehash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must recompute hash and reinsert every element"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why amortized O(1)?"
      }), " When load factor exceeds threshold, we double the table size and reinsert all n elements at O(n) cost. But this happens only every n inserts (geometric growth). The amortized cost per insert is O(1) because the O(n) rehash cost is spread across n prior inserts: n * O(1) + O(n) / n = O(1)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Factor:"
      }), " α = n/m. For chaining, typical threshold is α > 1.0 (or sometimes 0.75). Rehash when exceeded by allocating 2x the table and reinserting all entries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages"
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
            children: "Simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra memory for pointers (overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safe deletion (no tombstones)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-unfriendly (pointer chasing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles high load factors well"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case O(n) with bad hash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "α < 1.0 not strictly required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list traversal slower than array"
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
          children: "All keys hash to same bucket:"
        }), " degrades to singly linked list — O(n) worst-case operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty table:"
        }), " insert works normally; find/delete return not-found."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Removing non-existent key:"
        }), " return false / null, no side effects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collision chain length explosion:"
        }), " rehash is triggered to redistribute."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate key insert:"
        }), " must update value, not create duplicate entry."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "open-addressing",
      children: "Open Addressing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A parking lot with numbered spots. If your assigned spot is taken, you drive to the next empty spot and park there. When you return, you check your assigned spot first, then check nearby spots in order until you find your car. The problem: if many people park near the same section (clustering), you may walk far before finding an empty space."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In open addressing, all entries are stored ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "directly in the bucket array"
      }), " (no linked lists). When a collision occurs, we probe for the next available slot."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "linear-probing",
      children: "Linear Probing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Probe sequence: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p(k, i) = (hash(k) + i) mod m"
      }), ", for i = 0, 1, 2, ..."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Insert with Linear Probing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "idx = hash(key) % tableSize"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While slot at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(idx + i) % tableSize"
        }), " is occupied AND not the same key:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Increment ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If slot is the same key, update value."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, insert key-value at this slot, mark occupied, increment count."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If load factor exceeds threshold (typically 0.7), rehash."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Search with Linear Probing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "idx = hash(key) % tableSize"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While slot at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(idx + i) % tableSize"
        }), " is occupied (not empty):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If slot is the target key and not deleted, return value."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Increment ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return not-found."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Delete with Linear Probing (Tombstone)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "idx = hash(key) % tableSize"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While slot at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(idx + i) % tableSize"
        }), " is occupied (not empty):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If slot is the target key, mark as deleted (tombstone), decrement count."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Increment ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return not-found."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Open Addressing with Linear Probing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class HashTableOpen:\n    table: array of Entry {key, value, occupied, deleted}\n    n: count of live elements\n    m: capacity\n\n    function insert(key, value):\n        if n / m > 0.7:\n            rehash()\n        idx = hash(key) mod m\n        i = 0\n        while table[(idx + i) mod m].occupied\n              and table[(idx + i) mod m].key != key:\n            i++\n        pos = (idx + i) mod m\n        if not table[pos].occupied or table[pos].deleted:\n            n++\n        table[pos] = Entry(key, value, occupied=true, deleted=false)\n\n    function find(key):\n        idx = hash(key) mod m\n        i = 0\n        while table[(idx + i) mod m].occupied:\n            pos = (idx + i) mod m\n            if not table[pos].deleted and table[pos].key == key:\n                return table[pos].value\n            i++\n        return null\n\n    function delete(key):\n        idx = hash(key) mod m\n        i = 0\n        while table[(idx + i) mod m].occupied:\n            pos = (idx + i) mod m\n            if not table[pos].deleted and table[pos].key == key:\n                table[pos].deleted = true\n                n--\n                return true\n            i++\n        return false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run (Linear Probing):"
      }), " Insert keys [10, 22, 31, 4, 15, 28, 17, 88, 59] into table of size 11, hash = key mod 11, threshold = 0.7."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Probe Sequence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Slot"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Table State (indices 0-10)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][ ][ ][ ][ ][ ][ ][ ][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][ ][ ][ ][ ][ ][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][ ][4][ ][ ][ ][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4*→5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][ ][4][15][ ][ ][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][ ][4][15][28][ ][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6*→7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][ ][4][15][28][17][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0*→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][88][ ][ ][4][15][28][17][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4*→5*→6*→7*→8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][88][ ][ ][4][15][28][17][59][31][10]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Note: * indicates occupied slot, skip to next."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now load factor = 9/11 ≈ 0.82 > 0.7 → next insert triggers rehash."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "quadratic-probing",
      children: "Quadratic Probing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Probe sequence: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p(k, i) = (hash(k) + c₁*i + c₂*i²) mod m"
      }), ", typically c₁ = c₂ = 1/2."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why quadratic?"
      }), " Reduces primary clustering by jumping farther from the original hash with each probe. But suffers from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "secondary clustering"
      }), " — all keys with the same hash follow the same probe sequence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Quadratic Probing Insert"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function insert(key, value):\n    idx = hash(key) mod m\n    i = 0\n    while table[(idx + i + i*i) / 2 mod m].occupied:\n        i++\n        if i == m: table is full (should have rehashed)\n    pos = (idx + i + i*i) / 2 mod m\n    table[pos] = Entry(key, value, occupied=true)\n    n++\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "double-hashing",
      children: "Double Hashing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A warehouse with two different aisle-numbering systems. If the first system sends you to an occupied aisle, you use a second system to find a different route. This avoids the clustering problem because each key has its own unique step size."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Probe sequence: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p(k, i) = (h₁(k) + i * h₂(k)) mod m"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "h₁(k) = k mod m"
        }), " (primary hash)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "h₂(k)"
        }), " is a second hash function, typically ", (0,jsx_runtime.jsx)(_components.code, {
          children: "h₂(k) = prime - (k mod prime)"
        }), " where prime < m."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Insert with Double Hashing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "idx = h₁(key) mod m"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "step = h₂(key)"
        }), " (must be non-zero and coprime to m)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While slot at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(idx + i * step) mod m"
        }), " is occupied AND not same key:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Increment ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If slot is same key, update value."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, insert at this slot, increment count."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check load factor for rehash."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why h₂(k) must be non-zero:"
      }), " If h₂(k) = 0, the probe sequence never advances — infinite loop for full table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Double Hashing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function h1(key): return key mod m\nfunction h2(key): return prime - (key mod prime)  // prime < m\n\nfunction insert(key, value):\n    idx = h1(key)\n    step = h2(key)\n    i = 0\n    while table[(idx + i * step) mod m].occupied:\n        i++\n        if i == m: rehash() and retry\n    pos = (idx + i * step) mod m\n    table[pos] = Entry(key, value, occupied=true)\n    n++\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run (Double Hashing):"
      }), " Insert keys [10, 22, 31, 4, 15, 28, 17, 88, 59] into m=11, h₁(k)=k mod 11, h₂(k)=7 - (k mod 7), threshold=0.7."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "h₁"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "h₂"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Probe Sequence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Slot"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Table State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-3=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-1=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][ ][ ][ ][ ][ ][ ][ ][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-3=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][ ][ ][ ][ ][ ][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-4=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][ ][4][ ][ ][ ][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-1=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4→(4+6)%11=10→(4+12)%11=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][ ][4][15][ ][ ][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-0=7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][ ][4][15][28][ ][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-3=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6→(6+4)%11=10→(6+8)%11=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][ ][ ][17][4][15][28][ ][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "88"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-4=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0→(0+3)%11=3→(0+6)%11=6→(0+9)%11=9→(0+12)%11=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][88][ ][17][4][15][28][ ][ ][31][10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-3=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4→(4+4)%11=8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[22][88][ ][17][4][15][28][ ][59][31][10]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation (Double Hashing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n\ntemplate <typename K, typename V>\nclass HashTableDouble {\nprivate:\n    struct Entry {\n        K key;\n        V value;\n        bool occupied;\n        Entry() : occupied(false) {}\n    };\n\n    std::vector<Entry> table;\n    int numElements;\n    int capacity;\n    int prime;  // for h2 — a prime smaller than capacity\n\n    int h1(const K& key) const {\n        return std::hash<K>{}(key) % capacity;\n    }\n\n    int h2(const K& key) const {\n        return prime - (std::hash<K>{}(key) % prime);\n    }\n\npublic:\n    HashTableDouble(int cap = 11, int p = 7)\n        : capacity(cap), prime(p), numElements(0) {\n        table.resize(capacity);\n    }\n\n    void insert(const K& key, const V& value) {\n        if ((double)numElements / capacity > 0.7) rehash();\n\n        int idx = h1(key);\n        int step = h2(key);\n        int i = 0;\n\n        while (table[idx].occupied && i < capacity) {\n            if (table[idx].key == key) {\n                table[idx].value = value;\n                return;\n            }\n            idx = (h1(key) + i * step) % capacity;\n            i++;\n        }\n\n        if (!table[idx].occupied) numElements++;\n        table[idx].key = key;\n        table[idx].value = value;\n        table[idx].occupied = true;\n    }\n\n    bool find(const K& key, V& value) const {\n        int step = h2(key);\n        int i = 0;\n        while (i < capacity) {\n            int idx = (h1(key) + i * step) % capacity;\n            if (!table[idx].occupied) return false;\n            if (table[idx].key == key) {\n                value = table[idx].value;\n                return true;\n            }\n            i++;\n        }\n        return false;\n    }\n\n    void rehash() {\n        std::vector<Entry> old = std::move(table);\n        capacity *= 2;\n        table.resize(capacity);\n        numElements = 0;\n        for (auto& e : old)\n            if (e.occupied)\n                insert(e.key, e.value);\n    }\n};\n\nint main() {\n    HashTableDouble<int, std::string> ht;\n    ht.insert(10, \"ten\");\n    ht.insert(22, \"twenty-two\");\n    ht.insert(31, \"thirty-one\");\n    std::string val;\n    if (ht.find(22, val))\n        std::cout << \"22 -> \" << val << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation (Double Hashing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HashTableDouble:\n    def __init__(self, capacity=11, prime=7, threshold=0.7):\n        self.capacity = capacity\n        self.prime = prime\n        self.threshold = threshold\n        self.n = 0\n        self.table = [None] * capacity\n\n    def _h1(self, key):\n        return hash(key) % self.capacity\n\n    def _h2(self, key):\n        return self.prime - (hash(key) % self.prime)\n\n    def _rehash(self):\n        old = self.table\n        self.capacity *= 2\n        self.table = [None] * self.capacity\n        self.n = 0\n        for entry in old:\n            if entry:\n                self.insert(entry[0], entry[1])\n\n    def insert(self, key, value):\n        if self.n / self.capacity > self.threshold:\n            self._rehash()\n\n        step = self._h2(key)\n        i = 0\n        while i < self.capacity:\n            idx = (self._h1(key) + i * step) % self.capacity\n            entry = self.table[idx]\n            if entry is None:\n                self.table[idx] = (key, value)\n                self.n += 1\n                return\n            if entry[0] == key:\n                self.table[idx] = (key, value)\n                return\n            i += 1\n        self._rehash()\n        self.insert(key, value)\n\n    def find(self, key):\n        step = self._h2(key)\n        i = 0\n        while i < self.capacity:\n            idx = (self._h1(key) + i * step) % self.capacity\n            entry = self.table[idx]\n            if entry is None:\n                return None\n            if entry[0] == key:\n                return entry[1]\n            i += 1\n        return None\n\n\nht = HashTableDouble()\nht.insert(10, \"ten\")\nht.insert(22, \"twenty-two\")\nprint(ht.find(22))  # twenty-two\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation (Double Hashing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class HashTableDouble<K, V> {\n    private static class Entry<K, V> {\n        K key;\n        V value;\n        boolean occupied;\n        Entry() { occupied = false; }\n    }\n\n    private Entry<K, V>[] table;\n    private int numElements;\n    private int capacity;\n    private int prime;\n    private double threshold;\n\n    @SuppressWarnings(\"unchecked\")\n    public HashTableDouble(int cap, int p, double thr) {\n        capacity = cap;\n        prime = p;\n        threshold = thr;\n        numElements = 0;\n        table = new Entry[capacity];\n        for (int i = 0; i < capacity; i++)\n            table[i] = new Entry<>();\n    }\n\n    public HashTableDouble() { this(11, 7, 0.7); }\n\n    private int h1(K key) {\n        return Math.abs(key.hashCode()) % capacity;\n    }\n\n    private int h2(K key) {\n        return prime - (Math.abs(key.hashCode()) % prime);\n    }\n\n    public void insert(K key, V value) {\n        if ((double) numElements / capacity > threshold) rehash();\n        int step = h2(key);\n        int i = 0;\n        while (i < capacity) {\n            int idx = (h1(key) + i * step) % capacity;\n            if (!table[idx].occupied) {\n                table[idx].key = key;\n                table[idx].value = value;\n                table[idx].occupied = true;\n                numElements++;\n                return;\n            }\n            if (table[idx].key.equals(key)) {\n                table[idx].value = value;\n                return;\n            }\n            i++;\n        }\n        rehash();\n        insert(key, value);\n    }\n\n    public V find(K key) {\n        int step = h2(key);\n        int i = 0;\n        while (i < capacity) {\n            int idx = (h1(key) + i * step) % capacity;\n            if (!table[idx].occupied) return null;\n            if (table[idx].key.equals(key)) return table[idx].value;\n            i++;\n        }\n        return null;\n    }\n\n    private void rehash() {\n        Entry<K, V>[] old = table;\n        capacity *= 2;\n        table = new Entry[capacity];\n        for (int i = 0; i < capacity; i++)\n            table[i] = new Entry<>();\n        numElements = 0;\n        for (Entry<K, V> e : old)\n            if (e.occupied)\n                insert(e.key, e.value);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation (Open Addressing with Linear Probing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n\ntemplate <typename K, typename V>\nclass HashTableOpen {\nprivate:\n    struct Entry {\n        K key;\n        V value;\n        bool occupied;\n        bool deleted;\n        Entry() : occupied(false), deleted(false) {}\n    };\n\n    std::vector<Entry> table;\n    int numElements;\n    int capacity;\n\n    int hash(const K& key) const {\n        return std::hash<K>{}(key) % capacity;\n    }\n\npublic:\n    HashTableOpen(int cap = 8) : capacity(cap), numElements(0) {\n        table.resize(capacity);\n    }\n\n    void insert(const K& key, const V& value) {\n        if ((double)numElements / capacity > 0.7) rehash();\n\n        int idx = hash(key);\n        int start = idx;\n        int i = 0;\n\n        while (table[idx].occupied && !(table[idx].key == key) && i < capacity) {\n            idx = (start + i) % capacity;\n            ++i;\n        }\n\n        if (!table[idx].occupied || table[idx].deleted) ++numElements;\n        table[idx].key = key;\n        table[idx].value = value;\n        table[idx].occupied = true;\n        table[idx].deleted = false;\n    }\n\n    bool find(const K& key, V& value) const {\n        int idx = hash(key);\n        int start = idx;\n        int i = 0;\n        while (table[idx].occupied && i < capacity) {\n            if (!table[idx].deleted && table[idx].key == key) {\n                value = table[idx].value;\n                return true;\n            }\n            idx = (start + i) % capacity;\n            ++i;\n        }\n        return false;\n    }\n\n    bool remove(const K& key) {\n        int idx = hash(key);\n        int start = idx;\n        int i = 0;\n        while (table[idx].occupied && i < capacity) {\n            if (!table[idx].deleted && table[idx].key == key) {\n                table[idx].deleted = true;\n                --numElements;\n                return true;\n            }\n            idx = (start + i) % capacity;\n            ++i;\n        }\n        return false;\n    }\n\n    void rehash() {\n        std::vector<Entry> old = std::move(table);\n        capacity *= 2;\n        table.resize(capacity);\n        numElements = 0;\n        for (auto& entry : old) {\n            if (entry.occupied && !entry.deleted) {\n                insert(entry.key, entry.value);\n            }\n        }\n    }\n\n    int size() const { return numElements; }\n};\n\nint main() {\n    HashTableOpen<int, std::string> ht;\n    ht.insert(1, \"one\");\n    ht.insert(2, \"two\");\n    ht.insert(3, \"three\");\n    ht.insert(11, \"eleven\"); // collides with 1 if capacity=8\n\n    std::string val;\n    if (ht.find(11, val))\n        std::cout << \"11 -> \" << val << \"\\n\";\n\n    ht.remove(2);\n    std::cout << \"After removal, size: \" << ht.size() << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation (Open Addressing with Linear Probing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HashTableOpen:\n    def __init__(self, capacity=8, threshold=0.7):\n        self.capacity = capacity\n        self.n = 0\n        self.threshold = threshold\n        self.table = [None] * capacity  # None = empty, DELETED = tombstone\n\n    DELETED = object()  # sentinel for tombstones\n\n    def _hash(self, key):\n        return hash(key) % self.capacity\n\n    def _rehash(self):\n        old = self.table\n        self.capacity *= 2\n        self.table = [None] * self.capacity\n        self.n = 0\n        for entry in old:\n            if entry and entry is not self.DELETED:\n                self.insert(entry[0], entry[1])\n\n    def insert(self, key, value):\n        if self.n / self.capacity > self.threshold:\n            self._rehash()\n        idx = self._hash(key)\n        i = 0\n        while self.table[(idx + i) % self.capacity] is not None:\n            pos = (idx + i) % self.capacity\n            entry = self.table[pos]\n            if entry is not self.DELETED and entry[0] == key:\n                self.table[pos] = (key, value)\n                return\n            i += 1\n        pos = (idx + i) % self.capacity\n        if not self.table[pos] or self.table[pos] is self.DELETED:\n            self.n += 1\n        self.table[pos] = (key, value)\n\n    def find(self, key):\n        idx = self._hash(key)\n        i = 0\n        while self.table[(idx + i) % self.capacity] is not None:\n            pos = (idx + i) % self.capacity\n            entry = self.table[pos]\n            if entry is not self.DELETED and entry[0] == key:\n                return entry[1]\n            i += 1\n        return None\n\n    def remove(self, key):\n        idx = self._hash(key)\n        i = 0\n        while self.table[(idx + i) % self.capacity] is not None:\n            pos = (idx + i) % self.capacity\n            entry = self.table[pos]\n            if entry is not self.DELETED and entry[0] == key:\n                self.table[pos] = self.DELETED\n                self.n -= 1\n                return True\n            i += 1\n        return False\n\n\nht = HashTableOpen()\nht.insert(1, \"one\")\nht.insert(2, \"two\")\nprint(ht.find(1))  # one\nht.remove(1)\nprint(ht.find(1))  # None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation (Open Addressing with Linear Probing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass HashTableOpen<K, V> {\n    private static class Entry<K, V> {\n        K key;\n        V value;\n        boolean occupied;\n        boolean deleted;\n        Entry() { occupied = false; deleted = false; }\n    }\n\n    private Entry<K, V>[] table;\n    private int numElements;\n    private int capacity;\n    private double threshold;\n\n    @SuppressWarnings(\"unchecked\")\n    public HashTableOpen(int cap, double threshold) {\n        this.capacity = cap;\n        this.numElements = 0;\n        this.threshold = threshold;\n        table = new Entry[capacity];\n        for (int i = 0; i < capacity; i++)\n            table[i] = new Entry<>();\n    }\n\n    public HashTableOpen() { this(8, 0.7); }\n\n    private int hash(K key) {\n        return Math.abs(key.hashCode()) % capacity;\n    }\n\n    public void insert(K key, V value) {\n        if ((double) numElements / capacity > threshold) rehash();\n        int idx = hash(key);\n        int start = idx;\n        int i = 0;\n        while (table[idx].occupied && !table[idx].key.equals(key) && i < capacity) {\n            idx = (start + i) % capacity;\n            i++;\n        }\n        if (!table[idx].occupied || table[idx].deleted) numElements++;\n        table[idx].key = key;\n        table[idx].value = value;\n        table[idx].occupied = true;\n        table[idx].deleted = false;\n    }\n\n    public V find(K key) {\n        int idx = hash(key);\n        int start = idx;\n        int i = 0;\n        while (table[idx].occupied && i < capacity) {\n            if (!table[idx].deleted && table[idx].key.equals(key))\n                return table[idx].value;\n            idx = (start + i) % capacity;\n            i++;\n        }\n        return null;\n    }\n\n    public boolean remove(K key) {\n        int idx = hash(key);\n        int start = idx;\n        int i = 0;\n        while (table[idx].occupied && i < capacity) {\n            if (!table[idx].deleted && table[idx].key.equals(key)) {\n                table[idx].deleted = true;\n                numElements--;\n                return true;\n            }\n            idx = (start + i) % capacity;\n            i++;\n        }\n        return false;\n    }\n\n    private void rehash() {\n        Entry<K, V>[] old = table;\n        capacity *= 2;\n        table = new Entry[capacity];\n        for (int i = 0; i < capacity; i++)\n            table[i] = new Entry<>();\n        numElements = 0;\n        for (Entry<K, V> e : old)\n            if (e.occupied && !e.deleted)\n                insert(e.key, e.value);\n    }\n\n    public int size() { return numElements; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis (Open Addressing):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average: α < 0.7, few probes; Worst: table nearly full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average: few probes; Worst: full probe chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average: similar to search; Worst: tombstone chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rehash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must recompute and reinsert all entries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why average-case O(1):"
      }), " With load factor α < 0.7, the expected number of probes for linear probing is about 1/(1-α) — at α=0.5, expected 2 probes; at α=0.7, expected ~3.3 probes. That's constant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "No extra memory for pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deletion requires tombstones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-friendly (array storage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary clustering (linear probing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Better memory locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secondary clustering (quadratic probing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All space used for data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load factor must stay low (< 0.7)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot store more than m elements without rehash"
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
          children: "Deletion in open addressing:"
        }), " Removing an entry by clearing it breaks probe sequences for later entries. Always use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tombstone markers"
        }), " instead — mark slot as deleted (available for insert, but probe continues during search)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Table full:"
        }), " With α capped at 0.7, shouldn't happen. But if it does, infinite loop on probe."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All keys same hash:"
        }), " Probe sequence degrades to linear scan of every slot."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clustering avalanche:"
        }), " At α > 0.7, linear probing clusters grow exponentially — performance craters."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rehashing",
      children: "Rehashing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A growing library. When the shelves get too full (load factor too high), you move to a bigger building with more shelves. Every book gets a new shelf number because the numbering system depends on the total shelf count. Moving is expensive but infrequent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to rehash:"
      }), " When load factor α = n/m exceeds the chosen threshold."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Rehash"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Allocate a new bucket array of size ", (0,jsx_runtime.jsx)(_components.code, {
          children: "m' = 2 * m"
        }), " (or next prime)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterate over all entries in the old table."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each live entry (not deleted), compute new hash using new table size."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert into the new table (following the chosen collision resolution)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace old table with new table."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update element count."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Rehash"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function rehash():\n    oldTable = table\n    table = new array of size (2 * m)\n    n = 0\n    for each entry in oldTable:\n        if entry.occupied and not entry.deleted:\n            insert(entry.key, entry.value)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Table of size 5 with keys [10, 22, 31, 4], hash = key mod 5, α = 4/5 = 0.8. Rehash to size 11."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Old Index (mod 5)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New Index (mod 11)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "New table: [22][ ][ ][ ][4][ ][ ][ ][ ][31][10] — all indices recomputed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n) — must iterate and reinsert every element."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amortized cost:"
        }), " O(1) per insert — O(n) rehash cost spread across n inserts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(n + m') — new table plus old table briefly in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why amortized O(1) per insert?"
      }), " Consider m starts at 8. We insert 8 times (O(1) each), then rehash (O(8) → new m=16). Insert 8 more times (O(1) each), rehash (O(16) → m=32). The total cost for n inserts is O(1) per insert + occasional O(n) rehash. The rehash cost is dominated by the inserts: n * O(1) + O(n) + O(n/2) + O(n/4) + ... = O(n). Per insert: O(1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages"
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
            children: "Maintains low load factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) cost when triggered"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized O(1) per insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubles memory footprint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rehash is blocking — pauses all operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Geometric growth guarantees amortization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must handle failure gracefully"
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
          children: "Rehash during rehash (cascading):"
        }), " If insert during rehash triggers another rehash, use threshold guard — only rehash once per insert."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large table rehash:"
        }), " When m is already very large (millions), doubling could OOM. Some implementations grow by smaller factor or shrink on low α."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concurrent access during rehash:"
        }), " Thread-safe implementations lock the table or use copy-on-write."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cuckoo-hashing",
      children: "Cuckoo Hashing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Two competing shoe stores on the same street. When a new brand arrives (key), it goes to Store A. If Store A is full, the shoe that was there gets ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kicked out"
      }), " and moves to Store B. If Store B is also full, that shoe kicks out Store B's occupant, which goes back to Store A. This continues until every shoe finds a spot — or a cycle is detected, meaning we need more stores (rehash). Named after the cuckoo bird that pushes other birds' eggs out of the nest."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuckoo hashing uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two hash tables"
      }), " (or one table with two hash functions) and guarantees O(1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "worst-case"
      }), " lookup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Insert with Cuckoo Hashing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pos1 = h1(key) mod m"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "table1[pos1]"
        }), " is empty, place key-value there and return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise, evict the existing entry ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(k', v')"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "table1[pos1]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Place new entry in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "table1[pos1]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pos2 = h2(k') mod m"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "table2[pos2]"
        }), " is empty, place ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(k', v')"
        }), " there and return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise, evict the entry from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "table2[pos2]"
        }), ", place ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(k', v')"
        }), " there, and repeat from step 1 with evicted entry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a cycle is detected (repeated more than a threshold, e.g., log n), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rehash"
        }), " with new hash functions and/or larger table."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Search with Cuckoo Hashing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "table1[h1(key)]"
        }), " — if matches, return value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "table2[h2(key)]"
        }), " — if matches, return value."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return not-found (O(1) worst-case — at most 2 lookups)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Delete with Cuckoo Hashing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "table1[h1(key)]"
        }), " — if matches, clear slot, return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "table2[h2(key)]"
        }), " — if matches, clear slot, return."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return not-found."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Cuckoo Hashing Insert"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function insert(key, value):\n    if table1[h1(key)] == key or table2[h2(key)] == key:\n        update value, return\n    for i = 1 to maxIterations:\n        swap(key, value, table1[h1(key)])\n        if key == null: return\n        swap(key, value, table2[h2(key)])\n        if key == null: return\n    rehash()\n    insert(key, value)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run (Cuckoo Hashing):"
      }), " Insert keys [20, 50, 53, 75, 100, 67, 105, 3, 36, 39] into m=10."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "h1(k) = k mod 10 (positions 0-9 in table1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "h2(k) = (k / 10) mod 10 (positions 0-9 in table2)"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "h1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "h2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Table1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Table2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1[0] empty → place"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20][ ][ ][ ][ ][ ][ ][ ][ ][ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1[0] full, evict 20, place 50. 20→T2[2] empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[50][ ][ ][ ][ ][ ][ ][ ][ ][ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][20][ ][ ][ ][ ][ ][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1[3] empty → place"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[50][ ][ ][53][ ][ ][ ][ ][ ][ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][20][ ][ ][ ][ ][ ][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1[5] empty → place"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[50][ ][ ][53][ ][75][ ][ ][ ][ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][20][ ][ ][ ][ ][ ][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1[0] full, evict 50→T2[5] empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[100][ ][ ][53][ ][75][ ][ ][ ][ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][20][ ][ ][50][ ][ ][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1[7] empty → place"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[100][ ][ ][53][ ][75][ ][67][ ][ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][20][ ][ ][50][ ][ ][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1[5] full evict 75, place 105. 75→T2[7] empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[100][ ][ ][53][ ][105][ ][67][ ][ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ][ ][20][ ][ ][50][ ][75][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1[3] full evict 53, place 3. 53→T2[5] full, evict 50, place 53. 50→T1[0] full, evict 100, place 50. 100→T2[0] empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ 50][ ][ ][3][ ][105][ ][67][ ][ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[100][ ][20][ ][ ][53][ ][75][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1[6] empty → place"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ 50][ ][ ][3][ ][105][36][67][ ][ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[100][ ][20][ ][ ][53][ ][75][ ][ ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1[9] empty → place"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ 50][ ][ ][3][ ][105][36][67][ ][39]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[100][ ][20][ ][ ][53][ ][75][ ][ ]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Notice that search requires at most ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2 lookups"
      }), " (T1[h1(k)] then T2[h2(k)]) — true O(1) worst-case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation (Cuckoo Hashing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <optional>\n\ntemplate <typename K, typename V>\nclass CuckooHashTable {\nprivate:\n    std::vector<std::optional<std::pair<K, V>>> table1, table2;\n    int capacity;\n    int maxIterations;\n\n    int h1(const K& key) const { return std::hash<K>{}(key) % capacity; }\n    int h2(const K& key) const { return (std::hash<K>{}(key) / capacity) % capacity; }\n\n    void rehash() {\n        auto old1 = std::move(table1);\n        auto old2 = std::move(table2);\n        capacity *= 2;\n        table1.resize(capacity);\n        table2.resize(capacity);\n        for (auto& opt : old1)\n            if (opt.has_value())\n                insert(opt->first, opt->second);\n        for (auto& opt : old2)\n            if (opt.has_value())\n                insert(opt->first, opt->second);\n    }\n\npublic:\n    CuckooHashTable(int cap = 10) : capacity(cap), maxIterations(cap) {\n        table1.resize(capacity);\n        table2.resize(capacity);\n    }\n\n    void insert(const K& key, const V& value) {\n        if (find(key).has_value()) { remove(key); }\n\n        K curKey = key;\n        V curVal = value;\n\n        for (int i = 0; i < maxIterations; i++) {\n            int pos1 = h1(curKey);\n            if (!table1[pos1].has_value()) {\n                table1[pos1] = {{curKey, curVal}};\n                return;\n            }\n            std::swap(curKey, table1[pos1]->first);\n            std::swap(curVal, table1[pos1]->second);\n\n            int pos2 = h2(curKey);\n            if (!table2[pos2].has_value()) {\n                table2[pos2] = {{curKey, curVal}};\n                return;\n            }\n            std::swap(curKey, table2[pos2]->first);\n            std::swap(curVal, table2[pos2]->second);\n        }\n\n        rehash();\n        insert(curKey, curVal);\n    }\n\n    std::optional<V> find(const K& key) const {\n        int pos1 = h1(key);\n        if (table1[pos1].has_value() && table1[pos1]->first == key)\n            return table1[pos1]->second;\n        int pos2 = h2(key);\n        if (table2[pos2].has_value() && table2[pos2]->first == key)\n            return table2[pos2]->second;\n        return std::nullopt;\n    }\n\n    bool remove(const K& key) {\n        int pos1 = h1(key);\n        if (table1[pos1].has_value() && table1[pos1]->first == key) {\n            table1[pos1].reset();\n            return true;\n        }\n        int pos2 = h2(key);\n        if (table2[pos2].has_value() && table2[pos2]->first == key) {\n            table2[pos2].reset();\n            return true;\n        }\n        return false;\n    }\n};\n\nint main() {\n    CuckooHashTable<int, std::string> ht;\n    ht.insert(20, \"twenty\");\n    ht.insert(50, \"fifty\");\n    ht.insert(53, \"fifty-three\");\n\n    auto val = ht.find(50);\n    if (val.has_value())\n        std::cout << \"50 -> \" << *val << \"\\n\";\n\n    ht.remove(50);\n    std::cout << \"50 present: \" << ht.find(50).has_value() << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation (Cuckoo Hashing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CuckooHashTable:\n    def __init__(self, capacity=10):\n        self.capacity = capacity\n        self.max_iter = capacity\n        self.table1 = [None] * capacity\n        self.table2 = [None] * capacity\n\n    def _h1(self, key):\n        return hash(key) % self.capacity\n\n    def _h2(self, key):\n        return (hash(key) // self.capacity) % self.capacity\n\n    def _rehash(self):\n        old1, old2 = self.table1, self.table2\n        self.capacity *= 2\n        self.max_iter = self.capacity\n        self.table1 = [None] * self.capacity\n        self.table2 = [None] * self.capacity\n        for entry in old1 + old2:\n            if entry:\n                self.insert(entry[0], entry[1])\n\n    def insert(self, key, value):\n        if self.find(key) is not None:\n            self.remove(key)\n\n        cur_key, cur_val = key, value\n\n        for _ in range(self.max_iter):\n            pos1 = self._h1(cur_key)\n            if self.table1[pos1] is None:\n                self.table1[pos1] = (cur_key, cur_val)\n                return\n            cur_key, cur_val, self.table1[pos1] = \\\n                self.table1[pos1][0], self.table1[pos1][1], (cur_key, cur_val)\n\n            pos2 = self._h2(cur_key)\n            if self.table2[pos2] is None:\n                self.table2[pos2] = (cur_key, cur_val)\n                return\n            cur_key, cur_val, self.table2[pos2] = \\\n                self.table2[pos2][0], self.table2[pos2][1], (cur_key, cur_val)\n\n        self._rehash()\n        self.insert(cur_key, cur_val)\n\n    def find(self, key):\n        pos1 = self._h1(key)\n        if self.table1[pos1] and self.table1[pos1][0] == key:\n            return self.table1[pos1][1]\n        pos2 = self._h2(key)\n        if self.table2[pos2] and self.table2[pos2][0] == key:\n            return self.table2[pos2][1]\n        return None\n\n    def remove(self, key):\n        pos1 = self._h1(key)\n        if self.table1[pos1] and self.table1[pos1][0] == key:\n            self.table1[pos1] = None\n            return True\n        pos2 = self._h2(key)\n        if self.table2[pos2] and self.table2[pos2][0] == key:\n            self.table2[pos2] = None\n            return True\n        return False\n\n\nht = CuckooHashTable()\nht.insert(20, \"twenty\")\nht.insert(50, \"fifty\")\nprint(ht.find(50))  # fifty\nht.remove(50)\nprint(ht.find(50))  # None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation (Cuckoo Hashing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass CuckooHashTable<K, V> {\n    private static class Entry<K, V> {\n        K key;\n        V value;\n        Entry(K k, V v) { key = k; value = v; }\n    }\n\n    private Entry<K, V>[] table1, table2;\n    private int capacity;\n    private int maxIter;\n\n    @SuppressWarnings(\"unchecked\")\n    public CuckooHashTable(int cap) {\n        capacity = cap;\n        maxIter = cap;\n        table1 = new Entry[capacity];\n        table2 = new Entry[capacity];\n    }\n\n    public CuckooHashTable() { this(10); }\n\n    private int h1(K key) {\n        return Math.abs(key.hashCode()) % capacity;\n    }\n\n    private int h2(K key) {\n        return (Math.abs(key.hashCode()) / capacity) % capacity;\n    }\n\n    public void insert(K key, V value) {\n        if (find(key) != null) remove(key);\n\n        K curKey = key;\n        V curVal = value;\n\n        for (int i = 0; i < maxIter; i++) {\n            int pos1 = h1(curKey);\n            if (table1[pos1] == null) {\n                table1[pos1] = new Entry<>(curKey, curVal);\n                return;\n            }\n            K tempK = table1[pos1].key;\n            V tempV = table1[pos1].value;\n            table1[pos1] = new Entry<>(curKey, curVal);\n            curKey = tempK;\n            curVal = tempV;\n\n            int pos2 = h2(curKey);\n            if (table2[pos2] == null) {\n                table2[pos2] = new Entry<>(curKey, curVal);\n                return;\n            }\n            tempK = table2[pos2].key;\n            tempV = table2[pos2].value;\n            table2[pos2] = new Entry<>(curKey, curVal);\n            curKey = tempK;\n            curVal = tempV;\n        }\n\n        rehash();\n        insert(curKey, curVal);\n    }\n\n    public V find(K key) {\n        int pos1 = h1(key);\n        if (table1[pos1] != null && table1[pos1].key.equals(key))\n            return table1[pos1].value;\n        int pos2 = h2(key);\n        if (table2[pos2] != null && table2[pos2].key.equals(key))\n            return table2[pos2].value;\n        return null;\n    }\n\n    public boolean remove(K key) {\n        int pos1 = h1(key);\n        if (table1[pos1] != null && table1[pos1].key.equals(key)) {\n            table1[pos1] = null;\n            return true;\n        }\n        int pos2 = h2(key);\n        if (table2[pos2] != null && table2[pos2].key.equals(key)) {\n            table2[pos2] = null;\n            return true;\n        }\n        return false;\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    private void rehash() {\n        Entry<K, V>[] old1 = table1, old2 = table2;\n        capacity *= 2;\n        maxIter = capacity;\n        table1 = new Entry[capacity];\n        table2 = new Entry[capacity];\n        for (Entry<K, V> e : old1)\n            if (e != null) insert(e.key, e.value);\n        for (Entry<K, V> e : old2)\n            if (e != null) insert(e.key, e.value);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At most 2 bucket checks, guaranteed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually constant; *amortized with cycle-triggered rehash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as search — check 2 positions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rehash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New hash functions, full reinsertion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) worst-case search?"
      }), " Unlike chaining or linear probing, cuckoo hashing places each key in exactly one of two positions. You check position 1 in table1, position 2 in table2 — if it's not there, it doesn't exist. No chains, no probe sequences."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages"
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
            children: "O(1) worst-case lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert can trigger long eviction chains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) worst-case delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rehash complexity — new hash functions needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No linked list overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory overhead (two tables)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple search (2 checks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only ~50% table utilization typical"
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
          children: "Insertion cycle:"
        }), " If eviction loops infinitely, max iterations threshold triggers rehash with new hash functions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High load factor:"
        }), " Cuckoo hashing works well up to α ≈ 0.5 per table (50% utilization). Beyond that, cycle probability increases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate key:"
        }), " Must check both tables before insert to prevent duplicates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rehash with new hash functions:"
        }), " Unlike standard rehashing, cuckoo rehash may need entirely new hash function families (not just larger table)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-chaining-vs-open-addressing",
      children: "Comparison: Chaining vs Open Addressing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chaining"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Open Addressing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointers for linked lists (per entry)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No extra pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (scattered linked list nodes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (contiguous array)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load factor limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can exceed 1.0 (just degrades)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must stay < 0.7-0.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple — remove from list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex — tombstones required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — all keys one bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — full probe scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary/secondary clustering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rehash urgency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (can stay α = 1.5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (α > 0.8 kills performance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High load, frequent deletes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-constrained, cache-sensitive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to choose which:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chaining:"
        }), " Your hash table sees frequent deletions, or load factor may spike unpredictably."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open addressing:"
        }), " Memory is tight (no pointer overhead), keys are small, load factor is well-controlled."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-hash-table-operations",
      children: "Quick Reference: Hash Table Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chaining Avg"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chaining Worst"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Open Addr Avg"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Open Addr Worst"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cuckoo Avg"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cuckoo Worst"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1 + α)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1 + α)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rehash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "*Cuckoo worst-case insert triggers rehash on cycle detection."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chaining"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linear Probing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Quadratic Probing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Double Hashing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cuckoo Hashing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list at slot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next empty slot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i² offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i·h₂(k) offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evict to 2nd table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (pointer chasing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (sequential)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clustering problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secondary clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (remove from list)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tombstone needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tombstone needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tombstone needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (clear slot)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max useful α"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why Hash Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database indexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast key lookup (hash index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaining / Extendible hashing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symbol table (compiler)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) variable lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaining"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache (memcached, Redis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-value storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open addressing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spell checker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word existence check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom filter / Hash set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track seen elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store password hashes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptographic hash + salt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast IP lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cuckoo hashing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNA sequence assembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k-mer counting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal perfect hashing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load factor is your most important metric"
        }), ": Keep α < 0.75 for open addressing, α < 1.0 for chaining. Rehash when the threshold is exceeded."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose the right probing strategy"
        }), ": Linear probing is cache-friendly but suffers from primary clustering. Quadratic probing reduces clustering but may not find an empty slot even if one exists. Double hashing is safest for open addressing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash functions for integers"
        }), ": Use Knuth's multiplicative method: h(k) = ⌊m · (k · φ mod 1)⌋ where φ = (√5 − 1)/2. This distributes sequential keys uniformly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bloom filters save memory"
        }), ": A Bloom filter uses a bit array and k hash functions. With 10 bits per element and 7 hash functions, false positive rate is ~1%. No false negatives."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cuckoo hashing for real-time systems"
        }), ": O(1) worst-case lookup makes it ideal for hardware routers and packet processing where latency must be bounded."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash tables offer average O(1) operations; worst case is O(n) with poor hashing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chaining uses linked lists for collisions; open addressing probes for empty slots."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load factor α = n/m governs performance; rehash when α exceeds the threshold."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A good hash function is fast, deterministic, and distributes keys uniformly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double hashing minimizes clustering by using two independent hash functions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cuckoo hashing guarantees O(1) worst-case lookup with two hash tables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bloom filters test membership with possible false positives but no false negatives."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hash tables appear in nearly every technical interview. Here are the classic problems and optimal hash-based solutions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-two-sum",
      children: "Problem 1: Two Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of integers ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums"
      }), " and an integer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "target"
      }), ", return indices of the two numbers that add up to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "target"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash Table Approach:"
      }), " Iterate once. For each element ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), ", check if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "target - x"
      }), " exists in the hash table. If yes, return both indices. Otherwise, store ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " with its index."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def twoSum(nums, target):\n    seen = {}\n    for i, x in enumerate(nums):\n        complement = target - x\n        if complement in seen:\n            return [seen[complement], i]\n        seen[x] = i\n    return []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) time, O(n) space. Single pass — each lookup is O(1) average."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-subarray-sum-equals-k",
      children: "Problem 2: Subarray Sum Equals K"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array of integers ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums"
      }), " and an integer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), ", return the total number of continuous subarrays whose sum equals ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash Table Approach:"
      }), " Track prefix sums in a hash map. For each prefix sum ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), ", check if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s - k"
      }), " exists in the map (meaning a subarray ending here sums to k)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def subarraySum(nums, k):\n    count = 0\n    prefix_sum = 0\n    sum_map = {0: 1}  # empty subarray has sum 0\n\n    for x in nums:\n        prefix_sum += x\n        # subarray from (prev_index + 1) to current has sum k\n        # if prefix_sum - k was seen before\n        if prefix_sum - k in sum_map:\n            count += sum_map[prefix_sum - k]\n        sum_map[prefix_sum] = sum_map.get(prefix_sum, 0) + 1\n\n    return count\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) time, O(n) space."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nums = [1, 2, 3, -3, 1, 1, 1], k = 3"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "nums[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "prefix_sum"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sum_map before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "prefix_sum-k"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "count before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "count after"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0:1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0:1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2 → no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 → {0:1, 1:1}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0:1, 1:1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 → yes (1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 → {0:1, 1:1, 3:1}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0:1, 1:1, 3:1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 → yes (1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 → {0:1, 1:1, 3:1, 6:1}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0:1, 1:1, 3:1, 6:1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 → yes (1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 → {0:1, 1:1, 3:2, 6:1}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0:1, 1:1, 3:2, 6:1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 → yes (1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 → {0:1, 1:1, 3:2, 4:1, 6:1}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0:1, 1:1, 3:2, 4:1, 6:1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 → no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 → (add 5:1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0:1, 1:1, 3:2, 4:1, 5:1, 6:1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 → yes (2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 → (add 6:2)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " 5 subarrays sum to 3: [1,2], [3], [1,2,3,-3], [3,-3,1,1,1], [1,1,1]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-longest-consecutive-sequence",
      children: "Problem 3: Longest Consecutive Sequence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an unsorted array of integers, find the length of the longest consecutive elements sequence (O(n) time)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash Table Approach:"
      }), " Insert all numbers into a hash set. For each number, check if it's the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "start"
      }), " of a sequence (number-1 not in set). If so, count consecutive numbers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def longestConsecutive(nums):\n    num_set = set(nums)\n    longest = 0\n\n    for x in num_set:\n        if x - 1 not in num_set:  # start of a sequence\n            current = x\n            length = 1\n            while current + 1 in num_set:\n                current += 1\n                length += 1\n            longest = max(longest, length)\n\n    return longest\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) time, O(n) space. Each number is visited at most twice (once in the set, once in a sequence)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-first-missing-positive",
      children: "Problem 4: First Missing Positive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an unsorted integer array, find the smallest missing positive integer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash Table Approach:"
      }), " Insert all positive numbers into a hash set. Start checking from 1 upward: the first integer missing from the set is the answer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def firstMissingPositive(nums):\n    num_set = set(x for x in nums if x > 0)\n    i = 1\n    while i in num_set:\n        i += 1\n    return i\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) time, O(n) space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-count-frequency-of-elements",
      children: "Problem 5: Count Frequency of Elements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array, count the frequency of each distinct element."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def countFrequencies(nums):\n    freq = {}\n    for x in nums:\n        freq[x] = freq.get(x, 0) + 1\n    return freq\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) time, O(d) space where d = distinct elements."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up:"
      }), " Return top-K most frequent elements — use hash map for frequency + heap for top-K (O(n log k))."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-dict",
      children: "Python dict"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python's dictionary (", (0,jsx_runtime.jsx)(_components.code, {
        children: "dict"
      }), ") is a hash table using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "open addressing"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pseudo-random probing"
      }), " (a variant that uses the higher bits of the hash for better distribution). Key design choices:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash function:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hash()"
        }), " built-in, randomized per process start (PYTHONHASHSEED) to prevent DoS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load factor threshold:"
        }), " 2/3 (≈ 0.67) — triggers resize."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resize growth:"
        }), " 2x or 3x depending on version; CPython 3.12 doubles then adjusts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compact dict (3.6+):"
        }), " Stores indices separately from entries — preserves insertion order, reduces memory by ~25%."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-hashmap",
      children: "Java HashMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashMap"
      }), " uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "chaining"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "treeification"
      }), ". Key design:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initial capacity:"
        }), " 16 buckets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load factor threshold:"
        }), " 0.75 (default)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Treeify threshold:"
        }), " When a chain reaches 8 entries AND table size ≥ 64, the linked list converts to a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "red-black tree"
        }), " — O(log n) worst-case instead of O(n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resize:"
        }), " Doubles capacity, rehashes all entries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash function:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hashCode()"
        }), " XOR with higher bits (", (0,jsx_runtime.jsx)(_components.code, {
          children: "h ^ (h >>> 16)"
        }), ") to spread entropy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "database-indexing",
      children: "Database Indexing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two main hash-based indexing strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static hash index:"
        }), " Hash function maps key to a fixed bucket. Overflow chains handle collisions. Used in main-memory databases (Redis, Memcached)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Extendible hashing (dynamic):"
        }), " Grows by splitting individual buckets when they overflow — no full rehash needed. Used in database buffer managers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linear hashing:"
        }), " Another dynamic scheme that adds buckets incrementally. Used in some disk-based systems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "caching-memcached--redis",
      children: "Caching (Memcached / Redis)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memcached:"
        }), " Uses hash tables internally for O(1) key lookup in memory cache. The hash table maps key strings to cached objects with LRU eviction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redis:"
        }), " Core data structures (hash, set, sorted set) are built on hash tables. The global key space is a hash table. Redis uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "lazy rehashing"
        }), " (incremental rehash) to avoid blocking during resize — moves buckets from old to new table in small steps during each command."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bloom-filters",
      children: "Bloom Filters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bloom filter"
      }), " is a space-efficient probabilistic hash-based data structure for membership testing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        }), " A bit array of size ", (0,jsx_runtime.jsx)(_components.code, {
          children: "m"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k"
        }), " independent hash functions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert:"
        }), " For each hash function, compute hᵢ(key) mod m, set that bit to 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query:"
        }), " For each hash function, check if all corresponding bits are 1. If any is 0, the key was ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "definitely not inserted"
        }), ". If all are 1, the key is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "probably inserted"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key property:"
        }), " False positives possible; false negatives impossible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real uses:"
        }), " Cassandra and HBase (bloom filters avoid disk reads for non-existent rows), Chromium (track malicious URLs), Bitcoin SPV (lightweight transaction verification), caching (avoid cache stampedes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "False positive rate:"
        }), " Approx (1 - e^(-kn/m))^k. Optimal k = (m/n) * ln 2."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-hash-table-configuration-summary",
      children: "Real-World Hash Table Configuration Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collision Resolution"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Initial Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Load Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Growth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Special Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPython dict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open addressing (random probing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact layout, insertion order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Java HashMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaining + treeification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree at 8 collisions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Go map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open addressing (hash-of-hash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.5 (B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental rehash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rust HashMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open addressing (Robin Hood)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robin Hood — equalize probe lengths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis dict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy incremental rehash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memcached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRU eviction integration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Using a non-idempotent hashCode (changes over time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object modified after insertion causes lookup failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use immutable fields for the hash code; recompute on mutation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storing mutable objects as keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If key changes, bucket lookup returns null even though object still exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use only immutable types (string, number) as keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ignoring load factor — allowing table to become too full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High load factor → many collisions → O(n) degenerate performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resize when load factor > 0.75 (or chosen threshold)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom hashCode returning a constant for all objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every entry lands in the same bucket → degenerate to a linked list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribute hash bits: use prime multipliers and mixed bit shifts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using modulo with a non-prime capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certain hash patterns collide more often with composite capacities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use prime or power-of-2 capacities with proper mixing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Forgetting to handle ", (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            }), " key/value"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["NullPointerException on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "key.hashCode()"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value.equals()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use a sentinel or special-case null key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not rehashing after resize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Old entries point to wrong buckets after capacity changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recompute index = hashCode % newCapacity for every entry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-hashtable-implementation",
      children: "TypeScript HashTable Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface IHashTable<K, V> {\n    put(key: K, value: V): void;\n    get(key: K): V | undefined;\n    remove(key: K): boolean;\n    contains(key: K): boolean;\n    size(): number;\n}\n\nclass HashNode<K, V> {\n    constructor(\n        public key: K,\n        public value: V,\n        public next: HashNode<K, V> | null = null\n    ) {}\n}\n\nclass HashTable<K, V> implements IHashTable<K, V> {\n    private buckets: (HashNode<K, V> | null)[];\n    private _size: number = 0;\n    private static readonly DEFAULT_CAPACITY = 16;\n    private static readonly LOAD_FACTOR = 0.75;\n\n    constructor(capacity: number = HashTable.DEFAULT_CAPACITY) {\n        this.buckets = new Array(capacity).fill(null);\n    }\n\n    private hash(key: K): number {\n        const str = String(key);\n        let hash = 0;\n        for (let i = 0; i < str.length; i++) {\n            hash = (hash * 31 + str.charCodeAt(i)) | 0;\n        }\n        return Math.abs(hash) % this.buckets.length;\n    }\n\n    put(key: K, value: V): void {\n        const index = this.hash(key);\n        let node = this.buckets[index];\n        while (node) {\n            if (node.key === key) {\n                node.value = value; // update\n                return;\n            }\n            node = node.next;\n        }\n        // insert at head\n        this.buckets[index] = new HashNode(key, value, this.buckets[index]);\n        this._size++;\n        if (this._size > this.buckets.length * HashTable.LOAD_FACTOR) {\n            this.resize(this.buckets.length * 2);\n        }\n    }\n\n    get(key: K): V | undefined {\n        const index = this.hash(key);\n        let node = this.buckets[index];\n        while (node) {\n            if (node.key === key) return node.value;\n            node = node.next;\n        }\n        return undefined;\n    }\n\n    remove(key: K): boolean {\n        const index = this.hash(key);\n        let node = this.buckets[index];\n        let prev: HashNode<K, V> | null = null;\n        while (node) {\n            if (node.key === key) {\n                if (prev) prev.next = node.next;\n                else this.buckets[index] = node.next;\n                this._size--;\n                return true;\n            }\n            prev = node;\n            node = node.next;\n        }\n        return false;\n    }\n\n    contains(key: K): boolean { return this.get(key) !== undefined; }\n    size(): number { return this._size; }\n\n    private resize(newCapacity: number): void {\n        const oldBuckets = this.buckets;\n        this.buckets = new Array(newCapacity).fill(null);\n        this._size = 0;\n        for (const bucket of oldBuckets) {\n            let node = bucket;\n            while (node) {\n                this.put(node.key, node.value);\n                node = node.next;\n            }\n        }\n    }\n}\n\n// Two-Sum using a hash table (classic interview problem)\nfunction twoSum(nums: number[], target: number): [number, number] | null {\n    const map = new Map<number, number>();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) {\n            return [map.get(complement)!, i];\n        }\n        map.set(nums[i], i);\n    }\n    return null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which of the following is NOT a collision resolution technique?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Separate chaining"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Open addressing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Double hashing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Bubble sort ✓"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The load factor α in a hash table is defined as:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) α = number of buckets / number of entries"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) α = number of entries / number of buckets ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) α = number of collisions / number of entries"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) α = table size / entry size"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In linear probing, the primary clustering problem occurs because:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Keys with the same hash form a cluster"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Collisions cause consecutive occupied slots to coalesce ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The hash function is weak"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The table is too large"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the worst-case time complexity for a hash table with separate chaining and a universal hash function?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n²)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Double hashing uses a second hash function to determine:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The bucket index"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The probe step size ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The hash table capacity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The load factor"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The hashCode 31 is commonly used because:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) It is a Mersenne prime"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 31 * i can be optimized as (i << 5) - i ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) It minimizes hash collisions better than any other number"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) It's the smallest prime"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-d, 10-b, 11-b, 12-c, 13-b, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a hash map with open addressing"
          }), ": Implement a hash map using linear probing with load factor handling, including ", (0,jsx_runtime.jsx)(_components.code, {
            children: "put"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "get"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "remove"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "contains"
          }), " methods."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find the first non-repeating character in a string"
          }), ": Given a string, find the first character that does not repeat. Solve in O(n) using a hash table."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Group anagrams"
          }), ": Given a list of strings, group anagrams together. Use a hash map where the key is the sorted string."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Longest consecutive sequence"
          }), ": Given an unsorted array of integers, find the length of the longest consecutive elements sequence in O(n) time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subarray sum equals K"
          }), ": Given an array of integers and an integer K, find the total number of subarrays whose sum equals K. Use prefix sum + hash map."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "4Sum with hash map"
          }), ": Given an array of integers, find all unique quadruplets that sum to a target using hashing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Longest substring without repeating characters"
          }), ": Use sliding window + hash set/map for O(n) solution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Top K frequent elements"
          }), ": Given an array, find the K most frequent elements. Use hash map + bucket sort or min-heap."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a time-based key-value store"
          }), ": Support ", (0,jsx_runtime.jsx)(_components.code, {
            children: "set(key, value, timestamp)"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "get(key, timestamp)"
          }), " returning the value for the exact or greatest previous timestamp."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Encode and decode tiny URLs"
          }), ": Design a URL shortening service mapping short codes ↔ original URLs using hash maps and base62 encoding."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "collision-resolution-comparison",
      children: "Collision Resolution Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst-case Search"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deletion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cache Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Clustering"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separate Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + buckets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Probing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy deletion needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic Probing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secondary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cuckoo Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (deterministic)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) O(n²)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is load factor α?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) m/n"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) n/m ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) n · m"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) log n / m"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which collision resolution uses linked lists?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Linear probing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Chaining ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Double hashing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Quadratic probing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What guarantees O(1) worst-case lookup?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Chaining"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Cuckoo hashing ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Linear probing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Double hashing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A Bloom filter can produce:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) False negatives only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) False positives only ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Both false positives and negatives"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Neither"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Why must open addressing use tombstones for deletion?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) To prevent memory leaks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) To preserve probe sequences for existing keys ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) To track deleted entries count"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Tombstones are optional — clearing the slot works fine in all cases"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which probing strategy suffers from primary clustering?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Linear probing ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Quadratic probing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Double hashing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Cuckoo hashing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Java's HashMap converts a chain to a tree when:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) α > 0.75"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Chain length reaches 8 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Table size reaches 64"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Both b and c combined ✓"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-a, 2-b, 3-b, 4-b, 5-b, 6-b, 7-a, 8-d"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash tables provide average O(1) search, insert, and delete by mapping keys to array indices via hash functions."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chaining"
        }), " stores colliding keys in linked lists — simple, safe deletion, good at high load factors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open addressing"
        }), " stores all entries in the array itself — memory-efficient but requires tombstones for deletion and low load factors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Double hashing"
        }), " uses a second hash for probe step size — minimizes clustering among probing strategies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cuckoo hashing"
        }), " achieves O(1) worst-case lookup with two tables and an eviction-based insert."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Load factor α = n/m drives performance; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rehashing"
        }), " (doubling and reinserting) maintains a low α."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview patterns:"
        }), " Two sum, subarray sum, longest consecutive sequence, first missing positive — all solvable in O(n) with hash tables."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real systems:"
        }), " Python dict, Java HashMap, Redis, Memcached, database indexes, and bloom filters all use hash table internals."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the worst-case time complexity of hash table operations? When does it occur?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare chaining and open addressing. When is each preferable?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is load factor important? What happens if it becomes too high?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does cuckoo hashing guarantee O(1) worst-case search but chaining does not?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why tombstones are necessary in open addressing deletion."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a hash function for 2D points ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(x, y)"
        }), " that distributes them uniformly across buckets."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a hash table that uses quadratic probing for collision resolution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program to count word frequencies in a text file using a hash table."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given an array of n integers, find the largest subarray with sum 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a simple Bloom filter with 3 hash functions (djb2, sdbm, murmur) and test false positive rate."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bloom filter"
          }), " — a probabilistic data structure that tests set membership with possible false positives but no false negatives. Use multiple hash functions and a bit array."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a thread-safe hash table"
          }), " that supports concurrent reads and synchronized writes. Use fine-grained locking (lock per bucket) to maximize concurrency."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement extendible hashing"
          }), " — a dynamic hash table that grows by splitting individual buckets rather than rehashing the entire table. Use a directory of pointers to buckets and a global depth counter."]
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