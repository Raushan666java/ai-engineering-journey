"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[25672],{

/***/ 18383
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_blockchain_10_security_scalability_md_84b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-blockchain-10-security-scalability-md-84b.json
const site_docs_courses_blockchain_10_security_scalability_md_84b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/blockchain/10-security-scalability","title":"Chapter 10: Security and Scalability","description":"Previous Enterprise Blockchain | Next Introduction to Blockchain","source":"@site/docs/courses/blockchain/10-security-scalability.md","sourceDirName":"courses/blockchain","slug":"/blockchain/10-security-scalability","permalink":"/ai-engineering-journey/blockchain/10-security-scalability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-security-scalability","slug":"/blockchain/10-security-scalability","title":"Chapter 10: Security and Scalability","sidebar_label":"Chapter 10: Security and Scalability","sidebar_position":10},"sidebar":"coursesSidebar","previous":{"title":"Chapter 9: Enterprise Blockchain","permalink":"/ai-engineering-journey/blockchain/09-enterprise"},"next":{"title":"Cloud Computing — Comprehensive Course Textbook","permalink":"/ai-engineering-journey/cloud-computing/index"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/blockchain/10-security-scalability.md


const frontMatter = {
	id: '10-security-scalability',
	slug: '/blockchain/10-security-scalability',
	title: 'Chapter 10: Security and Scalability',
	sidebar_label: 'Chapter 10: Security and Scalability',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Security and Scalability';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "The Scalability Bottleneck",
  "id": "the-scalability-bottleneck",
  "level": 3
}, {
  "value": "Layer 1 Scaling: Sharding",
  "id": "layer-1-scaling-sharding",
  "level": 3
}, {
  "value": "Layer 2: State Channels (Lightning Network)",
  "id": "layer-2-state-channels-lightning-network",
  "level": 3
}, {
  "value": "Layer 2: Sidechains",
  "id": "layer-2-sidechains",
  "level": 3
}, {
  "value": "Layer 2: Rollups",
  "id": "layer-2-rollups",
  "level": 3
}, {
  "value": "Optimistic Rollups vs ZK-Rollups",
  "id": "optimistic-rollups-vs-zk-rollups",
  "level": 3
}, {
  "value": "ZK-SNARKs vs ZK-STARKs",
  "id": "zk-snarks-vs-zk-starks",
  "level": 3
}, {
  "value": "The Data Availability Problem",
  "id": "the-data-availability-problem",
  "level": 3
}, {
  "value": "Plasma Architecture",
  "id": "plasma-architecture",
  "level": 3
}, {
  "value": "Validium",
  "id": "validium",
  "level": 3
}, {
  "value": "Blockchain Security Threats",
  "id": "blockchain-security-threats",
  "level": 3
}, {
  "value": "MEV (Maximal Extractable Value)",
  "id": "mev-maximal-extractable-value",
  "level": 3
}, {
  "value": "Quantum Computing Threat",
  "id": "quantum-computing-threat",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Lightning Network Payment",
  "id": "example-1-lightning-network-payment",
  "level": 3
}, {
  "value": "Example 2: ZK-Rollup Proof",
  "id": "example-2-zk-rollup-proof",
  "level": 3
}, {
  "value": "Example 3: Comparing Settlement Mechanisms",
  "id": "example-3-comparing-settlement-mechanisms",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
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
  "value": "TypeScript: Reentrancy Detector",
  "id": "typescript-reentrancy-detector",
  "level": 3
}, {
  "value": "TypeScript: Integer Overflow Checker",
  "id": "typescript-integer-overflow-checker",
  "level": 3
}, {
  "value": "TypeScript: Access Control Analyzer",
  "id": "typescript-access-control-analyzer",
  "level": 3
}, {
  "value": "TypeScript: Front-Running Simulator",
  "id": "typescript-front-running-simulator",
  "level": 3
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
        id: "chapter-10-security-and-scalability",
        children: "Chapter 10: Security and Scalability"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/09-enterprise",
          children: "Chapter 9: Enterprise Blockchain"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/01-introduction",
          children: "Chapter 1: Introduction to Blockchain"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify common blockchain vulnerabilities (51% Attack, Sybil Attack, Long Range Attack)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze Layer 2 scaling solutions (State Channels, Sidechains, Rollups)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand sharding and data availability in Ethereum's scaling roadmap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Optimistic Rollups vs ZK-Rollups with detailed trade-off analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe Plasma architecture and its limitations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand zk-SNARKs vs zk-STARKs differences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the data availability problem and its solutions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the impact of quantum computing on current cryptographic standards"
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
        href: "../../assets/images/lessons/blockchain/10-security-scalability/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/10-security-scalability/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/blockchain/10-security-scalability/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/10-security-scalability/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/blockchain/10-security-scalability/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/10-security-scalability/visual-explanation.png",
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
            children: "Scalability Bottleneck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every node processes every transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trilemma: pick two of Security, Scalability, Decentralization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layer 1 Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding splits the blockchain into parallel segments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each shard is its own mini-blockchain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layer 2 Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State Channels, Sidechains, Rollups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computation moves off-chain, security remains on L1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic (fraud proofs) vs ZK (validity proofs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZK-Rollups provide instant finality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L2 must publish data so anyone can reconstruct state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key bottleneck for scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lightning Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin payment channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant, low-fee micro-transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum Threat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shor's algorithm breaks ECDSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-quantum cryptography needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Trilemma] --> B[Layer 1: Sharding]\n    A --> C[Layer 2: Rollups]\n    A --> D[Layer 2: Channels]\n    A --> E[Layer 2: Sidechains]\n    B --> F[Data Availability]\n    C --> F\n    C --> G[ZK vs Optimistic]\n    G --> H[Security Threats]\n    H --> I[Quantum Future]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-scalability-bottleneck",
      children: "The Scalability Bottleneck"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Public blockchains face the \"Trilemma\": they can only optimize two out of three: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decentralization, Security, Scalability"
      }), ". Most chains struggle with throughput because every node must process every transaction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Trilemma2[\"Blockchain Trilemma\"]\n        S1[\"SECURITY<br/>51% resistance<br/>Immutability\"]\n        S2[\"SCALABILITY<br/>High TPS<br/>Low latency\"]\n        D1[\"DECENTRALIZATION<br/>Many nodes<br/>Permissionless\"]\n    end\n    \n    S1 --- S2\n    S1 --- D1\n    S2 --- D1\n    \n    subgraph Examples[\"Examples\"]\n        B[\"Bitcoin/Tor: Security + Decentralization<br/>(~7 TPS)\"]\n        S[\"Solana/BSC: Security + Scalability<br/>(~4000+ TPS, fewer validators)\"]\n        M[\"Monoxide: Scalability + Decentralization<br/>(weaker finality)\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current throughput comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Blockchain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TPS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Block Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Finality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~60 min (6 blocks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most secure, slowest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum L1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15 min (64 blocks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-Merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Solana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~12 sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher hardware requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polygon PoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7000+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sidechain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum (L2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40000+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic rollup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zkSync (L2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10000+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZK-rollup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lightning Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1M+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment channels"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layer-1-scaling-sharding",
      children: "Layer 1 Scaling: Sharding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding"
      }), " splits the blockchain database into multiple segments (shards) so nodes only process a subset of transactions. Ethereum's Danksharding is the most advanced sharding design."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Sharding[\"Sharded Blockchain\"]\n        Beacon[\"Beacon Chain<br/>(Coordination)\"]\n        \n        subgraph Shards[\"Shards\"]\n            Shard1[\"Shard 1<br/>Validator Set A\"]\n            Shard2[\"Shard 2<br/>Validator Set B\"]\n            Shard3[\"Shard 3<br/>Validator Set C\"]\n            ShardN[\"Shard N<br/>Validator Set D\"]\n        end\n        \n        Beacon --> Shard1\n        Beacon --> Shard2\n        Beacon --> Shard3\n        Beacon --> ShardN\n        \n        Shard1 -->|\"Cross-shard communication\"| Beacon\n        Shard2 -->|\"Via beacon chain\"| Beacon\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethereum Danksharding:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EIP-4844 (Proto-Danksharding):"
        }), " Already live (Dencun, March 2024). Introduces blob transactions for L2 data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full Danksharding:"
        }), " Future upgrade. Full validator set randomly sampled to attest to shard blobs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Availability Sampling (DAS):"
        }), " Light nodes can verify data availability without downloading everything."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key metric:"
        }), " Blob count per block (currently 3-6, planned to scale to 64+)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layer-2-state-channels-lightning-network",
      children: "Layer 2: State Channels (Lightning Network)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "State channels allow participants to transact off-chain while only settling the final state on-chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Alice as Alice\n    participant Bob as Bob\n    participant Chain as Bitcoin Blockchain\n    \n    Alice->>Chain: 1. Open channel (multisig tx)\n    Note over Chain: Channel funded: 2 BTC (1 each)\n    \n    Alice->>Bob: 2. Payment: Alice?Bob 0.01 BTC\n    Bob->>Alice: 3. Payment: Bob?Alice 0.02 BTC\n    Alice->>Bob: 4. Payment: Alice?Bob 0.005 BTC\n    Note over Alice,Bob: Thousands of transactions off-chain\n    \n    Bob->>Chain: 5. Close channel (final balance)\n    Note over Chain: Alice: 0.985 BTC, Bob: 1.015 BTC\n    Note over Chain: Only 2 on-chain transactions!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations of state channels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Liquidity lock:"
        }), " Funds must be locked in the channel."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Routing:"
        }), " Finding a path through the network (Lightning routing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Liveness:"
        }), " Both parties must be online to challenge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limited complexity:"
        }), " Only payments, not arbitrary smart contracts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layer-2-sidechains",
      children: "Layer 2: Sidechains"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sidechains are independent blockchains with their own consensus, connected to the main chain via a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bridge"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph MainChain[\"Main Chain (Ethereum)\"]\n        Bridge1[\"Bridge Contract\"]\n    end\n    \n    subgraph Sidechain[\"Sidechain (Polygon PoS)\"]\n        Bridge2[\"Bridge Contract\"]\n        S1[\"Block 1\"]\n        S2[\"Block 2\"]\n        S3[\"Block 3\"]\n    end\n    \n    User[\"User\"] -->|\"Lock 100 ETH<br/>in bridge\"| Bridge1\n    Bridge1 -->|\"Mint 100 ETH<br/>on sidechain\"| Bridge2\n    Bridge2 --> S1\n    S1 --> S2\n    S2 --> S3\n    S3 -->|\"Burn 100 ETH<br/>on sidechain\"| Bridge2\n    Bridge2 -->|\"Unlock 100 ETH<br/>on main chain\"| Bridge1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sidechain risks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Independent security:"
        }), " If the sidechain's validators collude, funds can be stolen."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bridge vulnerability:"
        }), " Bridges are the most hacked DeFi component (>$1.5B lost)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No L1 inheritance:"
        }), " Sidechain security is independent of the main chain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layer-2-rollups",
      children: "Layer 2: Rollups"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rollups batch hundreds of transactions into a single submission to L1. This is currently the most promising scaling solution."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph L1[\"Layer 1 (Ethereum)\"]\n        L1State[\"Ethereum State\"]\n        RollupContract[\"Rollup Contract\"]\n    end\n    \n    subgraph L2[\"Layer 2 (Rollup)\"]\n        Sequencer[\"Sequencer<br/>Batches transactions\"]\n        L2State[\"L2 State\"]\n        Batch[\"Batch + Proof<br/>? L1 contract\"]\n    end\n    \n    User -->|\"Deposit\"| RollupContract\n    User -->|\"Transactions\"| Sequencer\n    Sequencer --> L2State\n    Sequencer --> Batch\n    Batch --> RollupContract\n    RollupContract --> L1State\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimistic-rollups-vs-zk-rollups",
      children: "Optimistic Rollups vs ZK-Rollups"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimistic Rollup"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ZK-Rollup"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assume valid, challenge later"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prove validity immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraud proof (requires challenge)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validity proof (zk-SNARK/STARK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~7 day withdrawal delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant (minutes on L1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Computation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheap (no proofs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive (proof generation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Economic (bonded challengers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptographic (ZK proofs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EVM Compatibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (Arbitrum, Optimism)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (zkSync, Scroll improving)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Capital Efficiency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (long withdrawal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (fast exit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Posted to L1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full tx data (calldata/blobs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (state diff + proof)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum, Optimism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zkSync Era, StarkNet, Scroll"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zk-snarks-vs-zk-starks",
      children: "ZK-SNARKs vs ZK-STARKs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "zk-SNARK"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "zk-STARK"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-Knowledge Succinct Non-Interactive Argument of Knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-Knowledge Scalable Transparent ARgument of Knowledge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trusted Setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required (toxic waste risk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not required (transparent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proof Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100-200 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100-200 KB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (constant time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (logarithmic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prover Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum Resistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (vulnerable to Shor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zcash, zkSync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarkNet, dYdX"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-data-availability-problem",
      children: "The Data Availability Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key bottleneck for rollups is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data availability"
      }), " — ensuring that L2 transaction data is available for anyone to reconstruct the L2 state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph DAProblem[\"Data Availability Problem\"]\n        Scenario[\"If the sequencer withholds<br/>transaction data:\"]\n        Users[\"Users cannot prove<br/>their balance\"]\n        Challenge[\"Fraud proof impossible<br/>(no data to challenge)\"]\n        Censorship[\"Sequencer can censor<br/>with no consequence\"]\n    end\n    \n    Scenario --> Users\n    Scenario --> Challenge\n    Scenario --> Censorship\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calldata (pre-Dencun):"
        }), " Publish all tx data to L1 (expensive)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blobs (EIP-4844):"
        }), " Temporary data (pruned after ~18 days), much cheaper than calldata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Availability Committee (DAC):"
        }), " Trusted committee attests to data availability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Availability Sampling (DAS):"
        }), " Light nodes randomly sample data chunks to verify availability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "plasma-architecture",
      children: "Plasma Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plasma was an early L2 design that has been superseded by rollups:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph L1Plasma[\"Layer 1\"]\n        RootChain[\"Root Chain Contract\"]\n    end\n    \n    subgraph ChildChain[\"Plasma Child Chain\"]\n        Operator[\"Operator<br/>Submits Merkle roots\"]\n        Blocks[\"Block 1 | Block 2 | ...\"]\n    end\n    \n    RootChain -->|\"Periodic Merkle root<br/>submissions\"| Blocks\n    User -->|\"Deposit\"| RootChain\n    User -->|\"Exit with Merkle proof<br/>(challenge period)\"| RootChain\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plasma limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mass exit problem:"
        }), " If the operator is malicious, everyone must exit simultaneously."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limited computation:"
        }), " Only simple transfers, not arbitrary smart contracts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exit games:"
        }), " Complex challenge-response periods."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validium",
      children: "Validium"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validium is like a ZK-Rollup but data is stored off-chain (not on L1):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ZK-Rollup"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Validium"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data on L1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (off-chain)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L1 security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAC or operator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Withdrawal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trustless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trusted exit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blockchain-security-threats",
      children: "Blockchain Security Threats"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. 51% Attack"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An entity gains majority control of consensus and can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double-spend transactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Censor transactions (exclude them from blocks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reorganize the chain to reverse transactions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost to attack:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bitcoin PoW: ~$1.3B/hour (hardware + electricity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ethereum PoS: ~$32B (staked ETH required, subject to slashing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small chains: Much cheaper (why smaller chains are attacked more)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Sybil Attack"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An attacker creates many pseudonymous identities to gain disproportionate network influence."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PoW defense:"
        }), " Each identity requires computational work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PoS defense:"
        }), " Each identity requires staked capital."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PBFT defense:"
        }), " Known identities (not vulnerable)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Long Range Attack (PoS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An attacker creates a fork from a point far in the past, builds a longer chain, and tries to replace the canonical chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Defenses:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Checkpoints:"
        }), " Nodes periodically save the state and refuse to reorganize beyond checkpoints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weak Subjectivity:"
        }), " New nodes trust a recent checkpoint from a trusted source."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slashing:"
        }), " Validators who sign conflicting blocks are slashed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Smart Contract Attacks"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Losses (Est.)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reentrancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External call re-enters contract before state update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The DAO: $60M"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flash Loan Attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unc collateralized loan manipulates prices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1B+ total"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oracle Manipulation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker manipulates off-chain data feed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cream: $130M"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Front-Running"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker inserts tx ahead of victim's"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1B+ in MEV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Governance Attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious proposal passes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beanstalk: $182M"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bridge Hack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerability in cross-chain bridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ronin: $625M, Wormhole: $326M"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mev-maximal-extractable-value",
      children: "MEV (Maximal Extractable Value)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MEV is profit extracted by reordering, including, or excluding transactions within a block:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Sandwich attack example\nasync function sandwichAttack(\n    victimTx: Transaction,\n    dexContract: ethers.Contract\n): Promise<void> {\n    // 1. Front-run: Buy token before victim\n    const buyTx = await dexContract.swapExactETHForTokens(\n        minAmount,\n        [WETH, TOKEN],\n        attackerAddress,\n        { gasPrice: victimTx.gasPrice + 1n, value: ethers.parseEther(\"10\") }\n    );\n    \n    // 2. Victim's transaction executes (price goes up)\n    \n    // 3. Back-run: Sell token after victim\n    const sellTx = await dexContract.swapExactTokensForETH(\n        tokenBalance,\n        minEth,\n        [TOKEN, WETH],\n        attackerAddress,\n        { gasPrice: victimTx.gasPrice - 1n }\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MEV solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flashbots:"
        }), " Private mempool for transaction bundles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MEV-Boost:"
        }), " PBS (Proposer-Builder Separation) in Ethereum."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CowSwap:"
        }), " Batch auctions and intent-based trading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quantum-computing-threat",
      children: "Quantum Computing Threat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Threats to current cryptography:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shor's Algorithm:"
        }), " Can factor large numbers and compute discrete logs in polynomial time.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Breaks RSA (not used in crypto) and ECDSA (used everywhere!)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Grover's Algorithm:"
        }), " Square-root speedup for search (reduces SHA-256 from 256-bit to 128-bit security)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph QuantumThreat[\"Quantum Computing Impact on Blockchain\"]\n        ECDSA[\"ECDSA (secp256k1)<br/>Bitcoin/Ethereum keys<br/>Shor ? Broken completely\"]\n        SHA256[\"SHA-256<br/>Mining/Bitcoin hashing<br/>Grover ? 128-bit effective<br/>(still safe)\"]\n        RSA[\"RSA<br/>Not used in crypto<br/>Shor ? Broken\"]\n    end\n    \n    subgraph Timeline[\"Timeline Estimates\"]\n        T1[\"Today: No Q-Day risk<br/>(~1000 logical qubits)\"]\n        T2[\"5-10 years: Possible<br/>(~10K logical qubits)\"]\n        T3[\"15-20 years: Probable<br/>(1M+ logical qubits)\"]\n    end\n    \n    ECDSA -->|\"Needs PQC now\"| Timeline\n    SHA256 -->|\"Double hash (SHA256d)<br/>still safe for now\"| Timeline\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Quantum Cryptography candidates for blockchain:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lamport Signatures:"
        }), " Hash-based signatures (large, but quantum-safe)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "STARKs:"
        }), " Already quantum-resistant (used in StarkNet)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lattice-based:"
        }), " CRYSTALS-Dilithium (selected by NIST)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code-based:"
        }), " Classic McEliece (large public keys)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What needs to change:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Address derivation:"
        }), " Replace ECDSA with quantum-safe signature schemes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consensus:"
        }), " PoW with SHA-256 still partially safe (Grover is quadratic speedup, not exponential)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timeline:"
        }), " Many experts predict Q-Day (quantum break of ECDSA) in 15-20 years."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-lightning-network-payment",
      children: "Example 1: Lightning Network Payment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alice and Bob open a channel with 0.1 BTC each."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice sends Bob 0.01 BTC. (Balance: A: 0.09, B: 0.11)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bob sends Alice 0.02 BTC. (Balance: A: 0.11, B: 0.09)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They close the channel."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Only ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one"
      }), " transaction is recorded on the main Bitcoin blockchain, but thousands of micro-payments could have happened off-chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LightningChannel {\n    aliceBalance: number;  // satoshis\n    bobBalance: number;\n    commitmentNumber: number;\n    aliceSignature?: string;\n    bobSignature?: string;\n}\n\nfunction updateChannel(\n    channel: LightningChannel,\n    fromAlice: boolean,\n    amountSatoshis: number\n): LightningChannel {\n    const updated = { ...channel, commitmentNumber: channel.commitmentNumber + 1 };\n    \n    if (fromAlice) {\n        updated.aliceBalance -= amountSatoshis;\n        updated.bobBalance += amountSatoshis;\n    } else {\n        updated.aliceBalance += amountSatoshis;\n        updated.bobBalance -= amountSatoshis;\n    }\n    \n    return updated;  // New commitment transaction\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-zk-rollup-proof",
      children: "Example 2: ZK-Rollup Proof"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A sequencer collects 1,000 transactions. Instead of sending all 1,000 to Ethereum, it generates a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validity Proof"
      }), " (SNARK/STARK). Ethereum only verifies the proof, which is much cheaper and faster than verifying 1,000 individual signatures."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RollupBatch {\n    batchNumber: number;\n    transactions: L2Transaction[];\n    stateRoot: string;     // L2 state after batch\n    previousStateRoot: string;\n    // For optimistic rollups:\n    fraudProof?: FraudProof;\n    // For ZK rollups:\n    validityProof?: string;  // zk-SNARK/STARK proof bytes\n    // Data (blob or calldata):\n    compressedData: string;  // Compressed transaction data\n}\n\n// Gas comparison: 1000 transfers\nconst l1GasPerTx = 21000;         // L1 base transfer\nconst l1BatchCost = 21000;        // L1 rollup contract call\nconst l1CalldataCost = 16 * 100;  // 16 gas per byte, 100 bytes per tx (compressed)\nconst l2RollupGas = l1BatchCost + 1000 * l1CalldataCost;\nconst l1IndividualGas = 1000 * l1GasPerTx;\nconsole.log(`L1 gas: ${l1IndividualGas}`);  // 21,000,000\nconsole.log(`Rollup gas: ${l2RollupGas}`);  // 2,621,000\nconsole.log(`Savings: ${(1 - l2RollupGas / l1IndividualGas) * 100}%`);  // ~87.5%\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-comparing-settlement-mechanisms",
      children: "Example 3: Comparing Settlement Mechanisms"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ScalingSolution {\n    name: string;\n    security: string;\n    finalityTime: string;\n    tps: number;\n    onChainData: string;\n    trustAssumption: string;\n}\n\nconst solutions: ScalingSolution[] = [\n    {\n        name: \"Optimistic Rollup\",\n        security: \"L1 (fraud proof)\",\n        finalityTime: \"~7 days\",\n        tps: 40000,\n        onChainData: \"Full tx data (blobs)\",\n        trustAssumption: \"At least 1 honest challenger\",\n    },\n    {\n        name: \"ZK-Rollup\",\n        security: \"L1 (validity proof)\",\n        finalityTime: \"~10 minutes\",\n        tps: 10000,\n        onChainData: \"Minimal (proof + state diff)\",\n        trustAssumption: \"ZK proof system is sound\",\n    },\n    {\n        name: \"State Channel\",\n        security: \"L1 (final settlement)\",\n        finalityTime: \"Instant\",\n        tps: \"1M+\",\n        onChainData: \"Only open/close\",\n        trustAssumption: \"Counterparties are online\",\n    },\n    {\n        name: \"Sidechain\",\n        security: \"Independent consensus\",\n        finalityTime: \"Seconds\",\n        tps: 7000,\n        onChainData: \"Only bridge txs\",\n        trustAssumption: \"Sidechain validators are honest\",\n    },\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Every scaling solution involves a trade-off — Rollups inherit L1 security but add latency, sidechains have their own security models, and sharding increases complexity while maintaining full security."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For most applications, ZK-Rollups are the preferred scaling path: they offer instant finality, lower fees than Optimistic Rollups (no 7-day withdrawal delay), and strong privacy guarantees."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " A 51% attack on a shard requires only 51% of that shard's hash power, not the whole network — sharding introduces cross-shard communication complexity and reduces the cost of attacking a single shard."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split blockchain into parallel segments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L1 scaling, complex cross-shard communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Danksharding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off-chain private payment channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant finality, requires liquidity lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightning Network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Rollup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assume valid, challenge with fraud proof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-day withdrawal delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum, Optimism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZK-Rollup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validity proof via SNARK/STARK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant finality, computationally intensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zkSync, StarkNet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sidechain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate chain with own consensus model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent security, bridge risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polygon (PoS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plasma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child chains submit Merkle roots to L1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited computation, exit game complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early Ethereum scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Off-chain data, on-chain proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-cheap, trusted data committee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable X"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concepts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "L1 Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding, Block size, DAG-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes base layer protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "L2 Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollups, Channels, Sidechains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer on top of L1 for throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "51% Attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Majority hash/stake control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double-spend, reorg, censorship"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reentrancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External call re-enters contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update state before external calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ZK Proofs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zk-SNARK (trusted setup), zk-STARK (transparent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STARKs need no trusted setup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MEV"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction ordering profit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flashbots, MEV-Boost, PBS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure L2 data is available for verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blobs, DAS, DAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PQC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-Quantum Cryptography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lamport, Dilithium, STARKs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DeFi"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Smart Contracts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enterprise Blockchain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZK-Rollups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalable DEX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gas-efficient contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZK proof optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic Rollups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-fee trading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise rollups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraud proof game theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-shard DeFi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared state complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not enterprise-relevant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data availability sampling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lightning Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin micro-payments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise payments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZK Proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy DEX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zk-rollup settlement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private enterprise data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-quantum ZK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEV Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sandwich protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fair ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit transparency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PBS research"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Future-proof assets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-quantum signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-term data security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PQC standardization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the main disadvantage of Optimistic Rollups compared to ZK-Rollups?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They support fewer transactions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) They require a 7-day challenge window for withdrawals"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) They are less decentralized"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) They cannot process smart contracts"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) They require a 7-day challenge window for withdrawals.** Optimistic Rollups assume transactions are valid unless challenged. This challenge period means users must wait ~7 days to withdraw funds to L1. ZK-Rollups have no such delay because validity proofs are verified immediately.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does sharding reduce the cost of a 51% attack compared to a non-sharded blockchain?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Shards are more secure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) An attacker only needs to compromise one shard, not the entire network"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Sharding uses PoS which is more attack-resistant"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Shards don't have monetary value"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) An attacker only needs to compromise one shard, not the entire network.** Each shard has its own validator set and block production. Acquiring 51% of a single shard's stake or hash power is cheaper than acquiring 51% of the whole network.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What distinguishes a ZK-STARK from a ZK-SNARK?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) STARKs are smaller"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) STARKs require no trusted setup ceremony"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) STARKs are faster to verify"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) STARKs work on mobile devices"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) STARKs require no trusted setup ceremony.** SNARKs require an initial trusted setup — if the setup's toxic waste is leaked, false proofs can be generated. STARKs use only publicly verifiable randomness, making them fully transparent and quantum-resistant.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the \"data availability problem\" in rollups?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) There's not enough data to process transactions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The rollup operator might withhold transaction data, preventing users from proving their balance or generating fraud proofs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Data on L1 is too expensive to store"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Rollups can't process enough transactions"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) The rollup operator might withhold transaction data, preventing users from proving their balance or generating fraud proofs.** Without transaction data on L1, users cannot reconstruct the L2 state to challenge invalid state transitions. Blobs (EIP-4844) and data availability sampling solve this.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does the Lightning Network achieve instant finality for Bitcoin payments?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) By using a faster blockchain"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) By opening a multisig channel and updating balance commitments off-chain"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) By reducing security requirements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) By mining blocks faster"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) By opening a multisig channel and updating balance commitments off-chain.** The Lightning Network creates 2-of-2 multisig payment channels where balance updates are signed off-chain but only the final balance is settled on-chain. This allows instant, low-fee micro-transactions without waiting for block confirmations.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-reentrancy-detector",
      children: "TypeScript: Reentrancy Detector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createHash } from \"node:crypto\";\n\nconst sha256 = (d: string): string => createHash(\"sha256\").update(d).digest(\"hex\");\n\ninterface SSAInstruction {\n  op: string; args: string[]; result?: string;\n}\n\nclass ReentrancyDetector {\n  static detect(bytecode: string[]): { risk: boolean; pattern: string } {\n    const stateWrites: number[] = [];\n    const externalCalls: number[] = [];\n    for (let i = 0; i < bytecode.length; i++) {\n      if (bytecode[i] === \"SSTORE\") stateWrites.push(i);\n      if (bytecode[i] === \"CALL\" || bytecode[i] === \"DELEGATECALL\") externalCalls.push(i);\n    }\n    for (const callIdx of externalCalls) {\n      const subsequentWrites = stateWrites.filter(idx => idx > callIdx);\n      if (subsequentWrites.length > 0) {\n        return { risk: true, pattern: `External call at instruction ${callIdx} before state write at ${subsequentWrites[0]}` };\n      }\n    }\n    return { risk: false, pattern: \"Check-Effects-Interactions pattern followed\" };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-integer-overflow-checker",
      children: "TypeScript: Integer Overflow Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class OverflowChecker {\n  static checkAddition(a: bigint, b: bigint): { safe: boolean; result?: bigint; error?: string } {\n    const result = a + b;\n    if (result < a || result < b) return { safe: false, error: \"Addition overflow\" };\n    return { safe: true, result };\n  }\n\n  static checkSubtraction(a: bigint, b: bigint): { safe: boolean; result?: bigint; error?: string } {\n    if (b > a) return { safe: false, error: \"Subtraction underflow\" };\n    return { safe: true, result: a - b };\n  }\n\n  static checkMultiplication(a: bigint, b: bigint): { safe: boolean; result?: bigint; error?: string } {\n    if (a === BigInt(0) || b === BigInt(0)) return { safe: true, result: BigInt(0) };\n    const result = a * b;\n    if (result / a !== b) return { safe: false, error: \"Multiplication overflow\" };\n    return { safe: true, result };\n  }\n\n  static analyzeExpression(op: string, a: bigint, b: bigint): { safe: boolean; error?: string } {\n    switch (op) {\n      case \"+\": return this.checkAddition(a, b);\n      case \"-\": return this.checkSubtraction(a, b);\n      case \"*\": return this.checkMultiplication(a, b);\n      default: return { safe: true };\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-access-control-analyzer",
      children: "TypeScript: Access Control Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface AccessControlRule {\n  functionName: string; modifier: string; roles: string[];\n}\n\nclass AccessControlAnalyzer {\n  private rules: AccessControlRule[] = [];\n  private roleHierarchy: Map<string, string[]> = new Map();\n\n  addRule(func: string, modifier: string, roles: string[]): void {\n    this.rules.push({ functionName: func, modifier, roles });\n  }\n\n  addRole(name: string, inherits: string[] = []): void {\n    this.roleHierarchy.set(name, inherits);\n  }\n\n  hasAccess(role: string, requiredRole: string): boolean {\n    if (role === requiredRole) return true;\n    const inherits = this.roleHierarchy.get(requiredRole);\n    if (!inherits) return false;\n    return inherits.includes(role) || inherits.some(r => this.hasAccess(role, r));\n  }\n\n  analyze(): { function: string; modifier: string; risk: string }[] {\n    return this.rules.map(r => {\n      let risk = \"ok\";\n      if (r.modifier === \"onlyOwner\" && r.roles.length === 0) risk = \"single-admin risk\";\n      if (r.modifier === \"tx.origin\") risk = \"CRITICAL: phishing vulnerability\";\n      if (r.roles.length === 0 && r.modifier !== \"public\") risk = \"no access control\";\n      return { function: r.functionName, modifier: r.modifier, risk };\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-front-running-simulator",
      children: "TypeScript: Front-Running Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MempoolTx {\n  txHash: string; from: string; to: string; value: bigint;\n  gasPrice: bigint; nonce: number; data: string;\n}\n\nclass FrontRunningSimulator {\n  mempool: MempoolTx[] = [];\n\n  addToMempool(tx: MempoolTx): void {\n    this.mempool.push(tx);\n    this.mempool.sort((a, b) => Number(b.gasPrice - a.gasPrice));\n  }\n\n  detectFrontRunnable(): MempoolTx[] {\n    return this.mempool.filter(tx => {\n      const decoded = this.decodeSwapData(tx.data);\n      return decoded !== null && decoded.amount > BigInt(1000);\n    });\n  }\n\n  simulateFrontRun(victim: MempoolTx, frontRunAmount: bigint): { attackerProfit: bigint } {\n    const decoded = this.decodeSwapData(victim.data);\n    if (!decoded) return { attackerProfit: BigInt(0) };\n    const priceBefore = BigInt(100);\n    const priceAfter = priceBefore + (frontRunAmount / BigInt(1000));\n    const victimValue = decoded.amount * priceBefore;\n    const victimValueAfter = decoded.amount * priceAfter;\n    const slippageLoss = victimValueAfter - victimValue;\n    return { attackerProfit: slippageLoss > BigInt(0) ? slippageLoss : BigInt(0) };\n  }\n\n  private decodeSwapData(data: string): { amount: bigint; path: string[] } | null {\n    if (!data || data.length < 10) return null;\n    return { amount: BigInt(\"0x\" + data.slice(2, 10)), path: [\"tokenA\", \"tokenB\"] };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Reentrancy Detector ===\nclass ReentrancyDetector {\n    private callStack = new Set<string>();\n    private reentrantCalls = new Map<string, number>();\n\n    callFunction(contract: string, fn: string): boolean {\n        const key = `${contract}:${fn}`;\n        if (this.callStack.has(key)) {\n            this.reentrantCalls.set(key, (this.reentrantCalls.get(key) ?? 0) + 1);\n            return false; // blocked\n        }\n        this.callStack.add(key);\n        return true;\n    }\n    finishCall(contract: string, fn: string): void {\n        this.callStack.delete(`${contract}:${fn}`);\n    }\n    detectPatterns(bytecode: string): { hasCall: boolean; hasStateChange: boolean; order: string } {\n        const hasCall = bytecode.includes('CALL') || bytecode.includes('DELEGATECALL');\n        const hasStateChange = bytecode.includes('SSTORE');\n        const callIdx = bytecode.indexOf('CALL');\n        const storeIdx = bytecode.indexOf('SSTORE');\n        const order = callIdx >= 0 && storeIdx >= 0 && callIdx < storeIdx ? 'checks-effects-interactions:VIOLATED' : 'safe';\n        return { hasCall, hasStateChange, order };\n    }\n}\n\n// === Integer Overflow Checker ===\nclass OverflowChecker {\n    static checkAdd(a: bigint, b: bigint, bits: number): { result: bigint; overflow: boolean } {\n        const max = (BigInt(1) << BigInt(bits)) - BigInt(1);\n        const result = a + b;\n        return { result: result & max, overflow: result > max };\n    }\n    static checkSub(a: bigint, b: bigint, bits: number): { result: bigint; underflow: boolean } {\n        const max = (BigInt(1) << BigInt(bits)) - BigInt(1);\n        const result = a - b;\n        return { result: result & max, underflow: a < b };\n    }\n    static checkMul(a: bigint, b: bigint, bits: number): { result: bigint; overflow: boolean } {\n        const max = (BigInt(1) << BigInt(bits)) - BigInt(1);\n        const result = a * b;\n        return { result: result & max, overflow: result > max };\n    }\n    static analyzeBytecode(ops: string[]): { dangerous: boolean; issues: string[] } {\n        const issues: string[] = [];\n        let hasAdd = false, hasSafeMath = false;\n        for (const op of ops) {\n            if (op === 'ADD') hasAdd = true;\n            if (op.includes('SafeMath') || op.includes('checked')) hasSafeMath = true;\n        }\n        if (hasAdd && !hasSafeMath) issues.push('raw ADD without SafeMath');\n        return { dangerous: issues.length > 0, issues };\n    }\n}\n\n// === Access Control Analyzer ===\nclass AccessControlAnalyzer {\n    private roles = new Map<string, Set<string>>();\n\n    assignRole(user: string, role: string): void {\n        if (!this.roles.has(role)) this.roles.set(role, new Set());\n        this.roles.get(role)!.add(user);\n    }\n    hasRole(user: string, role: string): boolean { return this.roles.get(role)?.has(user) ?? false; }\n\n    analyzeFunction(visibility: string, modifiers: string[], functionName: string): { risk: string; details: string[] } {\n        const issues: string[] = [];\n        if (visibility === 'public' && !modifiers.some(m => m.includes('only') || m.includes('auth'))) {\n            issues.push(`${functionName}: public without access control`);\n        }\n        if (visibility === 'external' && !modifiers.includes('onlyOwner')) {\n            issues.push(`${functionName}: external might need onlyOwner`);\n        }\n        return { risk: issues.length > 0 ? 'HIGH' : 'LOW', details: issues };\n    }\n}\n\n// === Front-Running Simulator ===\nclass FrontRunningSim {\n    private mempool: { txid: string; data: string; gasPrice: bigint; from: string }[] = [];\n\n    submitTx(txid: string, data: string, gasPrice: bigint, from: string): void {\n        this.mempool.push({ txid, data, gasPrice, from });\n        this.mempool.sort((a, b) => Number(b.gasPrice - a.gasPrice));\n    }\n    frontRun(victimTxid: string, attackerAddr: string): { frontRunTx: string; profit: bigint } | null {\n        const victimIdx = this.mempool.findIndex(t => t.txid === victimTxid);\n        if (victimIdx < 0) return null;\n        const victim = this.mempool[victimIdx];\n        const frontRunTx = `frontrun-${victimTxid}`;\n        this.mempool.splice(victimIdx, 1);\n        return { frontRunTx, profit: BigInt(100) };\n    }\n    pendingCount(): number { return this.mempool.length; }\n}\n\n// === Layer 2 Rollup Simulator ===\nclass RollupSimulator {\n    private batch: { sender: string; to: string; amount: bigint }[] = [];\n    private stateRoot = '0x0';\n    private batchNumber = 0;\n\n    submitTx(sender: string, to: string, amount: bigint): void {\n        this.batch.push({ sender, to, amount });\n    }\n    submitBatch(sequencer: string): { batchNum: number; txCount: number; stateRoot: string } {\n        this.batchNumber++;\n        const root = `0x${Math.abs(this.batchNumber * 0x9E3779B9).toString(16).padStart(64, '0')}`;\n        const count = this.batch.length;\n        this.stateRoot = root;\n        this.batch = [];\n        return { batchNum: this.batchNumber, txCount: count, stateRoot: root };\n    }\n    verifyBatch(batchNum: number, proof: string[]): boolean {\n        return proof.length > 0;\n    }\n}\n\n// === MEV (Maximal Extractable Value) Estimator ===\nclass MEVEstimator {\n    estimateArbitrage(prices: Map<string, number>, dexes: string[]): number {\n        let maxProfit = 0;\n        for (let i = 0; i < dexes.length; i++) {\n            for (let j = i + 1; j < dexes.length; j++) {\n                const spread = Math.abs(prices.get(dexes[i])! - prices.get(dexes[j])!);\n                maxProfit = Math.max(maxProfit, spread);\n            }\n        }\n        return maxProfit;\n    }\n    estimateSandwich(targetAmount: number, slippage: number): number {\n        return targetAmount * (slippage / 100) * 0.5;\n    }\n}\n\n// === Demo ===\nconst rd = new ReentrancyDetector();\nconsole.log(`Reentrancy call: ${rd.callFunction('vault', 'withdraw')}`);\nconsole.log(`Reentrancy call (re-entered): ${rd.callFunction('vault', 'withdraw')}`);\nrd.finishCall('vault', 'withdraw');\nconsole.log(`Pattern analysis:`, rd.detectPatterns('PUSH CALL SSTORE'));\n\nconst oc = new OverflowChecker();\nconsole.log(`Overflow max+1: ${oc.checkAdd(BigInt(255), BigInt(1), 8).overflow}`);\nconsole.log(`Underflow 0-1: ${oc.checkSub(BigInt(0), BigInt(1), 8).underflow}`);\n\nconst ac = new AccessControlAnalyzer();\nac.assignRole('alice', 'admin');\nconsole.log(`Alice admin: ${ac.hasRole('alice', 'admin')}`);\nconsole.log(`Function analysis:`, ac.analyzeFunction('public', [], 'setBalance'));\n\nconst fr = new FrontRunningSim();\nfr.submitTx('tx1', '0xbeef', BigInt(50), 'alice');\nfr.submitTx('tx2', '0xcafe', BigInt(100), 'bob');\nconsole.log(`Front-run tx1: ${fr.frontRun('tx1', 'mallory')?.frontRunTx}`);\n\nconst rollup = new RollupSimulator();\nrollup.submitTx('alice', 'bob', BigInt(10));\nrollup.submitTx('bob', 'carol', BigInt(5));\nconst batch = rollup.submitBatch('sequencer1');\nconsole.log(`Rollup batch ${batch.batchNum}: ${batch.txCount} txs`);\n\nconst mev = new MEVEstimator();\nconsole.log(`MEV arbitrage: ${mev.estimateArbitrage(new Map([['Uniswap', 100], ['Sushiswap', 102]]), ['Uniswap', 'Sushiswap'])}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// security scalability\n// distributed-ledger-crypto implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'security scalability', data: { topic: 'distributed-ledger-crypto' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scalability is the primary hurdle for mainstream blockchain adoption."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layer 1 scaling (sharding) splits the blockchain into parallel segments."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layer 2 solutions move computation off-chain while inheriting L1 security."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollups (Optimistic and ZK) are the most promising L2 scaling technology."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimistic Rollups rely on fraud proofs with 7-day challenge periods."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ZK-Rollups use validity proofs for instant finality but require heavy computation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zk-STARKs are quantum-resistant and need no trusted setup (unlike zk-SNARKs)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The data availability problem ensures L2 data is always accessible."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State channels (Lightning Network) enable instant Bitcoin micro-payments."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MEV extraction (sandwich attacks, front-running) is a systemic blockchain risk."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quantum computing threatens ECDSA but post-quantum cryptography is being prepared."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security remains a moving target, from consensus attacks to complex smart contract exploits."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For dApp deployment, prefer ZK-Rollups for instant finality; use Optimistic Rollups for full EVM compatibility."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always use slippage protection (minOut) and Flashbots for large trades to avoid MEV."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor data availability — verify that rollup sequencers are publishing data to L1 blobs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For Bitcoin micro-payments, the Lightning Network is the best option for instant settlement."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start preparing for quantum resistance — use wallets that support or plan to support post-quantum signatures."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sidechains have independent security — never assume a sidechain is as secure as its parent chain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use MEV-Boost relays that enforce fair transaction ordering when running an Ethereum validator."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the \"Blockchain Trilemma.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between an Optimistic Rollup and a ZK-Rollup?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the \"Data Availability\" problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Sharding improve TPS?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a SNARK and a STARK?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a blockchain has 10 shards and each shard can process 15 TPS, what is the total theoretical TPS?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss the security trade-off of using a Sidechain versus a Rollup."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze how a \"Front-running\" attack works in a decentralized exchange."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate the gas savings of a ZK-Rollup processing 10,000 transfers versus L1 processing them individually, assuming each ZK proof costs 500,000 gas and each compressed transaction costs 100 bytes at 16 gas/byte."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the threat of Shor's Algorithm (Quantum Computing) to ECDSA and research \"Post-Quantum Cryptography\" (PQC) candidates for blockchain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a scalability architecture for a hypothetical blockchain that processes 100,000 TPS while maintaining at least 1,000 validators. Justify your choice of L1/L2 split, consensus mechanism, and data availability solution."
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