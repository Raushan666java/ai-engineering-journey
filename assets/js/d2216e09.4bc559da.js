"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[30756],{

/***/ 74547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_14_distributed_data_structures_md_d22_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-14-distributed-data-structures-md-d22.json
const site_docs_courses_system_design_14_distributed_data_structures_md_d22_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/14-distributed-data-structures","title":"Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond","description":"Previous 15 Cdn Dns Edge","source":"@site/docs/courses/system-design/14-distributed-data-structures.md","sourceDirName":"courses/system-design","slug":"/system-design/14-distributed-data-structures","permalink":"/ai-engineering-journey/system-design/14-distributed-data-structures","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-distributed-data-structures","slug":"/system-design/14-distributed-data-structures","title":"Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond","sidebar_label":"Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond","sidebar_position":14},"sidebar":"coursesSidebar","previous":{"title":"Chapter 13: Low-Level Design: Concurrency and Threading","permalink":"/ai-engineering-journey/system-design/13-lld-concurrency"},"next":{"title":"Chapter 15: CDN, DNS, and Edge Computing","permalink":"/ai-engineering-journey/system-design/15-cdn-dns-edge"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/14-distributed-data-structures.md


const frontMatter = {
	id: '14-distributed-data-structures',
	slug: '/system-design/14-distributed-data-structures',
	title: 'Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond',
	sidebar_label: 'Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond';

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
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-1",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-1",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1. Consistent Hashing",
  "id": "1-consistent-hashing",
  "level": 3
}, {
  "value": "2. Rendezvous Hashing (HRW)",
  "id": "2-rendezvous-hashing-hrw",
  "level": 3
}, {
  "value": "3. Merkle Trees",
  "id": "3-merkle-trees",
  "level": 3
}, {
  "value": "4. Bloom Filters",
  "id": "4-bloom-filters",
  "level": 3
}, {
  "value": "Counting Bloom Filter",
  "id": "counting-bloom-filter",
  "level": 4
}, {
  "value": "Scalable Bloom Filter",
  "id": "scalable-bloom-filter",
  "level": 4
}, {
  "value": "5. Count-Min Sketch",
  "id": "5-count-min-sketch",
  "level": 3
}, {
  "value": "6. HyperLogLog",
  "id": "6-hyperloglog",
  "level": 3
}, {
  "value": "7. Cuckoo Filters",
  "id": "7-cuckoo-filters",
  "level": 3
}, {
  "value": "8. Quotient Filter and XOR Filter",
  "id": "8-quotient-filter-and-xor-filter",
  "level": 3
}, {
  "value": "9. Comparison Table",
  "id": "9-comparison-table",
  "level": 3
}, {
  "value": "10. Time-Series Data Structures",
  "id": "10-time-series-data-structures",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Consistent Hashing with Virtual Nodes Simulation",
  "id": "example-1-consistent-hashing-with-virtual-nodes-simulation",
  "level": 3
}, {
  "value": "Example 2: Bloom Filter Tuning Trade-Off Analysis",
  "id": "example-2-bloom-filter-tuning-trade-off-analysis",
  "level": 3
}, {
  "value": "Example 3: HyperLogLog Merge in Distributed Counting",
  "id": "example-3-hyperloglog-merge-in-distributed-counting",
  "level": 3
}, {
  "value": "Example 4: Cuckoo Filter Implementation",
  "id": "example-4-cuckoo-filter-implementation",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study",
  "id": "case-study",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-1",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-1",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-1",
  "level": 2
}, {
  "value": "TypeScript: Consistent Hash Ring, Count-Min Sketch, HyperLogLog",
  "id": "typescript-consistent-hash-ring-count-min-sketch-hyperloglog",
  "level": 3
}, {
  "value": "TypeScript: Bloom Filter with Optimal k and FP Calculation",
  "id": "typescript-bloom-filter-with-optimal-k-and-fp-calculation",
  "level": 3
}, {
  "value": "TypeScript: Merkle Tree for Anti-Entropy",
  "id": "typescript-merkle-tree-for-anti-entropy",
  "level": 3
}, {
  "value": "TypeScript: HyperLogLog with Merge and Bias Correction",
  "id": "typescript-hyperloglog-with-merge-and-bias-correction",
  "level": 3
}, {
  "value": "Distributed Data Structures Feature Comparison",
  "id": "distributed-data-structures-feature-comparison",
  "level": 3
}, {
  "value": "Implementation: Distributed Data Structures",
  "id": "implementation-distributed-data-structures",
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
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
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
        id: "chapter-14-distributed-data-structures--consistent-hashing-and-beyond",
        children: "Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/13-lld-concurrency",
          children: "13 Lld Concurrency"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/15-cdn-dns-edge",
          children: "15 Cdn Dns Edge"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand consistent hashing, virtual nodes, and rendezvous hashing for distributed key placement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze Merkle trees and their role in anti-entropy reconciliation in Dynamo-style databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Bloom filters with parameter tuning: false positive rate, optimal hash count, and space trade-offs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contrast probabilistic data structures: Bloom, Cuckoo, Count-Min Sketch, and HyperLogLog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement counting, scalable, and cuckoo filters for real-world distributed systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate time-series data structures including segment trees and round-robin databases"
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
        href: "../../assets/images/lessons/system-design/14-distributed-data-structures/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/14-distributed-data-structures/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/14-distributed-data-structures/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/14-distributed-data-structures/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/14-distributed-data-structures/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/14-distributed-data-structures/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| Aspect | Details |"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts] --> B[Design Decisions]\n    B --> C[Real-World Examples]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|--------|---------|\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope"
      }), " | Distributed data structures, Bloom filters, HyperLogLog, Count-Min Sketch |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts"
      }), " | Core topics covered in Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Skills"
      }), " | Probabilistic data structure selection, memory budgeting |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Angle"
      }), " | Frequently tested in system design interviews |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-1",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core concepts covered in Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, Examples, Concept Comparison, Quick Reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Design Skills"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concept mastery and practical application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interview Angle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common system design interview topic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-1",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory]\n    B[Concept Comparison]\n    A --> B\n    C[Quick Reference]\n    B --> C\n    D[CrossApplication Matrix]\n    C --> D\n    E[Chapter Quiz]\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation ? master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/14-distributed-data-structures.png",
        alt: "Distributed Data Structures Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-consistent-hashing",
      children: "1. Consistent Hashing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it is frequently tested in system design interviews."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept ? it appears in nearly every system design interview. Understand both the how and the why."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nConsistent hashing maps keys to nodes in a hash ring (range [0, 2^m - 1]). Both nodes and keys hash into this ring; each key is assigned to the nearest clockwise node. When a node joins or leaves, only keys in its immediate vicinity redistribute — O(K/N) keys rather than O(K) reshuffling, where K is total keys and N is node count."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash ring"
      }), ": Construct a circle of size 2^m (typically m = 32 or 64). Hash each node identifier (e.g., IP:port) with a uniform hash function and place it on the ring. Hash each key and walk clockwise to find the first node."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual nodes"
      }), ": Each physical node occupies multiple positions on the ring. With R replica tokens, the expected coefficient of variation for load is 1/vR. Standard deployments use R = 100-200 virtual nodes per physical node. This smooths load imbalances that arise from non-uniform hash distributions and heterogeneous node capacities."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation sketch"
      }), " (hash ring with binary search):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib, bisect\n\nclass ConsistentHashRing:\n    def __init__(self, nodes=None, replicas=150):\n        self.replicas = replicas\n        self.ring = {}\n        self.sorted_keys = []\n        if nodes:\n            for n in nodes:\n                self.add_node(n)\n\n    def _hash(self, key):\n        return int(hashlib.md5(key.encode()).hexdigest(), 16)\n\n    def add_node(self, node_id):\n        for i in range(self.replicas):\n            token = self._hash(f\"{node_id}:{i}\")\n            self.ring[token] = node_id\n            self.sorted_keys.append(token)\n        self.sorted_keys.sort()\n\n    def remove_node(self, node_id):\n        for i in range(self.replicas):\n            token = self._hash(f\"{node_id}:{i}\")\n            del self.ring[token]\n            self.sorted_keys.remove(token)\n\n    def get_node(self, key):\n        h = self._hash(key)\n        idx = bisect.bisect(self.sorted_keys, h) % len(self.sorted_keys)\n        return self.ring[self.sorted_keys[idx]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-rendezvous-hashing-hrw",
      children: "2. Rendezvous Hashing (HRW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid over-engineering. Start simple, measure, then optimize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Highest Random Weight (HRW) assigns each key to the node with the highest weight = hash(key || node_id). It requires O(N) computation per lookup (scan all nodes), but achieves perfect distribution with zero metadata overhead and handles node additions/removals gracefully using an O(N) mapping."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consistent Hashing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rendezvous Hashing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load balance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inherently balanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Node removal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K/N) redistribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "W(node, key) = hash(node || key)      # HRW weight function\nselected = argmax(W(n, key)) for n in nodes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For large node sets, HRW can be accelerated with a tree-based grouping (hierarchical HRW), reducing lookup to O(log N)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-merkle-trees",
      children: "3. Merkle Trees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Always articulate trade-offs clearly ? interviewers value reasoning over the \"right\" answer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Merkle tree is a complete binary tree where leaf nodes store hashes of data blocks and internal nodes store hashes of their children. The root hash commits the entire dataset. Two replicas compare root hashes; if they differ, they walk down divergent branches to find the specific blocks that differ — O(log B) comparisons for B blocks rather than O(B)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Application in Dynamo"
      }), ": Each node maintains a Merkle tree per key range. During anti-entropy (gossip-based reconciliation), nodes exchange root hashes. Mismatched ranges are recursively compared until individual conflicting key-value pairs are identified. This reduces reconciliation bandwidth from O(N) to O(log N) per range."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Leaf: h(block_1), h(block_2), ..., h(block_n)\nParent: h(h(block_1) || h(block_2))\nRoot: h(h(h(block_1) || h(block_2)) || h(h(block_3) || h(block_4)))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cassandra uses Merkle trees for read repair and hinted handoff reconciliation. Trees are built incrementally during compaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-bloom-filters",
      children: "4. Bloom Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Bloom filter is a space-efficient probabilistic data structure that tests set membership. It consists of an m-bit array and k independent hash functions. To insert x, set bits at positions h_1(x), h_2(x), ..., h_k(x) to 1. To query y, check all k positions: if any is 0, y is definitely not in the set; if all are 1, y is probably in the set."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "False positive rate"
      }), " (after n insertions):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "p = (1 - (1 - 1/m)^(k*n))^k  ˜  (1 - e^(-k*n/m))^k\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimal k"
      }), ": k_opt = (m/n) * ln(2)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At k_opt, p = (1/2)^k ˜ 0.6185^(m/n). For a 1% false positive rate, m/n ˜ 9.6 bits per element."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib, math\n\nclass BloomFilter:\n    def __init__(self, capacity, error_rate=0.01):\n        self.m = int(-capacity * math.log(error_rate) / (math.log(2)**2))\n        self.k = int((self.m / capacity) * math.log(2))\n        self.bits = bytearray((self.m + 7) // 8)\n\n    def _hashes(self, item):\n        h = hashlib.sha256(item.encode()).digest()\n        return [int.from_bytes(h, 'big') % self.m for _ in range(self.k)]\n\n    def add(self, item):\n        for pos in self._hashes(item):\n            self.bits[pos >> 3] |= 1 << (pos & 7)\n\n    def contains(self, item):\n        return all(self.bits[pos >> 3] & (1 << (pos & 7))\n                   for pos in self._hashes(item))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "counting-bloom-filter",
      children: "Counting Bloom Filter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extends Bloom filters with a counter array (typically 4-bit counters) instead of bits. Supports deletion by decrementing counters. Counter overflow is possible with 4-bit counters when many items hash to the same position; mitigation uses larger counters or periodic counter reaping."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scalable-bloom-filter",
      children: "Scalable Bloom Filter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A dynamic Bloom filter that grows as elements are added. Consists of a series of Bloom filters with geometrically decreasing false positive rates (r = 0.9). When the current filter reaches capacity, a new filter is created with twice the capacity. Query checks all filters in sequence."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-count-min-sketch",
      children: "5. Count-Min Sketch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A probabilistic frequency table using a 2D array of width w and depth d (typically d = 4-5, w = 2/e for error bound e). Each row uses an independent hash function. Increment entries at h_i(x) across all d rows. Point query returns the minimum of all d values: min(CMS[1][h_1(x)], ..., CMS[d][h_d(x)])."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error bound: P(|estimate - true| > e * total_count) = d, where d = e^(-d)\nSpace: O(d * w) counters\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Applications: heavy hitters detection, network traffic monitoring, top-k tracking."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\n\nclass CountMinSketch:\n    def __init__(self, eps=0.001, delta=0.99):\n        self.w = int(2 / eps)\n        self.d = int(-math.log(1 - delta) / math.log(2))\n        self.table = [[0] * self.w for _ in range(self.d)]\n\n    def _hash(self, x, i):\n        h = hashlib.sha256(f\"{i}:{x}\".encode()).digest()\n        return int.from_bytes(h, 'big') % self.w\n\n    def increment(self, x, count=1):\n        for i in range(self.d):\n            self.table[i][self._hash(x, i)] += count\n\n    def estimate(self, x):\n        return min(self.table[i][self._hash(x, i)] for i in range(self.d))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-hyperloglog",
      children: "6. HyperLogLog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Estimates the cardinality (number of distinct elements) of a multiset using O(log log N) space — 12 KB for 2% error on billions of elements. The algorithm observes the longest run of leading zeros in hashed values: if we see a hash starting with ? zeros, we expect approximately 2^? distinct elements."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Loglog counting"
      }), ": For n elements with hash values uniformly distributed in [0, 2^L), the probability of a hash beginning with ? zeros is 2^(-?-1). The maximum observed ? across n elements approximates log2(n)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HyperLogLog"
      }), " improves this with stochastic averaging: split the hash into a bucket index (first p bits, yielding m = 2^p registers) and a value (remaining bits). Track ?_max per bucket. Combine estimates using harmonic mean:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "E = a_m * m² / S(2^(-M[j]))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where a_m is a bias correction constant (~0.7213 for m = 2^12)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Merge operation"
      }), ": Two HLL sketches merge by taking element-wise max of registers, enabling distributed cardinality estimation across shards."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib, math\n\nclass HyperLogLog:\n    def __init__(self, p=12):\n        self.p = p\n        self.m = 1 << p\n        self.registers = [0] * self.m\n\n    def _rho(self, x):\n        return (x ^ (x & (x - 1))).bit_length() if x else 0\n\n    def add(self, item):\n        h = hashlib.sha256(item.encode()).digest()\n        x = int.from_bytes(h, 'big')\n        idx = x >> (64 - self.p)\n        w = x & ((1 << (64 - self.p)) - 1)\n        self.registers[idx] = max(self.registers[idx], self._rho(w))\n\n    def cardinality(self):\n        z = sum(2.0 ** (-r) for r in self.registers)\n        alpha = 0.7213 / (1 + 1.079 / self.m)\n        return int(alpha * self.m * self.m / z)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-cuckoo-filters",
      children: "7. Cuckoo Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Cuckoo filter stores fingerprints (f-bit hash of each item) in a Cuckoo hash table. Each item maps to two candidate buckets (via primary hash and XOR of fingerprint). On insertion, if both buckets are full, existing entries are relocated (cuckoo kick). Supports deletion natively by removing the fingerprint."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      }), ": Supports deletion, O(1) lookup, 95% load factor, better lookup performance than Bloom for low false positive targets (< 3%). False positive rate ˜ 1/2^f for f-bit fingerprint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "f = log2(1/p) + 3  bits per fingerprint\nSpace ˜ (log2(1/p) + 3) / load_factor  bits per item\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-quotient-filter-and-xor-filter",
      children: "8. Quotient Filter and XOR Filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quotient filter"
      }), ": Stores the quotient (upper bits of hash) and remainder (lower bits) in a compact hash table using linear probing. Supports deletion, merging, and better cache locality than Bloom filters. Uses 3 metadata bits per slot: is_occupied, is_continuation, is_shifted."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "XOR filter"
      }), ": A recent alternative to Bloom filters for static sets (no inserts after build). Uses a single hash function and 3 hash tables. Requires ~1.23 log2(1/p) + 3 bits per entry — approximately 20-30% smaller than Bloom filters for 1% false positive rate. Cannot support dynamic insertions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-comparison-table",
      children: "9. Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supports Delete"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space/Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "False Positive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operations"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (standard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.6 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1% (tunable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert + Lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Membership, cache filter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Counting Bloom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~36 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert + Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deletable membership"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cuckoo Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~13 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1-3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert + Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deletable, low FP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count-Min Sketch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e=0.1% (bound)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment + Query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency estimation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HyperLogLog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2% error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add + Merge + Count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cardinality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quotient Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert + Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mergable, cache-friendly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XOR Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (static)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~7 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build + Lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static set, minimal space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-time-series-data-structures",
      children: "10. Time-Series Data Structures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Segment tree"
      }), ": A binary tree storing aggregates (sum, min, max, average) over intervals. Each leaf represents a time bucket; internal nodes store combined values for their interval. Query range in O(log n) time. Used in Prometheus TSDB for range query acceleration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Round-robin database (RRD)"
      }), ": A fixed-size circular buffer of time-series data points. New values overwrite the oldest. Multiple archive tiers provide automatic downsampling: high-resolution recent data (e.g., 1-minute intervals for 24 hours), lower-resolution historical data (e.g., 1-hour intervals for 1 year). Used by RRDtool and Graphite."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time-structured merge tree (TSM)"
      }), ": Used by InfluxDB. Ingest in memory (memtable), flush to immutable sorted files, periodic compaction merges files. Optimized for time-range scans."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-consistent-hashing-with-virtual-nodes-simulation",
      children: "Example 1: Consistent Hashing with Virtual Nodes Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simulate a 3-node cluster with 150 virtual nodes per physical node. Distribute 100,000 keys and measure load imbalance:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "nodes = [\"node-a\", \"node-b\", \"node-c\"]\nring = ConsistentHashRing(nodes, replicas=150)\n\ndist = {n: 0 for n in nodes}\nfor i in range(100_000):\n    key = f\"user:{i}\"\n    dist[ring.get_node(key)] += 1\n\n# Results (typical):\n# node-a: 33412, node-b: 33189, node-c: 33399\n# Coefficient of variation < 0.005 with 150 replicas\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without virtual nodes (replicas=1), CV jumps to ~0.3-0.5 depending on hash distribution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-bloom-filter-tuning-trade-off-analysis",
      children: "Example 2: Bloom Filter Tuning Trade-Off Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given 10 million elements and 1% false positive rate:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "n = 10_000_000\np = 0.01\nm = int(-n * math.log(p) / (math.log(2)**2))  # 95,904,678 bits ˜ 11.4 MB\nk = int((m / n) * math.log(2))                # 7 hash functions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At k = 7 and m/n = 9.6, the actual false positive rate is (1 - e^(-7/9.6))^7 ˜ 0.0081 (0.81%), slightly better than target. Reducing m/n to 6.2 doubles the FP rate to ~2%."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-hyperloglog-merge-in-distributed-counting",
      children: "Example 3: HyperLogLog Merge in Distributed Counting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Count daily unique visitors across 12 web servers, each with its own HLL:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "hll_shards = [HyperLogLog(p=12) for _ in range(12)]\n\n# Each server adds its visitors\nfor server_id, visitors in enumerate(server_logs):\n    for v in visitors:\n        hll_shards[server_id].add(v)\n\n# Merge all shards into one\nmerged = HyperLogLog(p=12)\nfor hll in hll_shards:\n    for i in range(merged.m):\n        merged.registers[i] = max(merged.registers[i], hll.registers[i])\n\nprint(f\"Estimated unique visitors: {merged.cardinality()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At p = 12 (m = 4096), total memory = 4096 registers × 6 bits ˜ 3 KB per shard, merged result accurate within ~2%."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-cuckoo-filter-implementation",
      children: "Example 4: Cuckoo Filter Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib, random\n\nclass CuckooFilter:\n    def __init__(self, capacity, fingerprint_bits=8, bucket_size=4, max_kicks=500):\n        self.f = fingerprint_bits\n        self.b = bucket_size\n        self.max_kicks = max_kicks\n        self.table = [[None] * bucket_size for _ in range(self._next_pow2(capacity // bucket_size))]\n        self.size = 0\n\n    def _next_pow2(self, n): return 1 << (n - 1).bit_length()\n\n    def _fingerprint(self, x):\n        h = hashlib.sha256(x.encode()).digest()\n        return int.from_bytes(h, 'big') & ((1 << self.f) - 1)\n\n    def _hash(self, x): return int(hashlib.md5(x.encode()).hexdigest(), 16) % len(self.table)\n\n    def _alt_bucket(self, i, fp): return (i ^ hash(fp)) % len(self.table)\n\n    def insert(self, x):\n        fp = self._fingerprint(x)\n        i1 = self._hash(x)\n        i2 = self._alt_bucket(i1, fp)\n        for i in (i1, i2):\n            for j in range(self.b):\n                if self.table[i][j] is None:\n                    self.table[i][j] = fp; self.size += 1; return\n        for _ in range(self.max_kicks):\n            kick_idx = random.randrange(self.b)\n            fp, self.table[i1][kick_idx] = self.table[i1][kick_idx], fp\n            i1 = self._alt_bucket(i1, fp)\n            i2 = self._alt_bucket(i1, fp)\n            for j in range(self.b):\n                if self.table[i1][j] is None:\n                    self.table[i1][j] = fp; self.size += 1; return\n        raise Exception(\"Filter full\")\n\n    def contains(self, x):\n        fp = self._fingerprint(x)\n        i1 = self._hash(x)\n        i2 = self._alt_bucket(i1, fp)\n        return any(self.table[i][j] == fp for i in (i1, i2) for j in range(self.b))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Metric"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick Reference is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appropriate for specific system contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice involves trade-offs"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the optimal k for a Bloom filter with m=960 bits and n=100 elements?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            }), " (k = (m/n)·ln2 ≈ 6.65, round to 7)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does a Merkle tree reduce reconciliation bandwidth in Dynamo?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By compressing data blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By comparing root hashes and walking divergent branches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By using Bloom filters per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By gossiping full datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which data structure estimates cardinality using O(log log N) space?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count-Min Sketch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HyperLogLog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cuckoo Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary advantage of virtual nodes in consistent hashing?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster lookups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower memory usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smoother load distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which filter supports deletion natively?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard Bloom Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting Bloom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOR Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalable Bloom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use consistent hashing with 150+ virtual nodes per physical node for balanced key distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB, Cassandra, Riak — key-value stores needing elastic scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pair Merkle trees with gossip protocol for O(log N) anti-entropy reconciliation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamo-style databases where nodes must detect and repair divergent replicas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tune Bloom filter m/n ratio to 9.6 for 1% false positive rate; use optimal k = (m/n)·ln2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache filters (prevent cache miss storms), web crawler dedup, spell checkers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HyperLogLog with p=12 provides ~2% error using only 12KB — perfect for distributed cardinality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique visitor counting across CDN edges, distributed analytics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count-Min Sketch excels at heavy hitter detection with bounded error; use d=4-5 rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network traffic monitoring, trending topics, top-k in streaming data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cuckoo filters beat Bloom filters for lookup speed when FP rate target is <3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deletable membership sets, on-disk index filters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XOR filters are 20-30% smaller than Bloom but require static datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only datasets, blockchain transaction filters, archive indexes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study",
      children: "Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario: Global User Analytics Pipeline"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A social media platform with 500 million monthly active users needs to track daily unique visitors across 20 global data centers. Each data center sees 50 million unique users per day. The naive approach — storing every user ID in a distributed database — would consume 500M × 32 bytes ≈ 16 GB per day per data center, plus the I/O overhead of deduplication queries."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The team deploys HyperLogLog (p=14, ~26 KB per data center) at each edge location. Every user interaction is hashed and added to the local HLL register. At the end of each hour, a central aggregator fetches all 20 HLL sketches (total: 20 × 26 KB = 520 KB per hour) and merges them via element-wise max. The merged sketch estimates global unique visitors with ~1.5% error — sufficient for business reporting. The 99th percentile error is under 3%, and the total memory across all data centers is under 1 MB, compared to 160+ GB for raw ID storage."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For cache efficiency, the CDN layer uses a Bloom filter (m/n = 9.6, k = 7) per PoP to filter out requests for non-existent short URLs before they hit the origin. This eliminates 99% of unnecessary origin lookups. When the filter's false positive rate exceeds 2% (monitored weekly), the filter is rebuilt with a larger bit array. The combined architecture — HLL for analytics, Bloom for cache filtering, consistent hashing for data partitioning — handles 2 million requests per second across 50 microservices with P99 latency under 20 ms."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic in Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental to system design"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-1",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick Reference is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential concept for Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix-1",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevant across multiple system design scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice has trade-offs"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-1",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Chapter Quiz is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the primary trade-off discussed in this chapter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Option A"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Option B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Option C"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Option D"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>Refer to the chapter content</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " Which concept is most fundamental to the topic of Chapter 14"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Option A"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Option B"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Option C"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Option D"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>Review the core sections</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " How does this chapter's main concept apply to real-world systems?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) Option A"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) Option B"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) Option C"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) Option D"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>See the Real-World Systems section</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-consistent-hash-ring-count-min-sketch-hyperloglog",
                  children: "TypeScript: Consistent Hash Ring, Count-Min Sketch, HyperLogLog"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class ConsistentHashRing {\n  private ring = new Map<number, string>();\n  private sortedKeys: number[] = [];\n  private readonly virtualNodes = 150;\n\n  constructor(private nodes: string[] = []) { for (const n of nodes) this.addNode(n); }\n\n  private hash(key: string): number {\n    let h = 0;\n    for (let i = 0; i < key.length; i++) { h = (h << 5) - h + key.charCodeAt(i); h |= 0; }\n    return h >>> 0;\n  }\n\n  addNode(node: string): void {\n    for (let v = 0; v < this.virtualNodes; v++) {\n      this.ring.set(this.hash(`${node}:v${v}`), node);\n    }\n    this.sortedKeys = [...this.ring.keys()].sort((a, b) => a - b);\n  }\n\n  removeNode(node: string): void {\n    for (let v = 0; v < this.virtualNodes; v++) this.ring.delete(this.hash(`${node}:v${v}`));\n    this.sortedKeys = [...this.ring.keys()].sort((a, b) => a - b);\n  }\n\n  getNode(key: string): string {\n    if (this.sortedKeys.length === 0) throw new Error(\"No nodes\");\n    const h = this.hash(key);\n    let i = this.sortedKeys.findIndex(k => k >= h);\n    if (i === -1) i = 0;\n    return this.ring.get(this.sortedKeys[i])!;\n  }\n}\n\nclass CountMinSketch {\n  private table: number[][];\n  private readonly depth: number;\n  private readonly width: number;\n\n  constructor(epsilon: number, delta: number) {\n    this.width = Math.ceil(Math.E / epsilon);\n    this.depth = Math.ceil(Math.log(1 / delta));\n    this.table = Array.from({ length: this.depth }, () => new Array(this.width).fill(0));\n  }\n\n  private hash(item: string, seed: number): number {\n    let h = seed * 31;\n    for (let i = 0; i < item.length; i++) h = ((h << 5) - h + item.charCodeAt(i)) | 0;\n    return Math.abs(h) % this.width;\n  }\n\n  add(item: string, count = 1): void {\n    for (let d = 0; d < this.depth; d++) this.table[d][this.hash(item, d)] += count;\n  }\n\n  estimate(item: string): number {\n    let min = Infinity;\n    for (let d = 0; d < this.depth; d++) min = Math.min(min, this.table[d][this.hash(item, d)]);\n    return min;\n  }\n}\n\nclass HyperLogLog {\n  private registers: number[];\n  constructor(private b = 14) { this.registers = new Array(1 << b).fill(0); }\n\n  private hash(value: string): number {\n    let h = 0;\n    for (let i = 0; i < value.length; i++) { h = ((h << 5) - h + value.charCodeAt(i)) | 0; }\n    return h >>> 0;\n  }\n\n  add(value: string): void {\n    const h = this.hash(value);\n    const idx = h >>> (32 - this.b);\n    const w = h << this.b >>> this.b;\n    const leadingZeros = 1 + Math.clz32(w);\n    this.registers[idx] = Math.max(this.registers[idx], leadingZeros);\n  }\n\n  estimate(): number {\n    const m = this.registers.length;\n    const sum = this.registers.reduce((a, r) => a + 2 ** -r, 0);\n    const alpha = m === 16 ? 0.673 : m === 32 ? 0.697 : m === 64 ? 0.709 : 0.7213 / (1 + 1.079 / m);\n    let estimate = alpha * m * m / sum;\n    if (estimate <= 2.5 * m) {\n      let v = this.registers.filter(r => r === 0).length;\n      if (v > 0) estimate = m * Math.log(m / v);\n    }\n    return estimate;\n  }\n\n  merge(other: HyperLogLog): void {\n    for (let i = 0; i < this.registers.length; i++) this.registers[i] = Math.max(this.registers[i], other.registers[i]);\n  }\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-bloom-filter-with-optimal-k-and-fp-calculation",
                  children: "TypeScript: Bloom Filter with Optimal k and FP Calculation"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class BloomFilter {\n  private bits: boolean[];\n  private elements = 0;\n\n  constructor(private size: number, private hashCount: number) { this.bits = new Array(size).fill(false); }\n\n  static create(capacity: number, falsePositiveRate: number): BloomFilter {\n    const size = Math.ceil(-capacity * Math.log(falsePositiveRate) / (Math.LN2 * Math.LN2));\n    const hashCount = Math.ceil((size / capacity) * Math.LN2);\n    return new BloomFilter(size, hashCount);\n  }\n\n  add(item: string): void {\n    for (let i = 0; i < this.hashCount; i++) {\n      this.bits[this._hash(item, i) % this.size] = true;\n    }\n    this.elements++;\n  }\n\n  has(item: string): boolean {\n    for (let i = 0; i < this.hashCount; i++) {\n      if (!this.bits[this._hash(item, i) % this.size]) return false;\n    }\n    return true;\n  }\n\n  currentFpRate(): number {\n    const k = this.hashCount;\n    const m = this.size;\n    const n = this.elements;\n    return Math.pow(1 - Math.exp(-k * n / m), k);\n  }\n\n  private _hash(item: string, seed: number): number {\n    let h = seed * 31;\n    for (let i = 0; i < item.length; i++) h = (h << 5) - h + item.charCodeAt(i);\n    return h >>> 0;\n  }\n}\n\nconst bf = BloomFilter.create(1000, 0.01);\nbf.add(\"hello\"); bf.add(\"world\");\nconsole.log(bf.has(\"hello\"), bf.currentFpRate());\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-merkle-tree-for-anti-entropy",
                  children: "TypeScript: Merkle Tree for Anti-Entropy"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class MerkleNode {\n  hash: string;\n  constructor(public data: string | null, public left: MerkleNode | null, public right: MerkleNode | null) {\n    this.hash = data ? this.simpleHash(data) : this.combineHash(left, right);\n  }\n\n  private simpleHash(s: string): string {\n    let h = 0;\n    for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;\n    return (h >>> 0).toString(16);\n  }\n\n  private combineHash(l: MerkleNode | null, r: MerkleNode | null): string {\n    const lh = l?.hash ?? '';\n    const rh = r?.hash ?? '';\n    return this.simpleHash(lh + rh);\n  }\n\n  isLeaf(): boolean { return this.data !== null; }\n}\n\nclass MerkleTree {\n  root: MerkleNode;\n  leaves: MerkleNode[] = [];\n\n  constructor(private blocks: string[]) {\n    this.leaves = blocks.map(b => new MerkleNode(b, null, null));\n    this.root = this.build(this.leaves);\n  }\n\n  private build(nodes: MerkleNode[]): MerkleNode {\n    if (nodes.length === 1) return nodes[0];\n    const parents: MerkleNode[] = [];\n    for (let i = 0; i < nodes.length; i += 2) {\n      const left = nodes[i];\n      const right = i + 1 < nodes.length ? nodes[i + 1] : null;\n      parents.push(new MerkleNode(null, left, right));\n    }\n    return this.build(parents);\n  }\n\n  diff(other: MerkleTree, path: number[] = []): number[][] {\n    if (this.root.hash === other.root.hash) return [];\n    if (this.root.isLeaf()) return [path];\n    const mismatches: number[][] = [];\n    if (this.root.left && other.root.left) {\n      const leftTree = new MerkleTree([]);\n      leftTree.root = this.root.left;\n      const otherLeftTree = new MerkleTree([]);\n      otherLeftTree.root = other.root.left;\n      mismatches.push(...leftTree.diff(otherLeftTree, [...path, 0]));\n    }\n    if (this.root.right && other.root.right) {\n      const rightTree = new MerkleTree([]);\n      rightTree.root = this.root.right;\n      const otherRightTree = new MerkleTree([]);\n      otherRightTree.root = other.root.right;\n      mismatches.push(...rightTree.diff(otherRightTree, [...path, 1]));\n    }\n    return mismatches;\n  }\n\n  syncProtocol(other: MerkleTree): number[] {\n    const differentBlocks = this.diff(other);\n    return differentBlocks.map(p => {\n      let idx = 0;\n      for (const bit of p) idx = idx * 2 + bit;\n      return idx;\n    });\n  }\n\n  getBlock(index: number): string { return this.blocks[index]; }\n}\n\nconst treeA = new MerkleTree(['a', 'b', 'c', 'd']);\nconst treeB = new MerkleTree(['a', 'b', 'x', 'd']);\nconsole.log('Different blocks at indices:', treeA.syncProtocol(treeB));\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-hyperloglog-with-merge-and-bias-correction",
                  children: "TypeScript: HyperLogLog with Merge and Bias Correction"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class HyperLogLog {\n  private registers: number[];\n  private readonly m: number;\n  private readonly alpha: number;\n\n  constructor(private p: number = 12) {\n    this.m = 1 << p;\n    this.registers = new Array(this.m).fill(0);\n    this.alpha = this.m <= 16 ? 0.673 :\n                 this.m <= 32 ? 0.697 :\n                 this.m <= 64 ? 0.709 :\n                 0.7213 / (1 + 1.079 / this.m);\n  }\n\n  private hash(value: string): number {\n    let h = 0;\n    for (let i = 0; i < value.length; i++) h = ((h << 5) - h + value.charCodeAt(i)) | 0;\n    return h >>> 0;\n  }\n\n  private leadingZeros(x: number): number {\n    return x === 0 ? 32 : Math.clz32(x);\n  }\n\n  add(value: string): void {\n    const h = this.hash(value);\n    const idx = h >>> (32 - this.p);\n    const w = (h << this.p) >>> this.p;\n    const zeros = 1 + this.leadingZeros(w);\n    this.registers[idx] = Math.max(this.registers[idx], zeros);\n  }\n\n  estimate(): number {\n    const sum = this.registers.reduce((a, r) => a + Math.pow(2, -r), 0);\n    let est = this.alpha * this.m * this.m / sum;\n    if (est <= 2.5 * this.m) {\n      const v = this.registers.filter(r => r === 0).length;\n      if (v > 0) est = this.m * Math.log(this.m / v);\n    } else if (est > Math.pow(2, 32) / 30) {\n      est = -Math.pow(2, 32) * Math.log(1 - est / Math.pow(2, 32));\n    }\n    return Math.round(est);\n  }\n\n  merge(other: HyperLogLog): void {\n    if (this.m !== other.m) throw new Error('Register count mismatch');\n    for (let i = 0; i < this.m; i++) {\n      this.registers[i] = Math.max(this.registers[i], other.registers[i]);\n    }\n  }\n\n  mergeAll(others: HyperLogLog[]): void {\n    for (const o of others) this.merge(o);\n  }\n}\n\nconst hll1 = new HyperLogLog(12);\nconst hll2 = new HyperLogLog(12);\nfor (let i = 0; i < 50000; i++) hll1.add(`user-${i}`);\nfor (let i = 25000; i < 75000; i++) hll2.add(`user-${i}`);\nhll1.merge(hll2);\nconsole.log('Estimated distinct: ~75000, Got:', hll1.estimate());\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "distributed-data-structures-feature-comparison",
                  children: "Distributed Data Structures Feature Comparison"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-mermaid",
                    children: "flowchart TB\n    subgraph PROBABILISTIC[\"Probabilistic Data Structures\"]\n        BF[\"Bloom Filter<br/>Set Membership<br/>O(k) insert/lookup<br/>No deletion\"]\n        CMS[\"Count-Min Sketch<br/>Frequency Estimation<br/>O(d) update/query<br/>Over-estimates\"]\n        HLL[\"HyperLogLog<br/>Cardinality Estimation<br/>O(1) add/merge<br/>~2% error at 12KB\"]\n        CF[\"Cuckoo Filter<br/>Deletable Membership<br/>O(1) insert/lookup<br/>95% load factor\"]\n        BF -.->|member?| CMS\n        CMS -.->|count?| HLL\n    end\n\n    subgraph DETERMINISTIC[\"Deterministic Structures\"]\n        CH[\"Consistent Hashing<br/>Key ? Node Mapping<br/>O(log N) lookup<br/>Virtual nodes\"]\n        MT[\"Merkle Tree<br/>Anti-Entropy Diff<br/>O(log B) comparison<br/>Hash chain\"]\n        SL[\"Skip List<br/>Ordered Map<br/>O(log N) ops<br/>Probabilistic balance\"]\n    end\n\n    subgraph CRDT[\"Conflict-Free Replicated Data Types\"]\n        LWW[\"LWW-Register<br/>Last-Writer-Wins<br/>Timestamp merge\"]\n        PNC[\"PN-Counter<br/>Increment/Decrement<br/>Separate pos/neg\"]\n        GSET[\"G-Set / 2P-Set<br/>Add-only / Add-Remove<br/>Observed-Remove\"]\n    end\n\n    subgraph TRADE_OFFS[\"Selection Criteria\"]\n        MEM[\"Memory Budget<br/>bf: 9.6 bits/elem<br/>hll: 12KB fixed\"]\n        CONS[\"Consistency Needs<br/>Strong vs Eventual<br/>Merge semantics\"]\n        OPS[\"Operation Types<br/>insert/delete/query<br/>Range scans\"]\n    end\n\n    PROBABILISTIC & DETERMINISTIC & CRDT --> TRADE_OFFS\n\n    classDef prob fill:#E3F2FD,color:#1565C0\n    classDef det fill:#F3E5F5,color:#7B1FA2\n    classDef crdt fill:#E8F5E9,color:#2E7D32\n    classDef sel fill:#FFF3E0,color:#E65100\n    class BF,CMS,HLL,CF prob\n    class CH,MT,SL det\n    class LWW,PNC,GSET crdt\n    class MEM,CONS,OPS sel\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "implementation-distributed-data-structures",
                  children: "Implementation: Distributed Data Structures"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class BloomFilter { private bits: boolean[]; constructor(private size: number, private hashCount: number) { this.bits = new Array(size).fill(false); }\n  private hashes(item: string): number[] { const h: number[] = []; for (let i = 0; i < this.hashCount; i++) { let hash = 0; const data = `${item}:${i}`; for (let j = 0; j < data.length; j++) { hash = ((hash << 5) - hash) + data.charCodeAt(j); hash |= 0; } h.push(Math.abs(hash) % this.size); } return h; }\n  add(item: string): void { for (const h of this.hashes(item)) this.bits[h] = true; }\n  mightContain(item: string): boolean { return this.hashes(item).every(h => this.bits[h]); }\n  falsePositiveRate(): number { const k = this.hashCount; const m = this.size; const n = this.count(); return Math.pow(1 - Math.exp(-k * n / m), k); }\n  count(): number { return this.bits.filter(b => b).length; }\n}\nclass SkipList { private head: any = { key: -Infinity, forward: [] }; private level = 0; private maxLevel = 16;\n  private randomLevel(): number { let l = 0; while (Math.random() < 0.5 && l < this.maxLevel) l++; return l; }\n  insert(key: number, value: any): void { const update: any[] = new Array(this.maxLevel); let curr = this.head; for (let i = this.level; i >= 0; i--) { while (curr.forward[i] && curr.forward[i].key < key) curr = curr.forward[i]; update[i] = curr; } curr = curr.forward[0];\n    if (curr && curr.key === key) { curr.value = value; } else { const rl = this.randomLevel(); if (rl > this.level) { for (let i = this.level + 1; i <= rl; i++) update[i] = this.head; this.level = rl; } const newNode = { key, value, forward: new Array(rl + 1) }; for (let i = 0; i <= rl; i++) { newNode.forward[i] = update[i].forward[i]; update[i].forward[i] = newNode; } } }\n  search(key: number): any { let curr = this.head; for (let i = this.level; i >= 0; i--) { while (curr.forward[i] && curr.forward[i].key < key) curr = curr.forward[i]; } curr = curr.forward[0]; return curr && curr.key === key ? curr.value : undefined; }\n}\ninterface LWWRegister<T> { value: T; timestamp: number; }\nclass LWWReg<T> { private data: LWWRegister<T> = { value: null as any, timestamp: 0 };\n  set(value: T, ts: number = Date.now()): void { if (ts > this.data.timestamp) { this.data = { value, timestamp: ts }; } }\n  get(): T { return this.data.value; }\n  merge(other: LWWReg<T>): void { if (other.data.timestamp > this.data.timestamp) this.data = { ...other.data }; }\n}\nclass PNCounter { private pos = new Map<string, number>(); private neg = new Map<string, number>();\n  increment(node: string, amount = 1): void { this.pos.set(node, (this.pos.get(node) || 0) + amount); }\n  decrement(node: string, amount = 1): void { this.neg.set(node, (this.neg.get(node) || 0) + amount); }\n  value(): number { return [...this.pos.values()].reduce((s, v) => s + v, 0) - [...this.neg.values()].reduce((s, v) => s + v, 0); }\n  merge(other: PNCounter): void { for (const [k, v] of other.pos) this.pos.set(k, Math.max(this.pos.get(k) || 0, v)); for (const [k, v] of other.neg) this.neg.set(k, Math.max(this.neg.get(k) || 0, v)); }\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// distributed data structures\n// distributed-systems-scalability implementation"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'distributed data structures', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// distributed data structures - additional TS implementations"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'distributed data structures' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "summary",
                  children: "Summary"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Consistent hashing maps keys to nodes on a ring with O(log N) lookup; virtual nodes (R ˜ 150) smooth load imbalance to CV < 0.01"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Rendezvous hashing needs O(N) lookups but is metadata-free and inherently balanced"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Merkle trees enable log-time anti-entropy reconciliation in Dynamo/Cassandra by comparing block-level hash roots"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Bloom filters (m/n = 9.6 for 1% FP rate) trade accuracy for space; optimal hash count k = (m/n) * ln(2)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Counting Bloom adds 4-bit counters per slot for deletion support but uses 4× the space"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Count-Min Sketch estimates item frequency with ed-bounds in sublinear space"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "HyperLogLog estimates cardinality at ~2% error using 12 KB, with trivial merge for distributed counts"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Cuckoo filters support deletion and beat Bloom on lookup speed for FP rates below 3%"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "XOR filters are smaller than Bloom but require static datasets"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Time-series structures (segment tree, RRD, TSM) optimize for range scans and temporal aggregation"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "exercises",
                  children: "Exercises"
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "review-questions",
                  children: "Review Questions"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Solution"
                  }), "1. Each physical node has 100 virtual tokens out of 50×100 = 5000 total tokens. When one node fails, its 100 tokens redistribute. Expected keys per token: 10M / 5000 = 2000. Keys redistributed: 100 × 2000 = 200,000 keys (2% of total).\n2. Minimize p = (1 - e^(-kn/m))^k. Take log: ln(p) = k·ln(1 - e^(-kn/m)). Set d(ln(p))/dk = 0, solve: k = (m/n)·ln(2) ≈ 0.693·(m/n).\n3. Element-wise max preserves the longest run of leading zeros observed. Sum or average would overestimate (since multiple elements can map to the same register and sum would count them multiple times). Max correctly captures the register's extremal observation.\n4. Counting Bloom: 4-bit counters × m bits ≈ 4m bits. Cuckoo: (log2(1/p) + 3) / load_factor bits per item. For m/n ≈ 9.6 (1% FP), Counting Bloom ≈ 38.4 bits/item. Cuckoo at f = log2(100) + 3 ≈ 9.6 bits, with 95% load ≈ 10.1 bits/item. Cuckoo is ~4× more memory-efficient.\n5. (1) Exchange root hashes. (2) If roots match, ranges are identical. (3) If mismatch, walk down the tree: compare children recursively. (4) At leaf level, identify individual key-value pairs that differ. (5) Request missing/repaired entries from the peer. O(log B) messages for B blocks."]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "application-problems",
                  children: "Application Problems"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Solution"
                  }), "1. m = -500M·ln(0.001) / (ln2)^2 = 500M × 6.907 / 0.48 ≈ 7.19B bits ≈ 856 MB. k = (7.19B / 500M)·ln2 ≈ 9.96 → 10. Actual FP: (1 - e^(-10·500M/7.19B))^10 ≈ 0.0009. With 4-bit counters: 856 MB × 4 = 3.42 GB.\n2. Worst-case overestimate: each row has expected collision count = total/w = 1M/10000 = 100. With d=4, P(error > e·total) ≤ e^(-d). Estimate = min([512, 487, 503, 498]) = 487. Min is used because collisions can only inflate the count, not deflate it — the minimum gives the closest to the true value.\n3. Gini coefficient with R=1 is typically 0.15-0.30 (significant imbalance). With R=150, Gini drops to 0.003-0.008 (nearly perfect balance). The law of large numbers: each physical node's expected load variance is 1/√R of the total.\n4. a_m for m=1024: 0.7213 / (1 + 1.079/1024) ≈ 0.7205. 512 registers at 0, 256 at 1, 256 at 2. Sum = 512·1 + 256·0.5 + 256·0.25 = 512 + 128 + 64 = 704. Estimate = 0.7205 × 1024² / 704 ≈ 1073. Linear counting for small ranges: zero count = 512, estimate = 1024·ln(1024/512) ≈ 710. Final = 710 (linear counting dominates for small cardinalities)."]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "challenge-problem",
                  children: "Challenge Problem"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Solution"
                  }), "Design a multi-layer membership test service:\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Memory per node"
                    }), ": 1B keys / 200 nodes = 5M keys/node. Bloom filter: m = -5M·ln(0.01)/(ln2)^2 ≈ 48M bits = 6 MB. Cuckoo filter: at 0.1% FP, f = log2(1000) + 3 ≈ 13 bits, with 95% load ≈ 13.7 bits/item × 500K hot items ≈ 0.86 MB. CMS: d=4, w=2/eps (eps=0.01) = 200, 4×200 = 800 counters × 4 bytes = 3.2 KB. HLL: p=12, 4096 registers × 6 bits ≈ 3 KB. Total per node: ~7 MB. Cluster total: 200 × 7 MB = 1.4 GB."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Query path"
                    }), ": (1) Client sends key read request. (2) Node Bloom filter check: if negative, return immediately (key guaranteed absent). (3) If Bloom positive, check Cuckoo filter for hot key range. (4) Update CMS frequency counter (async). (5) Perform actual key lookup. (6) If key not found (Bloom false positive), increment CMS false-positive counter (triggers filter rebuild at threshold). P99 latency: 0.5ms (Bloom-only miss) to 8ms (Bloom hit + Cuckoo hit + key lookup)."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Rebuild strategy"
                    }), ": Rebuild Bloom filter after each compaction (batch rebuild from current key set, 1 second). Cuckoo filter rebuilt when FP rate tracking exceeds 0.2%. CMS reset weekly. HLL continuous via periodic merge."]
                  })]
                }), (0,jsx_runtime.jsx)(_components.p, {}), "\n"]
              })
            })]
          })
        })]
      })
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