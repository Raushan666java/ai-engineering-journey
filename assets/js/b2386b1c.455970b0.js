"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[86350],{

/***/ 47047
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_blockchain_07_dapps_md_b23_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-blockchain-07-dapps-md-b23.json
const site_docs_courses_blockchain_07_dapps_md_b23_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/blockchain/07-dapps","title":"Chapter 7: Decentralized Applications (dApps)","description":"Previous Smart Contract Development | Next Decentralized Finance (DeFi)","source":"@site/docs/courses/blockchain/07-dapps.md","sourceDirName":"courses/blockchain","slug":"/blockchain/07-dapps","permalink":"/ai-engineering-journey/blockchain/07-dapps","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-dapps","slug":"/blockchain/07-dapps","title":"Chapter 7: Decentralized Applications (dApps)","sidebar_label":"Chapter 7: Decentralized Applications (dApps)","sidebar_position":7},"sidebar":"course-blockchain","previous":{"title":"Chapter 6: Smart Contract Development","permalink":"/ai-engineering-journey/blockchain/06-solidity"},"next":{"title":"Chapter 8: Decentralized Finance (DeFi)","permalink":"/ai-engineering-journey/blockchain/08-defi"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/blockchain/07-dapps.md


const frontMatter = {
	id: '07-dapps',
	slug: '/blockchain/07-dapps',
	title: 'Chapter 7: Decentralized Applications (dApps)',
	sidebar_label: 'Chapter 7: Decentralized Applications (dApps)',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Decentralized Applications (dApps)';

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
  "value": "The dApp Stack",
  "id": "the-dapp-stack",
  "level": 3
}, {
  "value": "MetaMask Interaction Flow",
  "id": "metamask-interaction-flow",
  "level": 3
}, {
  "value": "Web3 Libraries: ethers.js",
  "id": "web3-libraries-ethersjs",
  "level": 3
}, {
  "value": "DApp vs Traditional App Comparison",
  "id": "dapp-vs-traditional-app-comparison",
  "level": 3
}, {
  "value": "Event-Driven Architecture",
  "id": "event-driven-architecture",
  "level": 3
}, {
  "value": "IPFS (InterPlanetary File System)",
  "id": "ipfs-interplanetary-file-system",
  "level": 3
}, {
  "value": "Provider Comparison",
  "id": "provider-comparison",
  "level": 3
}, {
  "value": "ENS (Ethereum Name Service)",
  "id": "ens-ethereum-name-service",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Complete dApp Frontend (React + ethers.js)",
  "id": "example-1-complete-dapp-frontend-react--ethersjs",
  "level": 3
}, {
  "value": "Example 2: Event Listener for Real-Time Updates",
  "id": "example-2-event-listener-for-real-time-updates",
  "level": 3
}, {
  "value": "Example 3: IPFS-CID-based NFT Store",
  "id": "example-3-ipfs-cid-based-nft-store",
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
  "value": "TypeScript: Multi-Sig Wallet Logic",
  "id": "typescript-multi-sig-wallet-logic",
  "level": 3
}, {
  "value": "TypeScript: Event Listener Framework",
  "id": "typescript-event-listener-framework",
  "level": 3
}, {
  "value": "TypeScript: Smart Contract Interaction Wrapper",
  "id": "typescript-smart-contract-interaction-wrapper",
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
        id: "chapter-7-decentralized-applications-dapps",
        children: "Chapter 7: Decentralized Applications (dApps)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/06-solidity",
          children: "Chapter 6: Smart Contract Development"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/08-defi",
          children: "Chapter 8: Decentralized Finance (DeFi)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the architecture of a Decentralized Application (dApp)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the role of wallets (MetaMask), providers (Infura), and web3 libraries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a frontend that interacts with smart contracts using ethers.js"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand event-driven architecture and how dApps listen to on-chain events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement IPFS for decentralized file and metadata storage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate the dApp architecture from traditional client-server models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the MetaMask interaction flow (connect, sign, send)"
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
        href: "../../assets/images/lessons/blockchain/07-dapps/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/07-dapps/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/blockchain/07-dapps/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/07-dapps/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/blockchain/07-dapps/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/blockchain/07-dapps/visual-explanation.png",
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
            children: "dApp Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frontend + Wallet + Provider + Blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wallet replaces server-side auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Providers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infura, Alchemy connect frontend to blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No need to run your own node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web3 Libraries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ethers.js / web3.js for contract interaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read is free, write costs gas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content-addressed decentralized storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Files accessed by hash, not location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contract events enable reactive UIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listen for Transfer, Swap, etc."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MetaMask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser extension wallet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injects window.ethereum provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wallet address = user identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No passwords, no central database"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[dApp Architecture] --> B[Wallet Layer]\n    B --> C[Provider Layer]\n    C --> D[Web3 Libraries]\n    D --> E[Smart Contracts]\n    E --> F[Event-Driven Architecture]\n    F --> G[IPFS Storage]\n    G --> H[dApp vs Web2 Comparison]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-dapp-stack",
      children: "The dApp Stack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A traditional app uses: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Frontend ? API ? Centralized Database"
      }), ".\nA dApp uses: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Frontend ? Provider/Wallet ? Blockchain (Smart Contracts)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Web2[\"Traditional Web2 App\"]\n        W2_FE[\"Frontend (React/Vue)\"]\n        W2_API[\"REST/GraphQL API\"]\n        W2_DB[\"Centralized Database\"]\n        W2_Auth[\"Auth Server<br/>(passwords, sessions)\"]\n    end\n    subgraph Web3[\"dApp (Web3)\"]\n        D_FE[\"Frontend (React/Vue)\"]\n        D_Wallet[\"Wallet (MetaMask)\"]\n        D_Provider[\"Provider (Infura/Alchemy)\"]\n        D_Chain[\"Blockchain (Smart Contracts)\"]\n        D_Storage[\"IPFS (Decentralized Storage)\"]\n    end\n    \n    W2_FE --> W2_API\n    W2_API --> W2_DB\n    W2_API --> W2_Auth\n    D_FE --> D_Wallet\n    D_Wallet --> D_Provider\n    D_Provider --> D_Chain\n    D_FE --> D_Storage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontend:"
        }), " React, Vue, or Angular — same as Web2."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wallet (e.g., MetaMask):"
        }), " Manages private keys and signs transactions. Injects ", (0,jsx_runtime.jsx)(_components.code, {
          children: "window.ethereum"
        }), " into the browser."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provider (e.g., Infura, Alchemy):"
        }), " JSON-RPC interface to blockchain nodes — enables reading data and sending transactions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Smart Contracts:"
        }), " On-chain logic deployed on the blockchain."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decentralized Storage (IPFS):"
        }), " Content-addressed P2P storage for files that are too expensive to store on-chain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metamask-interaction-flow",
      children: "MetaMask Interaction Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant User as User\n    participant FE as dApp Frontend\n    participant MM as MetaMask\n    participant Provider as Provider (Infura)\n    participant Chain as Blockchain\n    \n    User->>FE: \"Connect Wallet\"\n    FE->>MM: \"eth_requestAccounts\"\n    MM->>User: \"Select account\"\n    User->>MM: \"Approve\"\n    MM->>FE: \"Return account address\"\n    Note over FE: Account connected\n    \n    User->>FE: \"Send 1 ETH\"\n    FE->>FE: Create transaction object\n    FE->>MM: \"eth_sendTransaction\"\n    MM->>User: \"Review & Sign\"\n    User->>MM: \"Sign\"\n    MM->>Provider: \"Send signed tx\"\n    Provider->>Chain: \"Broadcast to mempool\"\n    Chain->>Chain: \"Miner includes in block\"\n    Chain->>FE: \"Transaction receipt\"\n    FE->>User: \"Display confirmation\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "web3-libraries-ethersjs",
      children: "Web3 Libraries: ethers.js"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ethers.js"
      }), " (preferred over ", (0,jsx_runtime.jsx)(_components.code, {
        children: "web3.js"
      }), " for its smaller size and better TypeScript support) provides:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provider:"
        }), " Connection to the blockchain (read operations)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signer:"
        }), " Represents an account that can sign transactions (write operations)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contract:"
        }), " ABI-bound interface to interact with deployed contracts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { ethers } from \"ethers\";\n\n// 1. Connect to provider\nconst provider = new ethers.JsonRpcProvider(\n    \"https://mainnet.infura.io/v3/YOUR_PROJECT_ID\"\n);\n\n// 2. Connect wallet (MetaMask)\nasync function connectWallet(): Promise<string> {\n    if (!window.ethereum) {\n        throw new Error(\"MetaMask not installed\");\n    }\n    const accounts = await window.ethereum.request({\n        method: \"eth_requestAccounts\",\n    });\n    return accounts[0];\n}\n\n// 3. Create signer from wallet\nconst provider = new ethers.BrowserProvider(window.ethereum);\nconst signer = await provider.getSigner();\n\n// 4. Create contract instance\nconst contract = new ethers.Contract(\n    \"0xContractAddress\",\n    [\"function balanceOf(address) view returns (uint256)\"],\n    signer\n);\n\n// 5. Read (free)\nconst balance = await contract.balanceOf(\"0xUserAddress\");\n\n// 6. Write (costs gas)\nconst tx = await contract.transfer(\"0xRecipient\", ethers.parseEther(\"1.0\"));\nawait tx.wait();  // Wait for confirmation\nconsole.log(\"Transaction confirmed:\", tx.hash);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dapp-vs-traditional-app-comparison",
      children: "DApp vs Traditional App Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional App (Web2)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dApp (Web3)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Backend"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contracts on blockchain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized DB (Postgres, MySQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain state + IPFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authentication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Username/Password + session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wallet signature (public key)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contract access control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Identity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email, OAuth (Google, Apple)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wallet address (0x...)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hosting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS, Heroku, Vercel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPFS + ENS + decentralized hosting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fees"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server costs paid by company"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gas fees paid by user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Censorship"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server can block/delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Censorship-resistant (in principle)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Upgrades"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backend deploy (instant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contract upgrade (proxy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data ownership"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service provider owns data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User controls keys = user owns data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Uptime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain is always running"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milliseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds to minutes (block time)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "event-driven-architecture",
      children: "Event-Driven Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Smart contracts emit events that dApps can listen to in real-time:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// Smart contract emits events\ncontract Token {\n    event Transfer(address indexed from, address indexed to, uint256 value);\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n\n    function transfer(address to, uint256 amount) external {\n        // ... transfer logic\n        emit Transfer(msg.sender, to, amount);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Frontend listens for events\nimport { ethers } from \"ethers\";\n\nconst provider = new ethers.WebSocketProvider(\n    \"wss://mainnet.infura.io/ws/v3/YOUR_PROJECT_ID\"\n);\n\nconst contract = new ethers.Contract(address, abi, provider);\n\n// Real-time event listener\ncontract.on(\"Transfer\", (from, to, value, event) => {\n    console.log(`Transfer: ${from} ? ${to} = ${ethers.formatEther(value)} ETH`);\n    // Update UI in real-time\n    updateTransactionList({ from, to, value, txHash: event.log.transactionHash });\n});\n\n// Query historical events\nconst events = await contract.queryFilter(\n    contract.filters.Transfer(null, \"0xUserAddress\"),  // All transfers to user\n    0,  // From block 0\n    \"latest\"  // To latest\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ipfs-interplanetary-file-system",
      children: "IPFS (InterPlanetary File System)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["IPFS is a peer-to-peer, content-addressed file system. Files are addressed by their ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CID (Content Identifier)"
      }), " — a hash of the content itself, not a location URL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph IPFS_Upload[\"IPFS Upload Process\"]\n        File[\"File (image, metadata, etc.)\"]\n        Hash[\"SHA-256 Hash\"]\n        CID[\"CID: QmXyZ...\"]\n        Nodes[\"IPFS Nodes\"]\n    end\n    \n    File --> Hash\n    Hash --> CID\n    CID -->|\"File stored on nodes\"| Nodes\n    Nodes -->|\"Anyone with CID can fetch\"| Retrieval\n    \n    subgraph SmartContract[\"Smart Contract\"]\n        TokenURI[\"tokenURI = ipfs://QmXyZ...\"]\n    end\n    \n    CID --> TokenURI\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why IPFS for dApps?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content addressing:"
        }), " URL never changes if content doesn't change"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deduplication:"
        }), " Same content = same CID"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Offline-first:"
        }), " Can share files within local network without internet"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Persistence risk:"
        }), " Content is only available if someone pins it"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// IPFS upload example (using web3.storage or Pinata)\ninterface NFTMetadata {\n    name: string;\n    description: string;\n    image: string;  // IPFS CID\n    attributes: { trait_type: string; value: string }[];\n}\n\nasync function uploadToIPFS(metadata: NFTMetadata): Promise<string> {\n    // In production, use Pinata SDK or web3.storage\n    const response = await fetch(\"https://api.pinata.cloud/pinning/pinJSONToIPFS\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            Authorization: `Bearer ${PINATA_JWT}`,\n        },\n        body: JSON.stringify(metadata),\n    });\n    const result = await response.json();\n    return `ipfs://${result.IpfsHash}`;  // CID\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provider-comparison",
      children: "Provider Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Free Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Paid Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WebSocket"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Special Features"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infura"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100K req/day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$50+/mo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most mature, ETH/L2 support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alchemy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300M compute units/mo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$49+/mo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enhanced APIs, NFT, WebSocket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QuickNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25K req/mo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$9+/mo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-chain, dedicated nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Moralis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40K tx/mo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$49+/mo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-chain, webhooks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public RPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited (rate limited)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ethers.providers.JsonRpcProvider"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ens-ethereum-name-service",
      children: "ENS (Ethereum Name Service)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ENS maps human-readable names (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vitalik.eth"
      }), ") to Ethereum addresses:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "async function resolveENS(name: string, provider: ethers.Provider): Promise<string | null> {\n    try {\n        const address = await provider.resolveName(name);\n        return address;\n    } catch {\n        return null;\n    }\n}\n\nasync function lookupENS(address: string, provider: ethers.Provider): Promise<string | null> {\n    try {\n        const name = await provider.lookupAddress(address);\n        return name;  // e.g., \"vitalik.eth\"\n    } catch {\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-complete-dapp-frontend-react--ethersjs",
      children: "Example 1: Complete dApp Frontend (React + ethers.js)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { useState, useEffect } from \"react\";\nimport { ethers } from \"ethers\";\n\n// Contract ABI (interface)\nconst TOKEN_ABI = [\n    \"function balanceOf(address) view returns (uint256)\",\n    \"function transfer(address to, uint256 amount) returns (bool)\",\n    \"function totalSupply() view returns (uint256)\",\n    \"event Transfer(address indexed from, address indexed to, uint256 value)\",\n];\n\nexport function TokenDApp() {\n    const [account, setAccount] = useState<string>(\"\");\n    const [balance, setBalance] = useState<string>(\"0\");\n    const [loading, setLoading] = useState<boolean>(false);\n\n    const contractAddress = \"0xYourTokenAddress\";\n\n    async function connect() {\n        if (!window.ethereum) {\n            alert(\"Please install MetaMask\");\n            return;\n        }\n        const accounts = await window.ethereum.request({\n            method: \"eth_requestAccounts\",\n        });\n        setAccount(accounts[0]);\n\n        // Listen for account changes\n        window.ethereum.on(\"accountsChanged\", (accounts: string[]) => {\n            setAccount(accounts[0] || \"\");\n        });\n    }\n\n    async function fetchBalance() {\n        if (!account) return;\n        const provider = new ethers.BrowserProvider(window.ethereum);\n        const contract = new ethers.Contract(contractAddress, TOKEN_ABI, provider);\n        const bal = await contract.balanceOf(account);\n        setBalance(ethers.formatEther(bal));\n    }\n\n    async function transfer(to: string, amount: string) {\n        if (!account) return;\n        setLoading(true);\n        const provider = new ethers.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner();\n        const contract = new ethers.Contract(contractAddress, TOKEN_ABI, signer);\n\n        try {\n            const tx = await contract.transfer(to, ethers.parseEther(amount));\n            await tx.wait();  // Wait for block confirmation\n            alert(\"Transfer successful!\");\n            fetchBalance();  // Refresh balance\n        } catch (error: any) {\n            alert(`Transfer failed: ${error.message}`);\n        } finally {\n            setLoading(false);\n        }\n    }\n\n    // Listen for Transfer events\n    useEffect(() => {\n        if (!account) return;\n        const provider = new ethers.BrowserProvider(window.ethereum);\n        const contract = new ethers.Contract(contractAddress, TOKEN_ABI, provider);\n\n        contract.on(\"Transfer\", (from, to, value) => {\n            if (from === account || to === account) {\n                fetchBalance();\n            }\n        });\n\n        return () => {\n            contract.removeAllListeners(\"Transfer\");\n        };\n    }, [account]);\n\n    return (\n        <div>\n            {!account ? (\n                <button onClick={connect}>Connect Wallet</button>\n            ) : (\n                <div>\n                    <p>Account: {account}</p>\n                    <p>Balance: {balance} TOKEN</p>\n                    <button onClick={fetchBalance}>Refresh</button>\n                    {/* Transfer form */}\n                </div>\n            )}\n        </div>\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-event-listener-for-real-time-updates",
      children: "Example 2: Event Listener for Real-Time Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class MempoolWatcher {\n    private provider: ethers.WebSocketProvider;\n    private pendingTxs: Map<string, ethers.TransactionResponse>;\n\n    constructor(wsUrl: string) {\n        this.provider = new ethers.WebSocketProvider(wsUrl);\n        this.pendingTxs = new Map();\n    }\n\n    async watchPending() {\n        this.provider.on(\"pending\", (txHash: string) => {\n            console.log(`New pending tx: ${txHash}`);\n            this.trackTransaction(txHash);\n        });\n    }\n\n    private async trackTransaction(txHash: string) {\n        const tx = await this.provider.getTransaction(txHash);\n        if (tx && tx.to === \"0xTargetContract\") {\n            this.pendingTxs.set(txHash, tx);\n            \n            // Wait for confirmation\n            const receipt = await this.provider.waitForTransaction(txHash, 1);\n            console.log(`Transaction confirmed in block ${receipt.blockNumber}`);\n            this.pendingTxs.delete(txHash);\n            \n            // Parse events from receipt\n            this.parseEvents(receipt);\n        }\n    }\n\n    private parseEvents(receipt: ethers.TransactionReceipt) {\n        for (const log of receipt.logs) {\n            const event = new ethers.utils.LogDescription(\n                { /* ABI */ },\n                log\n            );\n            console.log(`Event: ${event.name}`, event.args);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-ipfs-cid-based-nft-store",
      children: "Example 3: IPFS-CID-based NFT Store"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface NFT {\n    tokenId: number;\n    tokenURI: string;\n    metadata?: NFTMetadata;\n}\n\nasync function fetchNFTMetadata(tokenURI: string): Promise<NFTMetadata> {\n    // Convert ipfs:// to HTTP gateway\n    const httpUrl = tokenURI.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n    const response = await fetch(httpUrl);\n    return response.json();\n}\n\nasync function loadAllNFTs(\n    contract: ethers.Contract,\n    owner: string\n): Promise<NFT[]> {\n    // Get all tokens owned by address\n    const balance = await contract.balanceOf(owner);\n    const nfts: NFT[] = [];\n\n    for (let i = 0; i < Number(balance); i++) {\n        const tokenId = await contract.tokenOfOwnerByIndex(owner, i);\n        const tokenURI = await contract.tokenURI(tokenId);\n        const metadata = await fetchNFTMetadata(tokenURI);\n        nfts.push({ tokenId: Number(tokenId), tokenURI, metadata });\n    }\n\n    return nfts;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " In a dApp, the user's wallet is both their identity (authentication) and their signing key (authorization) — there is no backend session, no password reset, and no central authority controlling access."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When building a dApp frontend, handle the \"no wallet\" and \"wrong network\" states explicitly. A blank screen when MetaMask isn't installed is the #1 UX failure in new dApps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " IPFS does not guarantee availability — content is only accessible if at least one node is pinning the data. Use a pinning service (Pinata, web3.storage) to ensure your dApp's data persists."]
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
            children: "Web2 Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frontend ? API ? Centralized DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server controls data and identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social media, banking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dApp Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frontend ? Provider ? Blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User controls keys and data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeFi, NFTs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MetaMask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser wallet extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injects window.ethereum provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction signing, identity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infura/Alchemy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node-as-a-Service providers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No need to sync full blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dApp backend connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content-addressed P2P file system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Files addressed by CID, not URL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFT metadata, dApp content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Name Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps names to addresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON-RPC interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write access to blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All dApp transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contract log entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time data streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Price feed updates, transfers"
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
              children: "dApp Stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frontend + Wallet + Provider + Blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No backend server needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wallet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MetaMask, WalletConnect, Coinbase Wallet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manages private keys, signs txs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Provider"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON-RPC (Infura, Alchemy, QuickNode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read operations are free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CID (Qm...), Gateway (ipfs.io), Pinning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content addressing, not location addressing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ENS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "john.eth ? 0xabc..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Events"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emitted by contracts, captured by frontend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time UI updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ethers.js"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider, Signer, Contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Main API for blockchain interaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WebSocket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time event streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower latency than polling"
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
            children: "Wallet Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract interaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Price feeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event listening"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node-as-a-Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralized RPC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFT metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit trails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permanence studies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dApp domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain squating prevention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ethers.js"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance display"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaincode SDK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library benchmarks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event indexing performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time prices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private network sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling event consumers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does a dApp use a \"Provider\" like Infura instead of running its own blockchain node?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Infura is more secure than running a node"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Running a full node is resource-intensive; Infura provides API access without syncing the chain"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Infura provides free ETH"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) A node cannot read smart contract data"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Running a full node is resource-intensive; Infura provides API access without syncing the chain.** A full Ethereum node requires terabytes of storage and constant synchronization. Providers abstract this away with simple REST API access.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does a dApp authenticate a user without a centralized login system?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) By asking for a username and password"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) By having the user sign a message with their wallet's private key"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) By storing the user's email in the blockchain"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) By using cookies"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) By having the user sign a message with their wallet's private key.** The dApp requests a cryptographic signature (EIP-4361 / Sign in with Ethereum), which proves the user controls the claimed address without revealing their private key.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens if the only node pinning your IPFS content goes offline?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The content becomes permanently lost"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The content is inaccessible until a node with that CID comes back online"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The content automatically replicates to other nodes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) IPFS returns a 404 error"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) The content is inaccessible until a node with that CID comes back online.** IPFS does not guarantee persistence — content availability depends on at least one node hosting it. This is why pinning services exist.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between a Provider and a Signer in ethers.js?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are the same thing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Provider can only read data; Signer can sign and send transactions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Provider is faster than Signer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Signer can only read data"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Provider can only read data; Signer can sign and send transactions.** The Provider connects to the blockchain for read-only operations. The Signer wraps a private key (via MetaMask or other wallet) and can sign transactions, which costs gas.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is content addressing important for decentralized applications?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It makes URLs shorter"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Content is addressable by its hash, not its location — links never break if content doesn't change"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It's faster than location addressing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It uses less bandwidth"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Content is addressable by its hash, not its location — links never break if content doesn't change.** In IPFS, the CID (content hash) uniquely identifies the content. As long as the content is the same, the CID is the same, and anyone hosting that CID can serve it.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-multi-sig-wallet-logic",
      children: "TypeScript: Multi-Sig Wallet Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MultiSigTx {\n  id: string; to: string; value: bigint; data: string; confirmations: Set<string>; executed: boolean;\n}\n\nclass MultiSigWallet {\n  owners: string[];\n  required: number;\n  transactions: Map<string, MultiSigTx> = new Map();\n  nonce = 0;\n\n  constructor(owners: string[], required: number) {\n    this.owners = owners;\n    this.required = required;\n  }\n\n  submit(to: string, value: bigint, data: string): string {\n    const id = sha256(to + value.toString() + data + this.nonce++);\n    this.transactions.set(id, { id, to, value, data, confirmations: new Set(), executed: false });\n    return id;\n  }\n\n  confirm(txId: string, owner: string): boolean {\n    if (!this.owners.includes(owner)) return false;\n    const tx = this.transactions.get(txId);\n    if (!tx || tx.executed) return false;\n    tx.confirmations.add(owner);\n    if (tx.confirmations.size >= this.required) {\n      tx.executed = true;\n    }\n    return tx.executed;\n  }\n\n  revoke(txId: string, owner: string): void {\n    this.transactions.get(txId)?.confirmations.delete(owner);\n  }\n\n  getQueue(): MultiSigTx[] {\n    return [...this.transactions.values()].filter(tx => !tx.executed);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-event-listener-framework",
      children: "TypeScript: Event Listener Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type EventCallback = (event: unknown) => void;\n\nclass EventListener {\n  private listeners: Map<string, EventCallback[]> = new Map();\n  private polling = false;\n\n  on(eventName: string, callback: EventCallback): void {\n    if (!this.listeners.has(eventName)) this.listeners.set(eventName, []);\n    this.listeners.get(eventName)!.push(callback);\n  }\n\n  off(eventName: string, callback: EventCallback): void {\n    const cbs = this.listeners.get(eventName);\n    if (cbs) this.listeners.set(eventName, cbs.filter(c => c !== callback));\n  }\n\n  emit(eventName: string, data: unknown): void {\n    this.listeners.get(eventName)?.forEach(cb => cb(data));\n  }\n\n  async poll(fetchFn: () => Promise<{ event: string; data: unknown }[]>, intervalMs = 5000): Promise<void> {\n    this.polling = true;\n    while (this.polling) {\n      const events = await fetchFn();\n      for (const ev of events) this.emit(ev.event, ev.data);\n      await new Promise(r => setTimeout(r, intervalMs));\n    }\n  }\n\n  stop(): void { this.polling = false; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-smart-contract-interaction-wrapper",
      children: "TypeScript: Smart Contract Interaction Wrapper"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ContractABI {\n  name: string; type: string; inputs: { name: string; type: string }[];\n  outputs?: { name: string; type: string }[];\n}\n\nclass ContractWrapper {\n  private abi: ContractABI[];\n  private address: string;\n\n  constructor(address: string, abi: ContractABI[]) {\n    this.address = address;\n    this.abi = abi;\n  }\n\n  estimateGas(functionName: string, args: unknown[]): number {\n    const fn = this.abi.find(a => a.name === functionName && a.type === \"function\");\n    if (!fn) throw new Error(`Function ${functionName} not found`);\n    let gas = 21000;\n    gas += args.length * 5000;\n    return gas;\n  }\n\n  parseError(data: string): string {\n    if (data.startsWith(\"0x08c379a0\")) return \"Revert: \" + Buffer.from(data.slice(10), \"hex\").toString();\n    if (data.startsWith(\"0x4e487b71\")) return \"Panic: arithmetic error\";\n    return \"Unknown error: \" + data;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Multi-Sig Wallet (N-of-M) ===\nclass MultiSigWallet {\n    private owners: string[];\n    private required: number;\n    private nonce = 0;\n    private pending = new Map<number, { to: string; value: bigint; data: string; confirmations: Set<string> }>();\n\n    constructor(owners: string[], required: number) {\n        this.owners = owners; this.required = required;\n    }\n    submitTransaction(to: string, value: bigint, data: string, submitter: string): number | null {\n        if (!this.owners.includes(submitter)) return null;\n        const txId = ++this.nonce;\n        this.pending.set(txId, { to, value, data, confirmations: new Set([submitter]) });\n        return txId;\n    }\n    confirmTransaction(txId: number, owner: string): { executed: boolean; tx?: { to: string; value: bigint; data: string } } {\n        const tx = this.pending.get(txId);\n        if (!tx || !this.owners.includes(owner)) return { executed: false };\n        tx.confirmations.add(owner);\n        if (tx.confirmations.size >= this.required) {\n            const executed = { to: tx.to, value: tx.value, data: tx.data };\n            this.pending.delete(txId);\n            return { executed: true, tx: executed };\n        }\n        return { executed: false };\n    }\n    getConfirmations(txId: number): string[] { return Array.from(this.pending.get(txId)?.confirmations ?? []); }\n}\n\n// === Timelock Transaction ===\nclass TimelockTx {\n    private lockTime: number;\n    constructor(private unlockTime: number, private to: string, private value: bigint) { this.lockTime = unlockTime; }\n    execute(currentTime: number): { success: boolean; reason: string } {\n        if (currentTime < this.lockTime) return { success: false, reason: `locked until ${new Date(this.lockTime).toISOString()}` };\n        return { success: true, reason: `sent ${this.value} to ${this.to}` };\n    }\n    timeRemaining(now: number): number { return Math.max(0, this.lockTime - now); }\n}\n\n// === Escrow Contract ===\nclass EscrowContract {\n    private buyer: string;\n    private seller: string;\n    private arbiter: string;\n    private amount: bigint;\n    private state: 'AWAITING_PAYMENT' | 'AWAITING_DELIVERY' | 'AWAITING_APPROVAL' | 'COMPLETE' | 'DISPUTED' = 'AWAITING_PAYMENT';\n\n    constructor(buyer: string, seller: string, arbiter: string) { this.buyer = buyer; this.seller = seller; this.arbiter = arbiter; this.amount = BigInt(0); }\n    deposit(from: string, amount: bigint): boolean {\n        if (from !== this.buyer || this.state !== 'AWAITING_PAYMENT') return false;\n        this.amount = amount; this.state = 'AWAITING_DELIVERY'; return true;\n    }\n    confirmDelivery(from: string): boolean {\n        if (from !== this.buyer || this.state !== 'AWAITING_APPROVAL') return false;\n        this.state = 'COMPLETE'; return true;\n    }\n    markShipped(from: string): boolean {\n        if (from !== this.seller || this.state !== 'AWAITING_DELIVERY') return false;\n        this.state = 'AWAITING_APPROVAL'; return true;\n    }\n    raiseDispute(from: string): boolean {\n        if (![this.buyer, this.seller].includes(from)) return false;\n        this.state = 'DISPUTED'; return true;\n    }\n    resolveDispute(from: string, awardTo: string): { success: boolean; reason: string } {\n        if (from !== this.arbiter || this.state !== 'DISPUTED') return { success: false, reason: 'unauthorized or not disputed' };\n        this.state = 'COMPLETE';\n        return { success: true, reason: `${this.amount} awarded to ${awardTo}` };\n    }\n    getState(): string { return this.state; }\n}\n\n// === IPFS Content Hash Simulator ===\nclass IPFSSim {\n    static add(content: string): string {\n        let h = 0;\n        for (let i = 0; i < content.length; i++) h = ((h << 5) - h) + content.charCodeAt(i);\n        return `Qm${Math.abs(h).toString(36).padStart(44, '0')}`;\n    }\n}\n\n// === Wallet Connection Manager ===\nclass WalletManager {\n    private accounts: string[] = [];\n    private connected = false;\n    connect(accounts: string[]): void { this.accounts = accounts; this.connected = true; }\n    isConnected(): boolean { return this.connected; }\n    getAccount(): string | undefined { return this.accounts[0]; }\n    signMessage(msg: string): string {\n        let h = 0;\n        for (let i = 0; i < msg.length; i++) h = ((h << 5) - h) + msg.charCodeAt(i);\n        return `0x${Math.abs(h).toString(16).padStart(128, '0')}`;\n    }\n}\n\n// === Demo ===\nconst msw = new MultiSigWallet(['alice', 'bob', 'carol'], 2);\nconst txId = msw.submitTransaction('0xdave', BigInt(100), '0x', 'alice');\nconsole.log(`Tx submitted: ${txId}`);\nlet execResult = msw.confirmTransaction(txId!, 'bob');\nconsole.log(`Bob confirms (executed: ${execResult.executed}):`, execResult.tx?.to);\n\nconst timelock = new TimelockTx(Date.now() + 3600000, '0xbob', BigInt(10));\nconsole.log(`Timelock remaining: ${timelock.timeRemaining(Date.now())}ms`);\nconsole.log(`Early exec: ${timelock.execute(Date.now()).reason}`);\nconsole.log(`After unlock: ${timelock.execute(Date.now() + 3600001).reason}`);\n\nconst escrow = new EscrowContract('alice', 'bob', 'carol');\nescrow.deposit('alice', BigInt(50));\nescrow.markShipped('bob');\nescrow.confirmDelivery('alice');\nconsole.log(`Escrow state: ${escrow.getState()}`);\n\nconst ipfs = new IPFSSim();\nconsole.log(`IPFS hash: ${ipfs.add('hello world')}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// dapps\n// distributed-ledger-crypto implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'dapps', data: { topic: 'distributed-ledger-crypto' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dApps remove central points of control and failure by utilizing blockchain and P2P storage."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The wallet is the gateway for user authentication and transaction signing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Web3 libraries (ethers.js) provide the necessary bridge between standard web technologies and blockchain protocols."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPFS is a critical component for storing large-scale data that cannot fit on-chain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Events enable real-time reactive UIs without polling the blockchain constantly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The shift from Web2 to Web3 is characterized by user ownership of identity and assets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Providers abstract away the complexity of running blockchain nodes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ENS makes addresses human-readable, improving user experience."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always handle \"wallet not installed\" and \"wrong network\" states in your dApp UI."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use ethers.js over web3.js — it's smaller, better typed, and more actively maintained."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Listen to smart contract events via WebSocket for real-time updates rather than polling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a pinning service (Pinata, web3.storage) to ensure IPFS content availability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Sign-in with Ethereum (EIP-4361 / SIWE) for session-based authentication."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your dApp on a testnet (Sepolia, Goerli) before deploying to mainnet."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is a wallet like MetaMask necessary for a dApp?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a \"JSON-RPC Provider\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain \"Content Addressing\" in the context of IPFS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a dApp handle \"User Sign-up\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between reading from and writing to a blockchain from a dApp perspective?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagram the flow of data when a user buys an NFT in a dApp."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the cost and performance of storing 1MB of data on Ethereum vs. IPFS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe how you would implement \"Access Control\" in a dApp frontend using a user's wallet address."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a React component that listens for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Transfer"
        }), " events from an ERC-20 contract and displays recent transfers in real-time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the \"User Onboarding\" problem in dApps and propose a solution that maintains decentralization while improving UX for non-technical users."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a complete dApp architecture diagram for a decentralized Twitter (posts stored on IPFS, interactions on-chain via events). Describe the trade-offs of storing content fully on-chain versus on IPFS."
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