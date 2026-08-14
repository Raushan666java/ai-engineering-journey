"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[39662],{

/***/ 88661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_blockchain_01_introduction_md_d6d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-blockchain-01-introduction-md-d6d.json
const site_docs_courses_blockchain_01_introduction_md_d6d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/blockchain/01-introduction","title":"Chapter 1: Introduction to Blockchain","description":"Previous Chapter 2: Cryptography for Blockchain","source":"@site/docs/courses/blockchain/01-introduction.md","sourceDirName":"courses/blockchain","slug":"/blockchain/01-introduction","permalink":"/ai-engineering-journey/blockchain/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/blockchain/01-introduction","title":"Chapter 1: Introduction to Blockchain","sidebar_label":"Chapter 1: Introduction to Blockchain","sidebar_position":1},"sidebar":"course-blockchain","next":{"title":"Chapter 2: Cryptography for Blockchain","permalink":"/ai-engineering-journey/blockchain/02-cryptography"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/blockchain/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/blockchain/01-introduction',
	title: 'Chapter 1: Introduction to Blockchain',
	sidebar_label: 'Chapter 1: Introduction to Blockchain',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Blockchain';

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
  "value": "Conceptual Overview",
  "id": "conceptual-overview",
  "level": 3
}, {
  "value": "Centralization vs. Decentralization",
  "id": "centralization-vs-decentralization",
  "level": 3
}, {
  "value": "The Anatomy of a Block",
  "id": "the-anatomy-of-a-block",
  "level": 3
}, {
  "value": "Types of Blockchains",
  "id": "types-of-blockchains",
  "level": 3
}, {
  "value": "The Byzantine Generals Problem",
  "id": "the-byzantine-generals-problem",
  "level": 3
}, {
  "value": "CAP Theorem in Blockchain Context",
  "id": "cap-theorem-in-blockchain-context",
  "level": 3
}, {
  "value": "The Blockchain Trilemma",
  "id": "the-blockchain-trilemma",
  "level": 3
}, {
  "value": "Transaction Lifecycle",
  "id": "transaction-lifecycle",
  "level": 3
}, {
  "value": "Real-World Use Cases",
  "id": "real-world-use-cases",
  "level": 3
}, {
  "value": "History of Blockchain",
  "id": "history-of-blockchain",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Visualizing the Chain Linkage",
  "id": "example-1-visualizing-the-chain-linkage",
  "level": 3
}, {
  "value": "Example 2: Simple Transaction Flow",
  "id": "example-2-simple-transaction-flow",
  "level": 3
}, {
  "value": "Example 3: Mempool Visualization",
  "id": "example-3-mempool-visualization",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Distributed Ledger vs Traditional Database",
  "id": "distributed-ledger-vs-traditional-database",
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
  "value": "TypeScript: Simple Blockchain",
  "id": "typescript-simple-blockchain",
  "level": 3
}, {
  "value": "TypeScript: Merkle Tree",
  "id": "typescript-merkle-tree",
  "level": 3
}, {
  "value": "TypeScript: UTXO Tracking Blockchain with Transaction Validation",
  "id": "typescript-utxo-tracking-blockchain-with-transaction-validation",
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
        id: "chapter-1-introduction-to-blockchain",
        children: "Chapter 1: Introduction to Blockchain"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " None (First Chapter) | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/02-cryptography",
          children: "Chapter 2: Cryptography for Blockchain"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define blockchain technology and its core components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the historical evolution from centralized to decentralized systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between public, private, and permissioned blockchains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the Byzantine Generals Problem and its relevance to distributed systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the Blockchain Trilemma and its implications for network design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the CAP theorem in the context of blockchain versus traditional databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize industry use cases for blockchain across finance, supply chain, healthcare, and more"
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
        href: "../../assets/images/lessons/blockchain/01-introduction/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/01-introduction/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/blockchain/01-introduction/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/01-introduction/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/blockchain/01-introduction/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/01-introduction/visual-explanation.png",
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
            children: "Decentralization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shifts trust from intermediaries to protocol and consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single point of failure or control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block Anatomy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header (metadata + prev hash) + body (transactions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain integrity depends on cryptographic linking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public, private, consortium — different access models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose based on trust assumptions and privacy needs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction Flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request ? Broadcast ? Validation ? Mining ? Confirmation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every full node validates every transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain Trilemma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade-off between security, scalability, decentralization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No blockchain optimizes all three simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Byzantine Generals Problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed agreement despite faulty actors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus mechanisms solve this fundamental problem"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Decentralization] --> B[Block Anatomy]\n    B --> C[Chain Linkage]\n    C --> D[Blockchain Types]\n    D --> E[Byzantine Generals Problem]\n    E --> F[Transaction Flow]\n    F --> G[Blockchain Trilemma]\n    G --> H[Use Cases & Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conceptual-overview",
      children: "Conceptual Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A blockchain is a distributed, immutable ledger that records transactions across a network of computers. Unlike traditional databases managed by a central authority (e.g., a bank or a government), a blockchain operates on a peer-to-peer (P2P) architecture where every participant (node) maintains a copy of the ledger. The ledger grows as blocks are appended through a consensus mechanism that all participants agree upon."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The term \"blockchain\" describes the core data structure: blocks of transactions linked together in chronological order using cryptographic hashes. Each block contains a reference to the previous block's hash, forming an unbroken chain from the genesis block to the latest block."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "centralization-vs-decentralization",
      children: "Centralization vs. Decentralization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional systems rely on trusted intermediaries. In a centralized system, the central node is a single point of failure and control. Decentralization redistributes this authority across a network of peers."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Centralized System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decentralized System"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed among participants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trust Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust the central authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust the protocol and cryptography"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single Point of Failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower throughput (consensus overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Censorship Resistance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (authority can block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (no single blocker)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled by authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent to all participants"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-anatomy-of-a-block",
      children: "The Anatomy of a Block"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each block typically consists of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Header:"
        }), " Contains metadata:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Timestamp:"
            }), " When the block was created"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Version:"
            }), " Which protocol version was used"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Previous Block Hash:"
            }), " The hash of the parent block (creates the chain)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Merkle Root:"
            }), " A single hash representing all transactions in the block"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Nonce:"
            }), " A number used in Proof of Work mining"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Difficulty Target:"
            }), " The mining difficulty threshold"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Body:"
        }), " A list of validated transactions (the actual data being recorded)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The \"chain\" is formed by each block header including the cryptographic hash of the previous block's header. This chaining mechanism makes it computationally infeasible to alter any historical block without also altering every subsequent block."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Block_N[Block N]\n        PrevHash_N[\"Prev Hash: 0x...ABC\"]\n        Data_N[\"Transaction Data\"]\n        Hash_N[\"Hash: 0x...DEF\"]\n    end\n    subgraph Block_N1[Block N+1]\n        PrevHash_N1[\"Prev Hash: 0x...DEF\"]\n        Data_N1[\"Transaction Data\"]\n        Hash_N1[\"Hash: 0x...GHI\"]\n    end\n    subgraph Block_N2[Block N+2]\n        PrevHash_N2[\"Prev Hash: 0x...GHI\"]\n        Data_N2[\"Transaction Data\"]\n        Hash_N2[\"Hash: 0x...JKL\"]\n    end\n    Block_N --> Block_N1\n    Block_N1 --> Block_N2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-blockchains",
      children: "Types of Blockchains"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Public (Permissionless):"
          }), " Anyone can join, read, write, and participate in consensus. Examples: Bitcoin, Ethereum. Fully transparent and censorship-resistant but limited in throughput."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Private (Permissioned):"
          }), " Controlled by a single organization. Only authorized participants can join. Offers high throughput and privacy but sacrifices decentralization. Useful for internal enterprise use cases."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Consortium (Permissioned):"
          }), " Controlled by a group of organizations. Combines elements of public and private blockchains. Multiple organizations share governance while restricting access to authorized participants. Hyperledger Fabric is a common framework."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Public[\"Public Blockchain\"]\n        P1[\"Anyone can read\"]\n        P2[\"Anyone can write\"]\n        P3[\"Anyone can validate\"]\n    end\n    subgraph Private[\"Private Blockchain\"]\n        PR1[\"Single org controls\"]\n        PR2[\"Authorized participants\"]\n        PR3[\"Centralized validation\"]\n    end\n    subgraph Consortium[\"Consortium Blockchain\"]\n        C1[\"Multi-org governance\"]\n        C2[\"Authorized participants\"]\n        C3[\"Shared validation\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-byzantine-generals-problem",
      children: "The Byzantine Generals Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Byzantine Generals Problem is a classic problem in distributed computing. Imagine several divisions of the Byzantine army camped outside an enemy city, each commanded by a general. The generals must agree on a common battle plan: either Attack or Retreat. They communicate only via messengers. Some generals may be traitors who send conflicting messages to cause confusion."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A solution must satisfy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "All loyal generals agree on the same plan"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "The plan is reasonable (not based on traitors' messages)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In blockchain terms, the generals are network nodes, the battle plan is the next block, and the traitors are malicious nodes attempting to disrupt consensus. Consensus algorithms like Proof of Work and Proof of Stake are solutions to the Byzantine Generals Problem in an open, permissionless environment."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a system with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " total nodes, Byzantine Fault Tolerance typically requires that no more than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n/3"
      }), " nodes are faulty (", (0,jsx_runtime.jsx)(_components.code, {
        children: "n > 3f"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f"
      }), " is the number of faulty nodes)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cap-theorem-in-blockchain-context",
      children: "CAP Theorem in Blockchain Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CAP theorem states that a distributed data store can only provide two of three guarantees:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency:"
        }), " Every read receives the most recent write"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Availability:"
        }), " Every request receives a response"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partition Tolerance:"
        }), " The system continues operating despite network partitions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blockchains typically prioritize Partition Tolerance and Consistency over Availability. During a network partition, a blockchain may halt rather than risk inconsistency. Bitcoin, for example, can experience temporary forks during partitions but eventually converges on a single chain through the longest-chain rule."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traditional RDBMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not partition-tolerant by design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May halt during partition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar to Bitcoin"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-blockchain-trilemma",
      children: "The Blockchain Trilemma"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proposed by Vitalik Buterin, the Blockchain Trilemma suggests that blockchain systems can only achieve two of three properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security:"
        }), " Resistance to attacks (51% attacks, double-spending, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability:"
        }), " High transaction throughput and low latency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decentralization:"
        }), " No single entity controls the network"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Trilemma[\"Blockchain Trilemma\"]\n        Security[Security]\n        Scalability[Scalability]\n        Decentralization[Decentralization]\n        \n        Security --- Scalability\n        Security --- Decentralization\n        Scalability --- Decentralization\n    end\n    subgraph Tradeoffs[\"Trade-off Examples\"]\n        Bitcoin[\"Bitcoin: Security + Decentralization<br/>(sacrifices scalability)\"]\n        BSC[\"BSC: Security + Scalability<br/>(sacrifices decentralization)\"]\n        Future[Future protocols aim to<br/>minimize all three trade-offs]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bitcoin (Security + Decentralization):"
        }), " ~7 TPS, highly decentralized, extremely secure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solana (Scalability + Security):"
        }), " ~65,000 TPS, but fewer validators (lower decentralization)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EOS (Scalability + Decentralization):"
        }), " High throughput with DPoS, but security concerns due to fewer block producers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transaction-lifecycle",
      children: "Transaction Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The full lifecycle of a blockchain transaction follows these steps:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant User as User\n    participant Wallet as Wallet\n    participant Node as Full Node\n    participant Network as P2P Network\n    participant Miner as Miner/Validator\n    \n    User->>Wallet: Create transaction\n    Wallet->>Wallet: Sign with private key\n    Wallet->>Node: Broadcast transaction\n    Node->>Node: Validate signature + balance\n    Node->>Network: Relay to peers\n    Network->>Miner: Transaction enters mempool\n    Miner->>Miner: Include in candidate block\n    Miner->>Network: Broadcast solved block\n    Network->>Node: All nodes verify block\n    Node->>Node: Add to local chain\n    Node->>Wallet: Confirm transaction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-use-cases",
      children: "Real-World Use Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Industry"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-border payments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24/7 settlement, lower fees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ripple, Stellar"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supply Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product traceability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IBM Food Trust"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patient records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interoperable, patient-controlled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medicalchain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real Estate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Property titles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraud reduction, faster transfers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-game assets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Player ownership, cross-game"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Axie Infinity, Enjin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Voting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Electronic voting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tamper-proof, verifiable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voatz, follow-my-vote"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-sovereign identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-controlled credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uPort, Sovrin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Energy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer-to-peer energy trading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralized grid management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power Ledger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intellectual Property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copyright registration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timestamped proof of creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binded, Po.et"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insurance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Claims processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated settlement via smart contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Etherisc"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "history-of-blockchain",
      children: "History of Blockchain"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Milestone"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Significance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1991"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Haber & Stornetta propose timestamping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First concept of cryptographically linked blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hal Finney develops RPoW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable Proof of Work (early precursor)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Satoshi Nakamoto publishes Bitcoin whitepaper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First practical blockchain solution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin genesis block mined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain goes live for the first time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vitalik Buterin proposes Ethereum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contracts and Turing-complete blockchain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum mainnet launches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmable blockchain era begins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CryptoKitties congests Ethereum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First mainstream dApp; scaling becomes urgent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeFi Summer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explosive growth of decentralized finance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Merge (PoS transition)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.9% energy reduction for Ethereum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EIP-4844 (Proto-Danksharding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blob transactions reduce L2 fees significantly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-visualizing-the-chain-linkage",
      children: "Example 1: Visualizing the Chain Linkage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine three blocks: A, B, and C."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Block A has Hash ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0x123"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Block B includes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0x123"
        }), " in its header. Block B's own Hash is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0x456"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Block C includes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0x456"
        }), " in its header."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If an attacker changes a transaction in Block A, its Hash changes to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x999"
      }), ". Because Block B expects ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x123"
      }), ", the link breaks, and all subsequent blocks become invalid. This demonstrates ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "immutability"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Block {\n    index: number;\n    timestamp: number;\n    data: string;\n    previousHash: string;\n    hash: string;\n    nonce: number;\n}\n\nfunction calculateHash(\n    index: number,\n    previousHash: string,\n    timestamp: number,\n    data: string,\n    nonce: number\n): string {\n    // Simplified hash computation (actual SHA-256 used in reality)\n    const input = `${index}${previousHash}${timestamp}${data}${nonce}`;\n    // In real blockchain, this would be SHA-256(input)\n    return `hash_${input}`;\n}\n\nfunction createGenesisBlock(): Block {\n    return {\n        index: 0,\n        timestamp: Date.now(),\n        data: \"Genesis Block\",\n        previousHash: \"0\",\n        hash: \"0x123\",\n        nonce: 0,\n    };\n}\n\nfunction createNextBlock(\n    previousBlock: Block,\n    data: string\n): Block {\n    const index = previousBlock.index + 1;\n    const timestamp = Date.now();\n    const hash = calculateHash(index, previousBlock.hash, timestamp, data, 0);\n    return {\n        index,\n        timestamp,\n        data,\n        previousHash: previousBlock.hash,\n        hash,\n        nonce: 0,\n    };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-simple-transaction-flow",
      children: "Example 2: Simple Transaction Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Request:"
        }), " Alice wants to send 5 BTC to Bob."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Broadcast:"
        }), " The transaction is broadcast to the P2P network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Nodes verify Alice has sufficient funds using digital signatures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " Miners/Validators bundle the transaction into a block."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit:"
        }), " The block is added to the chain, and Bob receives the funds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-mempool-visualization",
      children: "Example 3: Mempool Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Mempool[\"Mempool (Pending Transactions)\"]\n        Tx1[\"Tx: Alice ? Bob (5 BTC)\"]\n        Tx2[\"Tx: Charlie ? Dave (2 BTC)\"]\n        Tx3[\"Tx: Eve ? Frank (1 BTC)\"]\n        Tx4[\"Tx: Alice ? Bob (0.5 BTC)\"]\n    end\n    Miner[\"Miner selects<br/>highest fee txs\"]\n    Block[\"Block<br/>(limited size)\"]\n    Chain[\"Blockchain\"]\n    \n    Mempool --> Miner\n    Miner --> Block\n    Block --> Chain\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When evaluating a blockchain platform, always identify which two corners of the trilemma it sacrifices. No project delivers all three — if they claim otherwise, they're likely compromising on decentralization (fewer nodes) or security (weaker consensus)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Centralized Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single authority controls data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, high throughput, single point of failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Banking ledgers, inventory systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple nodes, single authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better availability, still trusted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud DB replicas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple nodes, no central authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trustless, immutable, decentralized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptocurrency, supply chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public Blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anyone can participate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open, permissionless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin, Ethereum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private Blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known participants only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster, controlled access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise supply chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consortium Blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple organizations govern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared control, privacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade finance, healthcare"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "distributed-ledger-vs-traditional-database",
      children: "Distributed Ledger vs Traditional Database"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional Database"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distributed Ledger (Blockchain)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables, rows, columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain of blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized administrator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralized consensus"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trust Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust the administrator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust the protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immutability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible to alter/delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practically immutable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (thousands of TPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low to moderate (7-1000+ TPS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milliseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds to minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost per transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate to high (gas)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transparency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by access controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full transparency by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Username/password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptographic keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audit trail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log-based, alterable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in, immutable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backups and replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (full history available)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Block Header Fields"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timestamp, version, prev hash, Merkle root, nonce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every field has a specific security purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blockchain Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public, Private, Consortium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determines trust model and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Properties"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutability, Decentralization, Transparency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Achieved through cryptography + consensus"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trilemma Corners"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security, Scalability, Decentralization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick two — the third is sacrificed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consensus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PoW, PoS, BFT, DPoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each has different trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Byzantine Fault Tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n > 3f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f = number of faulty nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Decentralization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trustless trading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autonomous execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consortium governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node distribution studies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chain Linkage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract state chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit trail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data immutability research"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PoW/PoS security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFT voting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New consensus algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction Flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment settlement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract invocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance benchmarking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction batching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Channel data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Byzantine Fault Tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-chain atomicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orderer fault tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFT protocol research"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What would happen if a block's previous hash were altered in a blockchain?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Only that block would be affected"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) All subsequent blocks would become invalid because their hashes depend on the altered block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The network would automatically recalculate the hashes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Nothing — hashes are just metadata"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) All subsequent blocks would become invalid.** Each block header contains the hash of the previous block, creating a chain. Changing any block requires recalculating all subsequent hashes, making tampering computationally detectable.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which blockchain type is most suitable for a consortium of competing banks?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Public blockchain"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Private blockchain controlled by one bank"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Consortium (permissioned) blockchain"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) A centralized database"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Consortium (permissioned) blockchain.** Multiple competing organizations need shared control without a single authority. Consortium chains distribute governance among members while restricting access to authorized participants.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the Blockchain Trilemma state?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Blockchain is three times more secure than traditional databases"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A blockchain can only optimize two of three properties: security, scalability, and decentralization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) There are only three types of blockchains"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Blockchain transactions take three seconds to confirm"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) A blockchain can only optimize two of three properties: security, scalability, and decentralization.** This fundamental trade-off drives most design decisions in blockchain protocol development.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In the Byzantine Generals Problem, what is the maximum fraction of traitors a BFT system can typically tolerate?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 1/4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 1/3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 1/2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 2/3"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) 1/3.** Byzantine Fault Tolerance systems typically require n > 3f, meaning up to one-third of participants can be faulty or malicious while the system still reaches correct consensus.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["According to the CAP theorem, which two properties do blockchains typically prioritize?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Consistency and Availability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Consistency and Partition Tolerance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Availability and Partition Tolerance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Consistency and Speed"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Consistency and Partition Tolerance.** Blockchains prioritize consistency (all nodes see the same state) and partition tolerance (network continues during splits). Availability may be temporarily sacrificed during network partitions or reorgs.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-simple-blockchain",
      children: "TypeScript: Simple Blockchain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createHash } from \"node:crypto\";\n\nclass Block {\n  public hash: string;\n  constructor(\n    public index: number,\n    public timestamp: number,\n    public data: string,\n    public previousHash: string,\n    public nonce = 0\n  ) {\n    this.hash = this.computeHash();\n  }\n\n  computeHash(): string {\n    return createHash(\"sha256\")\n      .update(this.index + this.timestamp + this.data + this.previousHash + this.nonce)\n      .digest(\"hex\");\n  }\n\n  mine(difficulty: number): void {\n    while (this.hash.substring(0, difficulty) !== \"0\".repeat(difficulty)) {\n      this.nonce++;\n      this.hash = this.computeHash();\n    }\n  }\n}\n\nclass Blockchain {\n  chain: Block[] = [];\n\n  constructor() { this.chain.push(this.genesis()); }\n\n  genesis(): Block {\n    return new Block(0, Date.now(), \"Genesis Block\", \"0\");\n  }\n\n  latest(): Block { return this.chain[this.chain.length - 1]; }\n\n  addBlock(data: string, difficulty = 4): void {\n    const block = new Block(\n      this.latest().index + 1, Date.now(), data, this.latest().hash\n    );\n    block.mine(difficulty);\n    this.chain.push(block);\n  }\n\n  isValid(): boolean {\n    for (let i = 1; i < this.chain.length; i++) {\n      const cur = this.chain[i];\n      const prev = this.chain[i - 1];\n      if (cur.hash !== cur.computeHash()) return false;\n      if (cur.previousHash !== prev.hash) return false;\n    }\n    return true;\n  }\n}\n// const bc = new Blockchain();\n// bc.addBlock(\"Tx1\");\n// bc.addBlock(\"Tx2\");\n// console.log(bc.isValid()); // true\n// bc.chain[1].data = \"Tampered\";\n// console.log(bc.isValid()); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-merkle-tree",
      children: "TypeScript: Merkle Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createHash } from \"node:crypto\";\n\nconst sha256 = (d: string): string =>\n  createHash(\"sha256\").update(d).digest(\"hex\");\n\nclass MerkleNode {\n  constructor(\n    public left: MerkleNode | null,\n    public right: MerkleNode | null,\n    public hash: string\n  ) {}\n}\n\nclass MerkleTree {\n  private root: MerkleNode | null = null;\n  build(transactions: string[]): void {\n    if (!transactions.length) throw new Error(\"No transactions\");\n    let nodes = transactions.map(tx => new MerkleNode(null, null, sha256(tx)));\n    while (nodes.length > 1) {\n      const next: MerkleNode[] = [];\n      for (let i = 0; i < nodes.length; i += 2) {\n        const l = nodes[i];\n        const r = i + 1 < nodes.length ? nodes[i + 1] : l;\n        next.push(new MerkleNode(l, r, sha256(l.hash + r.hash)));\n      }\n      nodes = next;\n    }\n    this.root = nodes[0];\n  }\n  getRoot(): string {\n    if (!this.root) throw new Error(\"Tree not built\");\n    return this.root.hash;\n  }\n  getProof(tx: string): { hash: string; left: boolean }[] {\n    const target = sha256(tx);\n    const proof: { hash: string; left: boolean }[] = [];\n    this.findProof(this.root, target, proof);\n    return proof;\n  }\n  private findProof(\n    node: MerkleNode | null,\n    target: string,\n    proof: { hash: string; left: boolean }[]\n  ): boolean {\n    if (!node) return false;\n    if (!node.left && !node.right) return node.hash === target;\n    if (this.findProof(node.left, target, proof)) {\n      if (node.right) proof.push({ hash: node.right.hash, left: false });\n      return true;\n    }\n    if (this.findProof(node.right, target, proof)) {\n      if (node.left) proof.push({ hash: node.left.hash, left: true });\n      return true;\n    }\n    return false;\n  }\n  static verifyProof(\n    rootHash: string,\n    tx: string,\n    proof: { hash: string; left: boolean }[]\n  ): boolean {\n    let cur = sha256(tx);\n    for (const s of proof) cur = sha256(s.left ? s.hash + cur : cur + s.hash);\n    return cur === rootHash;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utxo-tracking-blockchain-with-transaction-validation",
      children: "TypeScript: UTXO Tracking Blockchain with Transaction Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createHash } from \"node:crypto\";\n\nconst sha256 = (d: string): string => createHash(\"sha256\").update(d).digest(\"hex\");\n\ninterface UTXO {\n  txid: string; outIndex: number; amount: number; owner: string;\n}\n\nclass Transaction {\n  constructor(\n    public inputs: { txid: string; outIndex: number; sig: string }[],\n    public outputs: { amount: number; owner: string }[],\n    public id: string = \"\"\n  ) {\n    this.id = id || sha256(JSON.stringify(inputs) + JSON.stringify(outputs));\n  }\n}\n\nclass UTXOBlockchain {\n  chain: { index: number; hash: string; prevHash: string; txs: Transaction[]; nonce: number }[] = [];\n  utxoSet: Map<string, UTXO> = new Map();\n\n  constructor() { this.genesis(); }\n\n  private genesis() {\n    const coinbase = new Transaction([], [{ amount: 50, owner: \"miner\" }]);\n    this.chain.push({ index: 0, hash: \"0\".repeat(64), prevHash: \"\", txs: [coinbase], nonce: 0 });\n    coinbase.outputs.forEach((o, i) => this.utxoSet.set(`0:${i}`, { txid: \"0\", outIndex: i, amount: o.amount, owner: o.owner }));\n  }\n\n  addBlock(txs: Transaction[], difficulty = 3): Transaction[] {\n    const valid: Transaction[] = [];\n    for (const tx of txs) {\n      if (this.validateTx(tx)) {\n        this.applyTx(tx); valid.push(tx);\n      }\n    }\n    const prev = this.chain[this.chain.length - 1];\n    let nonce = 0, hash = \"\";\n    do { hash = sha256(prev.hash + JSON.stringify(valid) + nonce++); }\n    while (!hash.startsWith(\"0\".repeat(difficulty)));\n    this.chain.push({ index: prev.index + 1, hash, prevHash: prev.hash, txs: valid, nonce });\n    return valid;\n  }\n\n  validateTx(tx: Transaction): boolean {\n    if (tx.inputs.length === 0) return true;\n    let totalIn = 0, totalOut = tx.outputs.reduce((s, o) => s + o.amount, 0);\n    for (const inp of tx.inputs) {\n      const key = `${inp.txid}:${inp.outIndex}`;\n      const utxo = this.utxoSet.get(key);\n      if (!utxo) return false;\n      totalIn += utxo.amount;\n    }\n    return totalIn >= totalOut;\n  }\n\n  private applyTx(tx: Transaction): void {\n    for (const inp of tx.inputs) this.utxoSet.delete(`${inp.txid}:${inp.outIndex}`);\n    tx.outputs.forEach((o, i) => this.utxoSet.set(`${tx.id}:${i}`, { txid: tx.id, outIndex: i, amount: o.amount, owner: o.owner }));\n  }\n\n  balance(owner: string): number {\n    let bal = 0;\n    for (const utxo of this.utxoSet.values()) if (utxo.owner === owner) bal += utxo.amount;\n    return bal;\n  }\n}\n// const bc = new UTXOBlockchain();\n// const tx = new Transaction([], [{ amount: 10, owner: \"alice\" }]);\n// bc.addBlock([tx]);\n// console.log(bc.balance(\"alice\")); // 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Block Explorer ===\ninterface BlockData { index: number; hash: string; prevHash: string; timestamp: number; txs: string[]; nonce: number; }\nclass BlockExplorer {\n    private blocks: BlockData[] = [];\n    addBlock(txs: string[], prevHash: string, nonce: number): BlockData {\n        const block: BlockData = {\n            index: this.blocks.length, hash: this.simpleHash(`${prevHash}${JSON.stringify(txs)}${nonce}`),\n            prevHash, timestamp: Date.now(), txs, nonce,\n        };\n        this.blocks.push(block);\n        return block;\n    }\n    private simpleHash(s: string): string {\n        let h = 0;\n        for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }\n        return Math.abs(h).toString(16).padStart(8, '0');\n    }\n    getBlock(index: number): BlockData | undefined { return this.blocks[index]; }\n    validateChain(): boolean {\n        for (let i = 1; i < this.blocks.length; i++) {\n            const prev = this.blocks[i - 1], curr = this.blocks[i];\n            if (curr.prevHash !== prev.hash) return false;\n        }\n        return true;\n    }\n    printChain(): void { this.blocks.forEach(b => console.log(`Block ${b.index}: ${b.hash} (prev: ${b.prevHash.slice(0, 8)}...)`)); }\n}\n\n// === Simple Transaction ===\ninterface TxInput { txid: string; vout: number; sig: string; }\ninterface TxOutput { address: string; amount: number; }\nfunction createCoinbaseTx(amount: number, addr: string): { inputs: TxInput[]; outputs: TxOutput[] } {\n    return { inputs: [{ txid: '0'.repeat(64), vout: 0, sig: 'coinbase' }], outputs: [{ address: addr, amount }] };\n}\n\n// === Genesis Block Generator ===\nfunction createGenesisBlock(timestamp: number, coinbaseAddr: string): BlockData {\n    const explorer = new BlockExplorer();\n    const coinbaseTx = `coinbase:${coinbaseAddr}:50`;\n    return explorer.addBlock([coinbaseTx], '0'.repeat(64), 0);\n}\n\n// === Simple PoW Checker ===\nfunction checkPoW(blockHash: string, target: number): boolean {\n    const prefix = '0'.repeat(target);\n    return blockHash.startsWith(prefix);\n}\n\n// === Address Generator (simplified) ===\nfunction generateAddress(seed: string): string {\n    let h = 0;\n    for (let i = 0; i < seed.length; i++) { h = ((h << 5) - h) + seed.charCodeAt(i); h |= 0; }\n    return `0x${Math.abs(h).toString(16).padStart(40, '0')}`;\n}\n\n// === Demo ===\nconst exp = new BlockExplorer();\nexp.addBlock(['tx1:alice->bob:10'], '0'.repeat(64), 0);\nexp.addBlock(['tx2:bob->carol:5'], exp.getBlock(0)!.hash, 1);\nexp.addBlock(['tx3:carol->dave:2'], exp.getBlock(1)!.hash, 2);\nexp.printChain();\nconsole.log(`Chain valid: ${exp.validateChain()}`);\n\nconst genesis = createGenesisBlock(1680000000, 'alice');\nconsole.log(`Genesis hash: ${genesis.hash}`);\nconsole.log(`PoW check (target=2): ${checkPoW(genesis.hash, 2)}`);\nconsole.log(`Generated address: ${generateAddress('alice')}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// introduction\n// distributed-ledger-crypto implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'introduction', data: { topic: 'distributed-ledger-crypto' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blockchain is a decentralized, distributed ledger technology ensuring data integrity without central authority."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The transition from centralized to decentralized systems reduces single points of failure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blocks are linked via cryptographic hashes, creating an immutable record of history."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public blockchains allow open participation, while private and consortium chains restrict access."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Blockchain Trilemma suggests a trade-off between security, scalability, and decentralization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Byzantine Generals Problem frames the fundamental challenge that consensus mechanisms solve."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The CAP theorem provides a lens for understanding blockchain trade-offs versus traditional databases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blockchain applications span finance, supply chain, healthcare, identity, and many other industries."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose your blockchain type (public/private/consortium) based on your trust model and privacy requirements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand that all blockchains make trade-offs — there is no perfect solution for every use case."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immutability is probabilistic, not absolute — it depends on the amount of hashing power or stake securing the chain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transaction costs and throughput vary dramatically between blockchain types and consensus mechanisms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always evaluate the governance model before committing to a blockchain platform."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the primary role of the \"Previous Block Hash\" in a block header?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between a distributed database and a blockchain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is immutability considered a \"probabilistic\" feature in some public blockchains?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the role of a \"node\" in a blockchain network."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the Byzantine Generals Problem and why does it matter for blockchain?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the trust models of a traditional bank transfer versus a Bitcoin transaction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a network has 10,000 nodes and 51% are compromised, explain the impact on the ledger's integrity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a use case where a private blockchain is superior to a public one."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how the CAP theorem applies to a public blockchain versus a traditional SQL database."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze how the removal of the \"timestamp\" field in a block header would affect the network's ability to maintain a consistent chronological order of events."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research and compare the governance models of Bitcoin (BIP process), Ethereum (EIP process), and a consortium blockchain like Hyperledger. How does each model affect upgrade adoption?"
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