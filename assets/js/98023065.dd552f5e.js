"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[40480],{

/***/ 55602
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_blockchain_09_enterprise_md_980_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-blockchain-09-enterprise-md-980.json
const site_docs_courses_blockchain_09_enterprise_md_980_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/blockchain/09-enterprise","title":"Chapter 9: Enterprise Blockchain","description":"Previous Decentralized Finance (DeFi) | Next Security and Scalability","source":"@site/docs/courses/blockchain/09-enterprise.md","sourceDirName":"courses/blockchain","slug":"/blockchain/09-enterprise","permalink":"/ai-engineering-journey/blockchain/09-enterprise","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-enterprise","slug":"/blockchain/09-enterprise","title":"Chapter 9: Enterprise Blockchain","sidebar_label":"Chapter 9: Enterprise Blockchain","sidebar_position":9},"sidebar":"course-blockchain","previous":{"title":"Chapter 8: Decentralized Finance (DeFi)","permalink":"/ai-engineering-journey/blockchain/08-defi"},"next":{"title":"Chapter 10: Security and Scalability","permalink":"/ai-engineering-journey/blockchain/10-security-scalability"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/blockchain/09-enterprise.md


const frontMatter = {
	id: '09-enterprise',
	slug: '/blockchain/09-enterprise',
	title: 'Chapter 9: Enterprise Blockchain',
	sidebar_label: 'Chapter 9: Enterprise Blockchain',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Enterprise Blockchain';

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
  "value": "The Enterprise Need",
  "id": "the-enterprise-need",
  "level": 3
}, {
  "value": "Hyperledger Fabric Architecture",
  "id": "hyperledger-fabric-architecture",
  "level": 3
}, {
  "value": "Identity and MSP (Membership Service Provider)",
  "id": "identity-and-msp-membership-service-provider",
  "level": 3
}, {
  "value": "Channels",
  "id": "channels",
  "level": 3
}, {
  "value": "Private Data Collections (PDC)",
  "id": "private-data-collections-pdc",
  "level": 3
}, {
  "value": "Chaincode Lifecycle",
  "id": "chaincode-lifecycle",
  "level": 3
}, {
  "value": "Endorsement Policies",
  "id": "endorsement-policies",
  "level": 3
}, {
  "value": "Chaincode Example (Node.js)",
  "id": "chaincode-example-nodejs",
  "level": 3
}, {
  "value": "Consensus in Enterprise (Raft)",
  "id": "consensus-in-enterprise-raft",
  "level": 3
}, {
  "value": "Enterprise Use Cases",
  "id": "enterprise-use-cases",
  "level": 3
}, {
  "value": "Public vs Enterprise Comparison",
  "id": "public-vs-enterprise-comparison",
  "level": 3
}, {
  "value": "When to Use Each",
  "id": "when-to-use-each",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Confidential Supply Chain Channel",
  "id": "example-1-confidential-supply-chain-channel",
  "level": 3
}, {
  "value": "Example 2: Asset Transfer Chaincode Flow",
  "id": "example-2-asset-transfer-chaincode-flow",
  "level": 3
}, {
  "value": "Example 3: Endorsement Policy Configuration",
  "id": "example-3-endorsement-policy-configuration",
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
  "value": "TypeScript: Endorsement Policy Simulator",
  "id": "typescript-endorsement-policy-simulator",
  "level": 3
}, {
  "value": "TypeScript: Channel Configuration Builder",
  "id": "typescript-channel-configuration-builder",
  "level": 3
}, {
  "value": "TypeScript: Private Data Collection Config Generator",
  "id": "typescript-private-data-collection-config-generator",
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
        id: "chapter-9-enterprise-blockchain",
        children: "Chapter 9: Enterprise Blockchain"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/08-defi",
          children: "Chapter 8: Decentralized Finance (DeFi)"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/10-security-scalability",
          children: "Chapter 10: Security and Scalability"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between Enterprise Blockchains and Public Blockchains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the architecture of Hyperledger Fabric (Peers, Orderers, Certificate Authorities)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain channels, private data collections, and endorsement policies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the chaincode lifecycle (install, approve, commit, invoke)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare enterprise consensus (Raft, Kafka) with public chain consensus"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe use cases for enterprise blockchain in supply chain, healthcare, and finance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the role of Membership Service Providers (MSP) and X.509 certificates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate when to choose permissioned vs public blockchain"
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
        href: "../../assets/images/lessons/blockchain/09-enterprise/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/09-enterprise/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/blockchain/09-enterprise/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/09-enterprise/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/blockchain/09-enterprise/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/09-enterprise/visual-explanation.png",
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
            children: "Enterprise vs Public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy, performance, governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permissioned = known participants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperledger Fabric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular, pluggable architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peers + Orderers + Channels + MSP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private sub-networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only authorized members see data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private Data Collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidential data within a channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Even channel members can be restricted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chaincode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contracts in Go/Java/Node.js"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard languages, no Solidity needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Endorsement Policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specifies which peers must validate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customizable trust per transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise Consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raft (CFT) instead of PoW/PoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast finality, low energy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Enterprise Requirements] --> B[Hyperledger Fabric]\n    B --> C[Identity & MSP]\n    C --> D[Peers & Orderers]\n    D --> E[Channels & Privacy]\n    E --> F[Chaincode Lifecycle]\n    F --> G[Endorsement Policies]\n    G --> H[Enterprise Use Cases]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-enterprise-need",
      children: "The Enterprise Need"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Public blockchains like Bitcoin are designed for total transparency and anonymity. Enterprises often require:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy:"
        }), " Only specific parties should see transaction details."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance:"
        }), " Higher throughput and lower latency than public chains."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Governance:"
        }), " A known set of participants with clear legal responsibilities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regulatory Compliance:"
        }), " Know Your Customer (KYC), Anti-Money Laundering (AML)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Finality:"
        }), " No probabilistic settlement — transactions settle instantly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Requirements[\"Enterprise Requirements vs Public Blockchain\"]\n        Privacy[\"PRIVACY<br/>Need confidential data<br/>Public: Visible to all\"]\n        Performance[\"PERFORMANCE<br/>Need 1000s TPS<br/>Public: 7-30 TPS\"]\n        Governance[\"GOVERNANCE<br/>Need known identities<br/>Public: Anonymous\"]\n        Finality[\"FINALITY<br/>Need instant settlement<br/>Public: Probabilistic\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hyperledger-fabric-architecture",
      children: "Hyperledger Fabric Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hyperledger Fabric is a modular, permissioned blockchain framework hosted by the Linux Foundation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph FabricNetwork[\"Hyperledger Fabric Network\"]\n        subgraph Orgs[\"Organizations\"]\n            Org1[\"Org1: Supplier\"]\n            Org2[\"Org2: Manufacturer\"]\n            Org3[\"Org3: Bank\"]\n        end\n        \n        subgraph Peers[\"Peers (Endorsing Peers)\"]\n            P1[\"Peer 1<br/>Org1\"]\n            P2[\"Peer 2<br/>Org2\"]\n            P3[\"Peer 3<br/>Org3\"]\n        end\n        \n        subgraph Orderers[\"Ordering Service\"]\n            O1[\"Orderer 0\"]\n            O2[\"Orderer 1\"]\n            O3[\"Orderer 2\"]\n        end\n        \n        subgraph CAs[\"Certificate Authorities\"]\n            CA1[\"CA Org1\"]\n            CA2[\"CA Org2\"]\n            CA3[\"CA Org3\"]\n        end\n        \n        subgraph Channels[\"Channels\"]\n            Ch1[\"Channel: Pricing<br/>Org1 + Org2\"]\n            Ch2[\"Channel: Logistics<br/>All Orgs\"]\n        end\n        \n        Org1 --> P1\n        Org2 --> P2\n        Org3 --> P3\n        Org1 --> CA1\n        Org2 --> CA2\n        Org3 --> CA3\n        P1 --> Ch1\n        P2 --> Ch1\n        P1 --> Ch2\n        P2 --> Ch2\n        P3 --> Ch2\n        P1 --> Orderers\n        P2 --> Orderers\n        P3 --> Orderers\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core components:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Peer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ledger & Chaincode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintains ledger, executes chaincode, stores world state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orderer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orders transactions into blocks, enforces channel config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CA (Certificate Authority)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issues X.509 certificates to members"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MSP (Membership Service Provider)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps certificates to roles and permissions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Channel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolated subnet with its own ledger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chaincode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business logic (Go, Java, Node.js)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "identity-and-msp-membership-service-provider",
      children: "Identity and MSP (Membership Service Provider)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every participant in a Fabric network has a known identity (X.509 certificate). The MSP defines which identities are trusted:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph MSP[\"Membership Service Provider\"]\n        Cert[\"X.509 Certificate<br/>Issued by CA\"]\n        Roles[\"Role Mapping<br/>Admin, Client, Peer\"]\n        Policy[\"Access Policy<br/>Who can read/write\"]\n    end\n    \n    Cert --> Roles\n    Roles --> Policy\n    Policy -->|\"Grants permissions\"| Chaincode\n    Policy -->|\"Allows channel join\"| Channels\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MSP levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Channel MSP:"
        }), " Defines which organizations are channel members."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local MSP (Peer/Orderer):"
        }), " Defines which admins can manage the node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Admin MSP:"
        }), " Privileged users who can install chaincode, create channels."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "channels",
      children: "Channels"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Channels are private sub-networks where only authorized members can interact. Each channel has its own:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ledger:"
        }), " Isolated from other channels"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chaincode:"
        }), " Can have different business logic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Members:"
        }), " Only authorized organizations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy:"
        }), " Separate endorsement and access policies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph ChannelA[\"Channel: Supplier-Manufacturer\"]\n        LedgerA[\"Ledger A<br/>(pricing, contracts)\"]\n        Org1[\"Org1: Supplier\"]\n        Org2[\"Org2: Manufacturer\"]\n    end\n    \n    subgraph ChannelB[\"Channel: All Partners\"]\n        LedgerB[\"Ledger B<br/>(shipment tracking)\"]\n        Member1[\"Org1: Supplier\"]\n        Member2[\"Org2: Manufacturer\"]\n        Member3[\"Org3: Bank\"]\n    end\n    \n    ChannelA -->|\"Isolated ledger\"| LedgerA\n    ChannelB -->|\"Separate ledger\"| LedgerB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "private-data-collections-pdc",
      children: "Private Data Collections (PDC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Even within a channel, you can restrict data to specific members using Private Data Collections:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PrivateDataCollection {\n    name: string;           // Collection name\n    policy: string;         // Who can access (e.g., \"OR('Org1.member', 'Org2.member')\")\n    requiredPeerCount: number;  // How many peers must endorse\n    maxPeerCount: number;       // Maximum peers for dissemination\n    blockToLive: number;        // Blocks before purging from private state\n    memberOnlyRead: boolean;    // Only collection members can read\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This enables scenarios where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two suppliers share pricing data that the manufacturer cannot see"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A bank sees transaction values but not the goods details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regulators have special read-only access"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chaincode-lifecycle",
      children: "Chaincode Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fabric v2.x introduced a decentralized chaincode lifecycle:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Package<br/>Chaincode] --> B[Install<br/>on Peers]\n    B --> C[Approve<br/>by Organizations]\n    C --> D[Commit<br/>to Channel]\n    D --> E[Invoke<br/>Chaincode]\n    \n    subgraph Phases[\"Chaincode Lifecycle\"]\n        Package[\"Package chaincode into tar.gz\"]\n        Install[\"Each org installs on their peers\"]\n        Approve[\"Each org approves definition<br/>(endorsement policy, collection config)\"]\n        Commit[\"Sufficient approvals = committed\"]\n        Invoke[\"Call chaincode functions\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package:"
        }), " Developer packages chaincode (Go, Node.js, Java) into a deployable tar.gz."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Install:"
        }), " Each organization installs the package on their endorsing peers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approve:"
        }), " Each organization's admin approves the chaincode definition (including endorsement policy)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit:"
        }), " When enough organizations approve (per channel policy), the chaincode is committed and activated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invoke:"
        }), " Client applications call chaincode functions through the Gateway SDK."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "endorsement-policies",
      children: "Endorsement Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Endorsement policies specify which peers must validate a transaction:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Examples:\n# Any single org\nAND('Org1.member')\n\n# Both orgs must endorse\nAND('Org1.member', 'Org2.member')\n\n# Either org\nOR('Org1.member', 'Org2.member')\n\n# Majority of channel orgs\nOUTOF(2, 'Org1.member', 'Org2.member', 'Org3.member')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transaction flow with endorsement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends transaction proposal to endorsing peers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each peer simulates the chaincode and returns a read-write set + endorsement signature."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client collects endorsements and submits to the orderer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Orderer creates a block and delivers to all peers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each peer validates endorsements and applies the transaction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Client as Client App\n    participant P1 as Endorsing Peer 1\n    participant P2 as Endorsing Peer 2\n    participant Orderer as Orderer\n    participant Other as Other Peers\n    \n    Client->>P1: Propose transaction\n    Client->>P2: Propose transaction\n    P1->>P1: Simulate chaincode\n    P2->>P2: Simulate chaincode\n    P1-->>Client: Endorsement (R/W set + sig)\n    P2-->>Client: Endorsement (R/W set + sig)\n    Client->>Client: Check endorsement policy satisfied\n    \n    Client->>Orderer: Submit endorsed transaction\n    Orderer->>Orderer: Create block\n    Orderer->>P1: Deliver block\n    Orderer->>P2: Deliver block\n    Orderer->>Other: Deliver block\n    P1->>P1: Validate & commit\n    P2->>P2: Validate & commit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chaincode-example-nodejs",
      children: "Chaincode Example (Node.js)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// asset-transfer/chaincode/src/index.ts\nimport { Context, Contract } from \"fabric-contract-api\";\n\ninterface Asset {\n    ID: string;\n    Color: string;\n    Size: number;\n    Owner: string;\n    AppraisedValue: number;\n}\n\nexport class AssetTransfer extends Contract {\n    public async InitLedger(ctx: Context): Promise<void> {\n        const assets: Asset[] = [\n            { ID: \"asset1\", Color: \"blue\", Size: 5, Owner: \"Tom\", AppraisedValue: 100 },\n        ];\n        for (const asset of assets) {\n            await ctx.stub.putState(\n                asset.ID,\n                Buffer.from(JSON.stringify(asset))\n            );\n        }\n    }\n\n    public async CreateAsset(\n        ctx: Context,\n        id: string,\n        color: string,\n        size: number,\n        owner: string,\n        value: number\n    ): Promise<void> {\n        const exists = await this.AssetExists(ctx, id);\n        if (exists) {\n            throw new Error(`Asset ${id} already exists`);\n        }\n        const asset: Asset = { ID: id, Color: color, Size: size, Owner: owner, AppraisedValue: value };\n        await ctx.stub.putState(id, Buffer.from(JSON.stringify(asset)));\n    }\n\n    public async ReadAsset(ctx: Context, id: string): Promise<string> {\n        const assetBytes = await ctx.stub.getState(id);\n        if (!assetBytes || assetBytes.length === 0) {\n            throw new Error(`Asset ${id} does not exist`);\n        }\n        return assetBytes.toString();\n    }\n\n    public async TransferAsset(ctx: Context, id: string, newOwner: string): Promise<void> {\n        const assetBytes = await ctx.stub.getState(id);\n        if (!assetBytes || assetBytes.length === 0) {\n            throw new Error(`Asset ${id} does not exist`);\n        }\n        const asset = JSON.parse(assetBytes.toString()) as Asset;\n        asset.Owner = newOwner;\n        await ctx.stub.putState(id, Buffer.from(JSON.stringify(asset)));\n    }\n\n    public async GetAssetsByRange(ctx: Context, startKey: string, endKey: string): Promise<string> {\n        const iterator = await ctx.stub.getStateByRange(startKey, endKey);\n        const results: Asset[] = [];\n        while (true) {\n            const result = await iterator.next();\n            if (result.value) {\n                results.push(JSON.parse(result.value.value.toString()));\n            }\n            if (result.done) {\n                await iterator.close();\n                break;\n            }\n        }\n        return JSON.stringify(results);\n    }\n\n    private async AssetExists(ctx: Context, id: string): Promise<boolean> {\n        const assetBytes = await ctx.stub.getState(id);\n        return assetBytes && assetBytes.length > 0;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "consensus-in-enterprise-raft",
      children: "Consensus in Enterprise (Raft)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enterprise consensus is typically ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Crash Fault Tolerant (CFT)"
      }), " rather than Byzantine Fault Tolerant:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant C as Client\n    participant O1 as Orderer 1 (Leader)\n    participant O2 as Orderer 2\n    participant O3 as Orderer 3\n    \n    C->>O1: Submit transaction\n    O1->>O1: Create block proposal\n    O1->>O2: Propose block\n    O1->>O3: Propose block\n    O2-->>O1: Acknowledge\n    O3-->>O1: Acknowledge\n    O1->>O1: Majority = block committed\n    O1->>C: Block delivered\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Raft properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Crash tolerance:"
        }), " Survives node crashes (not Byzantine attacks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leader-based:"
        }), " One leader, multiple followers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fast finality:"
        }), " Blocks commit immediately"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Not for public chains:"
        }), " Requires trusted participants"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enterprise-use-cases",
      children: "Enterprise Use Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Industry"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Blockchain Helps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Supply Chain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track goods from source to store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable provenance, automated customs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IBM Food Trust"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Healthcare"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patient records across providers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interoperable, patient-consented access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediLedger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade finance, letter of credit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant settlement, shared truth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "we.trade"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insurance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Claims processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated verification, fraud reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B3i"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Government"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Land registry, identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tamper-proof records, reduced corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sweden Lantmäteriet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pharma"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drug supply chain security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counterfeit detection (DSCSA compliance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediLedger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Energy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid management, carbon credits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent trading, certificate tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Energy Web Foundation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maritime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shipping documents, bills of lading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digital documents, reduced delays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TradeLens"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "public-vs-enterprise-comparison",
      children: "Public vs Enterprise Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Public Blockchain (Ethereum)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enterprise (Hyperledger Fabric)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permissionless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permissioned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pseudonymous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X.509 certificates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PoW/PoS (energy intensive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raft/Kafka (energy efficient)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-30 TPS (Ethereum L1), 2000+ (L2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000-10000+ TPS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic (Minutes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant (Seconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All transactions visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Channels + PDC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smart Contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solidity (limited languages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go, Java, Node.js"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Community / Foundation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consortium of organizations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gas fees (volatile)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed infrastructure cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Upgrades"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard forks (contentious)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus-driven upgrades"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State (expensive) + events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "World state (CouchDB/LevelDB)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-each",
      children: "When to Use Each"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use public blockchain when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need permissionless participation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full transparency is desired (not a bug)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Censorship resistance is critical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need global, borderless value transfer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use enterprise blockchain when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Participants are known (consortium)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transaction data must remain private"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regulatory compliance requires identity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High throughput is needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Instant finality is required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-confidential-supply-chain-channel",
      children: "Example 1: Confidential Supply Chain Channel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Company A (Supplier), Company B (Manufacturer), and Bank C (Financier) are on a Fabric network."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A and B create a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Private Channel"
        }), " to discuss pricing. Only A and B see these transactions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A, B, and C are on a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "General Channel"
        }), " for tracking the movement of goods. All three see these logs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Within the General Channel, A uses a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Private Data Collection"
        }), " to share inspection documents only with B."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This demonstrates ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Granular Privacy"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-asset-transfer-chaincode-flow",
      children: "Example 2: Asset Transfer Chaincode Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Client application\nimport { Gateway, Wallets } from \"fabric-network\";\n\nasync function transferAsset() {\n    const wallet = await Wallets.newFileSystemWallet(\"./wallet\");\n    const gateway = new Gateway();\n    \n    await gateway.connect(connectionProfile, {\n        wallet,\n        identity: \"user1\",\n        discovery: { enabled: true, asLocalhost: true },\n    });\n\n    const network = await gateway.getNetwork(\"mychannel\");\n    const contract = network.getContract(\"asset-transfer\");\n\n    // Submit transaction\n    const result = await contract.submitTransaction(\n        \"TransferAsset\",\n        \"asset1\",\n        \"newOwner\"\n    );\n    console.log(\"Transaction submitted:\", result.toString());\n\n    // Evaluate (read-only query)\n    const asset = await contract.evaluateTransaction(\"ReadAsset\", \"asset1\");\n    console.log(\"Asset state:\", JSON.parse(asset.toString()));\n\n    await gateway.disconnect();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-endorsement-policy-configuration",
      children: "Example 3: Endorsement Policy Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Collection config for private data\nconst collectionConfig = [\n    {\n        name: \"supplierPricing\",\n        policy: \"OR('SupplierMSP.member', 'ManufacturerMSP.member')\",\n        requiredPeerCount: 1,\n        maxPeerCount: 2,\n        blockToLive: 0,  // Don't purge\n        memberOnlyRead: true,\n        memberOnlyWrite: true,\n    },\n    {\n        name: \"inspectionDocs\",\n        policy: \"OR('SupplierMSP.member')\",\n        requiredPeerCount: 0,\n        maxPeerCount: 1,\n        blockToLive: 100,  // Purge after 100 blocks\n        memberOnlyRead: true,\n        memberOnlyWrite: true,\n    },\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Enterprise blockchains trade open, permissionless participation for privacy, throughput, and finality — making them suitable for regulated industries but fundamentally different from public chains."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When designing a Hyperledger Fabric network, structure channels around natural business confidentiality boundaries. Every channel is a separate ledger — use them to enforce data isolation between competitors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Permissioned blockchains reduce but do not eliminate the need for trust. The ordering service is a trusted component — if orderers collude, they can censor or reorder transactions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Public Blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open participation, anonymous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No identity, PoW/PoS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptocurrency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consortium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permissioned, multi-org governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known identities, shared control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single organization control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control, limited trust benefit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal audit trials"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperledger Fabric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular enterprise framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pluggable consensus, channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-party business networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private ledger subset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data visible only to authorized members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidential pricing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private Data Collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data restriction within channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Even channel members restricted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selective disclosure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Membership Service Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X.509 certificate-based identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All network interactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chaincode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go/Java/Node.js"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business logic execution"
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
              children: "Fabric Nodes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer, Orderer, CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each has distinct role"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MSP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Membership Service Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X.509 certificate-based identity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consensus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raft (CFT), Kafka (old), PBFT (planned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No mining — fast finality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chaincode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go, Java, Node.js"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contract in familiar languages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "World State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CouchDB or LevelDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current state of all assets (key-value)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Channel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private subnet with own ledger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data isolation between groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private Data Collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Even finer-grained privacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Endorsement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy-based validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible trust model"
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
            children: "Channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private trade data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Channel topology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKI integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidential contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-knowledge on Fabric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chaincode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EVM equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Endorsement Policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-org validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Raft Consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orderer fault tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFT optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary purpose of a \"Channel\" in Hyperledger Fabric?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To connect Fabric to the internet"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To create a private sub-network where only authorized members see transactions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To mine new tokens"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To store chaincode in a database"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) To create a private sub-network where only authorized members see transactions.** Channels provide data isolation — members on different channels cannot see each other's transactions, enabling competing organizations to share only necessary data.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does Hyperledger Fabric's consensus differ from Bitcoin's PoW?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It uses more energy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It is faster because it assumes a known, trusted participant set with crash-fault or Byzantine tolerance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It requires mining hardware"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It is less secure"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) It is faster because it assumes a known, trusted participant set with crash-fault or Byzantine tolerance.** Fabric's ordering service establishes transaction order without energy-intensive competition, achieving near-instant finality suitable for business throughput needs.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why would a pharmaceutical supply chain choose Hyperledger Fabric over Ethereum?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Ethereum is too slow for their needs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Fabric provides privacy (competitors see different data), identity management (X.509), and higher throughput"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Fabric is cheaper to develop on"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Ethereum cannot track physical assets"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Fabric provides privacy (competitors see different data), identity management (X.509), and higher throughput.** Supply chains need confidential pricing between partners while maintaining an audit trail — Fabric's channel architecture and MSP identity model are designed for this.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the role of the Endorsing Peer in Hyperledger Fabric?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To store the blockchain ledger"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To simulate and endorse transactions before they are ordered"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To mine new blocks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To issue identities"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) To simulate and endorse transactions before they are ordered.** Endorsing peers receive transaction proposals, simulate chaincode execution, and return read-write sets with their endorsement signature. The client must collect enough endorsements to satisfy the endorsement policy before submitting to the orderer.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is a Private Data Collection (PDC) in Hyperledger Fabric?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) A way to create a new channel"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A method for restricting data visibility to specific members within a channel"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) A database for storing private keys"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) A collection of private blockchains"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) A method for restricting data visibility to specific members within a channel.** PDCs allow certain data to be shared only with specific organization peers, even within the same channel. Data is stored in a private state database and is not visible to all channel members.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-endorsement-policy-simulator",
      children: "TypeScript: Endorsement Policy Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface EndorsementProposal {\n  chaincodeId: string; args: string[]; clientId: string;\n}\n\ninterface Endorsement {\n  peerId: string; orgId: string; signature: string; approved: boolean;\n}\n\nclass EndorsementPolicySimulator {\n  orgs: string[];\n  peers: Map<string, string> = new Map();\n\n  constructor(orgs: string[]) { this.orgs = orgs; }\n\n  addPeer(peerId: string, orgId: string): void { this.peers.set(peerId, orgId); }\n\n  simulate(endorsements: Endorsement[], policy: string): boolean {\n    if (policy === \"ANY\") return endorsements.some(e => e.approved);\n    if (policy === \"ALL\") return endorsements.every(e => e.approved);\n    if (policy.startsWith(\"MAJORITY\")) {\n      const total = this.orgs.length;\n      const approved = new Set(endorsements.filter(e => e.approved).map(e => this.peers.get(e.peerId)));\n      return approved.size > total / 2;\n    }\n    if (policy.startsWith(\"OUTOF\")) {\n      const match = policy.match(/OUTOF\\((\\d+),(.+)\\)/);\n      if (!match) return false;\n      const required = parseInt(match[1]);\n      const orgs = match[2].split(\",\").map(s => s.trim().replace(/'/g, \"\"));\n      const approvedOrgs = new Set(endorsements.filter(e => e.approved).map(e => this.peers.get(e.peerId)));\n      return orgs.filter(o => approvedOrgs.has(o)).length >= required;\n    }\n    return false;\n  }\n\n  validateProposal(proposal: EndorsementProposal): { valid: boolean; reason: string } {\n    if (!proposal.chaincodeId) return { valid: false, reason: \"No chaincode ID\" };\n    if (proposal.args.length > 100) return { valid: false, reason: \"Too many args\" };\n    return { valid: true, reason: \"\" };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-channel-configuration-builder",
      children: "TypeScript: Channel Configuration Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ChannelConfig {\n  name: string; orgs: string[]; policies: Record<string, string>;\n  anchorPeers: string[]; ordererEndpoints: string[];\n}\n\nclass ChannelConfigBuilder {\n  private config: ChannelConfig;\n\n  constructor(name: string) {\n    this.config = {\n      name, orgs: [], policies: {}, anchorPeers: [], ordererEndpoints: [],\n    };\n  }\n\n  addOrg(orgId: string, anchorPeer: string): this {\n    if (!this.config.orgs.includes(orgId)) {\n      this.config.orgs.push(orgId);\n      this.config.anchorPeers.push(anchorPeer);\n    }\n    return this;\n  }\n\n  setPolicy(name: string, rule: string): this {\n    this.config.policies[name] = rule;\n    return this;\n  }\n\n  addOrderer(endpoint: string): this {\n    if (!this.config.ordererEndpoints.includes(endpoint)) {\n      this.config.ordererEndpoints.push(endpoint);\n    }\n    return this;\n  }\n\n  build(): ChannelConfig {\n    if (this.config.orgs.length < 2) throw new Error(\"Channel needs at least 2 orgs\");\n    return { ...this.config };\n  }\n\n  static consortiumTemplate(orgIds: string[]): ChannelConfig {\n    const builder = new ChannelConfigBuilder(\"consortium-channel\");\n    for (const org of orgIds) builder.addOrg(org, `peer0.${org}.example.com`);\n    builder.setPolicy(\"Admins\", `OR(${orgIds.map(o => `'${o}.admin'`).join(\",\")})`);\n    builder.setPolicy(\"Readers\", `OR(${orgIds.map(o => `'${o}.member'`).join(\",\")})`);\n    builder.setPolicy(\"Writers\", `OR(${orgIds.map(o => `'${o}.member'`).join(\",\")})`);\n    builder.setPolicy(\"Endorsement\", `OUTOF(${Math.ceil(orgIds.length / 2) + 1},${orgIds.map(o => `'${o}.member'`).join(\",\")})`);\n    return builder.build();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-private-data-collection-config-generator",
      children: "TypeScript: Private Data Collection Config Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PDCConfig {\n  name: string; policy: string; requiredPeerCount: number;\n  maxPeerCount: number; blockToLive: number; memberOnlyRead: boolean;\n}\n\nclass PDCConfigGenerator {\n  static bilateral(name: string, org1: string, org2: string): PDCConfig {\n    return {\n      name, policy: `OR('${org1}.member','${org2}.member')`,\n      requiredPeerCount: 0, maxPeerCount: 3, blockToLive: 0, memberOnlyRead: true,\n    };\n  }\n\n  static orgOnly(name: string, org: string): PDCConfig {\n    return {\n      name, policy: `OR('${org}.member')`,\n      requiredPeerCount: 0, maxPeerCount: 1, blockToLive: 100, memberOnlyRead: true,\n    };\n  }\n\n  static regulatory(name: string, orgs: string[], regulatorOrg: string): PDCConfig {\n    const allOrgs = [...orgs, regulatorOrg].map(o => `'${o}.member'`).join(\",\");\n    return {\n      name, policy: `OR(${allOrgs})`,\n      requiredPeerCount: 1, maxPeerCount: orgs.length, blockToLive: 0, memberOnlyRead: true,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Endorsement Policy Simulator ===\ntype Principal = { org: string; role: string };\ntype EndorsementPolicy = { rule: 'AND' | 'OR' | 'NOutOf'; principals: Principal[]; threshold?: number };\n\nclass EndorsementSimulator {\n    evaluate(policy: EndorsementPolicy, endorsers: { org: string; role: string }[]): boolean {\n        const match = (p: Principal) => endorsers.some(e => e.org === p.org && e.role === p.role);\n        switch (policy.rule) {\n            case 'AND': return policy.principals.every(match);\n            case 'OR': return policy.principals.some(match);\n            case 'NOutOf': {\n                const count = policy.principals.filter(match).length;\n                return count >= (policy.threshold ?? 1);\n            }\n        }\n    }\n    static parsePolicyString(s: string): EndorsementPolicy {\n        if (s.startsWith('AND(')) return { rule: 'AND', principals: s.slice(4, -1).split(',').map(p => { const [org, role] = p.trim().split('.'); return { org, role }; }) };\n        if (s.startsWith('OR(')) return { rule: 'OR', principals: s.slice(3, -1).split(',').map(p => { const [org, role] = p.trim().split('.'); return { org, role }; }) };\n        return { rule: 'OR', principals: [{ org: '', role: '' }] };\n    }\n}\n\n// === Channel Configuration Generator ===\ninterface ChannelConfig { name: string; orgs: string[]; policies: { endorsement: string }; }\n\nclass ChannelConfigGen {\n    static generate(name: string, orgs: string[], policy: string): ChannelConfig {\n        return { name, orgs, policies: { endorsement: policy } };\n    }\n    static crossChannel(invokingOrg: string, channel1: string, channel2: string): { success: boolean; error?: string } {\n        const orgs1 = ['Org1', 'Org2'], orgs2 = ['Org2', 'Org3'];\n        if (!orgs1.includes(invokingOrg) && !orgs2.includes(invokingOrg)) return { success: false, error: 'org not on any channel' };\n        if (!orgs1.some(o => orgs2.includes(o))) return { success: false, error: 'no common org to bridge channels' };\n        return { success: true };\n    }\n}\n\n// === Chaincode Lifecycle Manager ===\nclass ChaincodeLifecycle {\n    private packages = new Map<string, { version: string; sequence: number; endorsed: Set<string>; committed: boolean }>();\n    \n    packageCC(name: string, version: string): string {\n        const id = `${name}@${version}`;\n        this.packages.set(id, { version, sequence: 1, endorsed: new Set(), committed: false });\n        return id;\n    }\n    approveCC(ccId: string, org: string): boolean {\n        const cc = this.packages.get(ccId);\n        if (!cc) return false;\n        cc.endorsed.add(org);\n        return true;\n    }\n    commitCC(ccId: string, requiredOrgs: string[]): boolean {\n        const cc = this.packages.get(ccId);\n        if (!cc) return false;\n        const approved = requiredOrgs.every(o => cc.endorsed.has(o));\n        if (approved) cc.committed = true;\n        return approved;\n    }\n    queryCC(ccId: string): { committed: boolean; approvals: number } | null {\n        const cc = this.packages.get(ccId);\n        return cc ? { committed: cc.committed, approvals: cc.endorsed.size } : null;\n    }\n}\n\n// === MSP (Membership Service Provider) ===\ninterface Identity { id: string; org: string; role: string; certificate: string; }\nclass MSPManager {\n    private identities = new Map<string, Identity>();\n    private revocations = new Set<string>();\n\n    register(id: string, org: string, role: string, cert: string): Identity {\n        const identity: Identity = { id, org, role, certificate: cert };\n        this.identities.set(id, identity);\n        return identity;\n    }\n    validate(id: string): boolean {\n        return this.identities.has(id) && !this.revocations.has(id);\n    }\n    revoke(id: string): void { this.revocations.add(id); }\n    getOrg(id: string): string | undefined { return this.identities.get(id)?.org; }\n}\n\n// === Private Data Collection ===\nclass PrivateDataCollection {\n    private data = new Map<string, Map<string, string>>();\n    \n    store(collection: string, key: string, value: string, orgs: string[]): void {\n        if (!this.data.has(collection)) this.data.set(collection, new Map());\n        this.data.get(collection)!.set(key, value);\n    }\n    query(collection: string, key: string, org: string, allowedOrgs: string[]): string | null {\n        if (!allowedOrgs.includes(org)) return null;\n        return this.data.get(collection)?.get(key) ?? null;\n    }\n}\n\n// === Orderer Raft Simulator ===\nclass RaftOrderer {\n    private leader: string;\n    private term = 0;\n    private logs: string[] = [];\n\n    constructor(private nodes: string[]) { this.leader = nodes[0]; }\n    \n    requestOrder(tx: string, from: string): { block: number } | null {\n        if (from !== this.leader) return null;\n        this.logs.push(tx);\n        if (this.logs.length % 3 === 0) return { block: this.logs.length / 3 };\n        return null;\n    }\n    getLogs(): string[] { return [...this.logs]; }\n    electLeader(candidate: string): void {\n        this.leader = candidate;\n        this.term++;\n    }\n}\n\n// === Demo ===\nconst endorser = new EndorsementSimulator();\nconst policy = EndorsementSimulator.parsePolicyString(\"OR('Org1.member','Org2.member')\");\nconsole.log(`Endorsement policy OR(Org1,Org2):`);\nconsole.log(`  Org1 endorses: ${endorser.evaluate(policy, [{ org: 'Org1', role: 'member' }])}`);\nconsole.log(`  Org3 endorses: ${endorser.evaluate(policy, [{ org: 'Org3', role: 'member' }])}`);\n\nconst lifecycle = new ChaincodeLifecycle();\nconst cc = lifecycle.packageCC('mychaincode', '1.0');\nlifecycle.approveCC(cc, 'Org1'); lifecycle.approveCC(cc, 'Org2');\nconst committed = lifecycle.commitCC(cc, ['Org1', 'Org2']);\nconsole.log(`Chaincode committed: ${committed}`);\n\nconst msp = new MSPManager();\nmsp.register('alice', 'Org1', 'member', 'cert1');\nconsole.log(`Alice valid: ${msp.validate('alice')}`);\nmsp.revoke('alice');\nconsole.log(`Alice after revoke: ${msp.validate('alice')}`);\n\nconst pdc = new PrivateDataCollection();\npdc.store('collection1', 'key1', 'sensitive', ['Org1', 'Org2']);\nconsole.log(`Org1 can query: ${pdc.query('collection1', 'key1', 'Org1', ['Org1', 'Org2'])}`);\nconsole.log(`Org3 can query: ${pdc.query('collection1', 'key1', 'Org3', ['Org1', 'Org2'])}`);\n\nconst raft = new RaftOrderer(['n0', 'n1', 'n2']);\nconsole.log(`Order tx: ${raft.requestOrder('tx1', 'n0') !== null ? 'ordered' : 'rejected'}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// enterprise\n// distributed-ledger-crypto implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'enterprise', data: { topic: 'distributed-ledger-crypto' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enterprise blockchains prioritize privacy, performance, and controlled access over openness."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hyperledger Fabric uses a modular architecture with distinct node roles (peer, orderer, CA)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identity is a first-class citizen in permissioned ledgers (X.509 certificates via MSP)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Channels allow for confidential communication between subsets of network participants."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Private Data Collections provide even finer-grained data isolation within channels."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Endorsement policies define flexible trust models per chaincode."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raft consensus provides crash fault tolerance with instant finality."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chaincode can be written in standard programming languages (Go, Java, Node.js)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enterprise blockchains are not replacements for public chains — they serve different needs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design your channel topology based on natural business confidentiality boundaries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Private Data Collections for data that needs even finer granularity than channels provide."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose endorsement policies that balance security (more endorsers) with performance (fewer endorsers)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use CouchDB for the world state if you need rich queries (vs LevelDB for simple key-value)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For production, run at least 3-5 orderer nodes for high availability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always use a Hardware Security Module (HSM) for CA private keys in production."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why would a company use Hyperledger Fabric instead of Ethereum?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the role of an \"Orderer\" in Fabric?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a \"Permissioned\" blockchain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do \"Channels\" provide privacy?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a channel and a Private Data Collection?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a blockchain-based system for tracking pharmaceutical drugs from factory to pharmacy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the \"Cost of Operation\" for an enterprise running its own nodes versus using a public network."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how a MSP (Membership Service Provider) works in a consortium."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design an endorsement policy for a 5-organization consortium where at least 3 organizations must endorse, including at least 1 of 2 competing organizations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the \"Interoperability\" challenge: How can a private Fabric network communicate with a public Ethereum network to settle payments?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research the BFT alternatives for Hyperledger Fabric (like SmartBFT). Explain why BFT might be necessary for some enterprise consortia and how it differs from the default Raft consensus."
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