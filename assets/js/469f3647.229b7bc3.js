"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5576],{

/***/ 81912
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_19_blockchain_defi_security_md_469_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-19-blockchain-defi-security-md-469.json
const site_docs_courses_cyber_security_19_blockchain_defi_security_md_469_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/19-blockchain-defi-security","title":"Chapter 19: Blockchain, Smart Contract & DeFi Security","description":"Prereq: Chapters 2 (Cryptography), 3 (Network Security); familiarity with basic blockchain concepts (blocks, transactions, wallets).","source":"@site/docs/courses/cyber-security/19-blockchain-defi-security.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/19-blockchain-defi-security","permalink":"/ai-engineering-journey/cyber-security/19-blockchain-defi-security","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"19-blockchain-defi-security","slug":"/cyber-security/19-blockchain-defi-security","title":"Chapter 19: Blockchain, Smart Contract & DeFi Security","sidebar_label":"Chapter 19: Blockchain, Smart Contract & DeFi Security","sidebar_position":18},"sidebar":"coursesSidebar","previous":{"title":"Chapter 18: Digital Privacy, Anonymity & OSINT","permalink":"/ai-engineering-journey/cyber-security/18-privacy-osint"},"next":{"title":"Chapter 20: Zero Trust & Enterprise Security Architecture","permalink":"/ai-engineering-journey/cyber-security/20-zero-trust-architecture"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/19-blockchain-defi-security.md


const frontMatter = {
	id: '19-blockchain-defi-security',
	slug: '/cyber-security/19-blockchain-defi-security',
	title: 'Chapter 19: Blockchain, Smart Contract & DeFi Security',
	sidebar_label: 'Chapter 19: Blockchain, Smart Contract & DeFi Security',
	sidebar_position: 18
};
const contentTitle = 'Chapter 19: Blockchain, Smart Contract & DeFi Security';

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
  "value": "1. Blockchain Security Fundamentals",
  "id": "1-blockchain-security-fundamentals",
  "level": 2
}, {
  "value": "1.1 51% Attack (Majority Attack)",
  "id": "11-51-attack-majority-attack",
  "level": 3
}, {
  "value": "1.2 Sybil Attack",
  "id": "12-sybil-attack",
  "level": 3
}, {
  "value": "1.3 Eclipse Attack",
  "id": "13-eclipse-attack",
  "level": 3
}, {
  "value": "1.4 Selfish Mining",
  "id": "14-selfish-mining",
  "level": 3
}, {
  "value": "1.5 Timejacking",
  "id": "15-timejacking",
  "level": 3
}, {
  "value": "2. Consensus Security",
  "id": "2-consensus-security",
  "level": 2
}, {
  "value": "2.1 Proof-of-Work — Double-Spend Probability",
  "id": "21-proof-of-work--double-spend-probability",
  "level": 3
}, {
  "value": "2.2 Proof-of-Stake Vulnerabilities",
  "id": "22-proof-of-stake-vulnerabilities",
  "level": 3
}, {
  "value": "2.3 PBFT (Practical Byzantine Fault Tolerance)",
  "id": "23-pbft-practical-byzantine-fault-tolerance",
  "level": 3
}, {
  "value": "2.4 DPoS (Delegated Proof-of-Stake)",
  "id": "24-dpos-delegated-proof-of-stake",
  "level": 3
}, {
  "value": "3. Smart Contract Vulnerabilities",
  "id": "3-smart-contract-vulnerabilities",
  "level": 2
}, {
  "value": "3.1 Reentrancy — The DAO Hack (2016)",
  "id": "31-reentrancy--the-dao-hack-2016",
  "level": 3
}, {
  "value": "3.2 Integer Overflow / Underflow",
  "id": "32-integer-overflow--underflow",
  "level": 3
}, {
  "value": "3.3 Access Control Vulnerabilities",
  "id": "33-access-control-vulnerabilities",
  "level": 3
}, {
  "value": "3.4 Front-Running",
  "id": "34-front-running",
  "level": 3
}, {
  "value": "3.5 Flash Loan Attacks",
  "id": "35-flash-loan-attacks",
  "level": 3
}, {
  "value": "3.6 Oracle Manipulation",
  "id": "36-oracle-manipulation",
  "level": 3
}, {
  "value": "4. DeFi Security",
  "id": "4-defi-security",
  "level": 2
}, {
  "value": "4.1 AMM Manipulation",
  "id": "41-amm-manipulation",
  "level": 3
}, {
  "value": "4.2 Impermanent Loss",
  "id": "42-impermanent-loss",
  "level": 3
}, {
  "value": "4.3 MEV — Miner Extractable Value",
  "id": "43-mev--miner-extractable-value",
  "level": 3
}, {
  "value": "4.4 Liquidation Attacks",
  "id": "44-liquidation-attacks",
  "level": 3
}, {
  "value": "5. Solidity Security Patterns",
  "id": "5-solidity-security-patterns",
  "level": 2
}, {
  "value": "5.1 <code>tx.origin</code> vs <code>msg.sender</code>",
  "id": "51-txorigin-vs-msgsender",
  "level": 3
}, {
  "value": "5.2 Delegatecall Proxy Patterns",
  "id": "52-delegatecall-proxy-patterns",
  "level": 3
}, {
  "value": "5.3 <code>selfdestruct</code>",
  "id": "53-selfdestruct",
  "level": 3
}, {
  "value": "5.4 Unchecked Arithmetic &amp; Unsafe Typecasting",
  "id": "54-unchecked-arithmetic--unsafe-typecasting",
  "level": 3
}, {
  "value": "6. Cross-Chain Security",
  "id": "6-cross-chain-security",
  "level": 2
}, {
  "value": "6.1 Bridge Architecture &amp; Trust Assumptions",
  "id": "61-bridge-architecture--trust-assumptions",
  "level": 3
}, {
  "value": "6.2 Major Bridge Hacks",
  "id": "62-major-bridge-hacks",
  "level": 3
}, {
  "value": "6.3 Atomic Swaps",
  "id": "63-atomic-swaps",
  "level": 3
}, {
  "value": "7. Wallet Security",
  "id": "7-wallet-security",
  "level": 2
}, {
  "value": "7.1 HD Wallet Derivation (BIP32/39/44)",
  "id": "71-hd-wallet-derivation-bip323944",
  "level": 3
}, {
  "value": "7.2 Mnemonic Security",
  "id": "72-mnemonic-security",
  "level": 3
}, {
  "value": "7.3 Hardware Wallets",
  "id": "73-hardware-wallets",
  "level": 3
}, {
  "value": "7.4 Multisig Wallets (Gnosis Safe)",
  "id": "74-multisig-wallets-gnosis-safe",
  "level": 3
}, {
  "value": "8. Cryptography in Blockchain",
  "id": "8-cryptography-in-blockchain",
  "level": 2
}, {
  "value": "8.1 ECDSA (secp256k1, Ed25519)",
  "id": "81-ecdsa-secp256k1-ed25519",
  "level": 3
}, {
  "value": "8.2 Signature Malleability",
  "id": "82-signature-malleability",
  "level": 3
}, {
  "value": "8.3 ECDSA Nonce Reuse",
  "id": "83-ecdsa-nonce-reuse",
  "level": 3
}, {
  "value": "8.4 BLS Signatures",
  "id": "84-bls-signatures",
  "level": 3
}, {
  "value": "9. NFT Security",
  "id": "9-nft-security",
  "level": 2
}, {
  "value": "9.1 Metadata Integrity",
  "id": "91-metadata-integrity",
  "level": 3
}, {
  "value": "9.2 Royalty Enforcement",
  "id": "92-royalty-enforcement",
  "level": 3
}, {
  "value": "9.3 Token Standard Issues",
  "id": "93-token-standard-issues",
  "level": 3
}, {
  "value": "10. Blockchain Forensics",
  "id": "10-blockchain-forensics",
  "level": 2
}, {
  "value": "10.1 Chain Hopping Tracking",
  "id": "101-chain-hopping-tracking",
  "level": 3
}, {
  "value": "10.2 Taint Analysis",
  "id": "102-taint-analysis",
  "level": 3
}, {
  "value": "10.3 Deanonymization Techniques",
  "id": "103-deanonymization-techniques",
  "level": 3
}, {
  "value": "10.4 Know Your Transaction (KYT)",
  "id": "104-know-your-transaction-kyt",
  "level": 3
}, {
  "value": "11. Smart Contract Audit Checklist",
  "id": "11-smart-contract-audit-checklist",
  "level": 2
}, {
  "value": "12. Major Attack Technical Breakdowns",
  "id": "12-major-attack-technical-breakdowns",
  "level": 2
}, {
  "value": "12.1 DAO Hack Technical Breakdown (June 2016)",
  "id": "121-dao-hack-technical-breakdown-june-2016",
  "level": 3
}, {
  "value": "12.2 bZx Flash Loan Attack (Feb 2020)",
  "id": "122-bzx-flash-loan-attack-feb-2020",
  "level": 3
}, {
  "value": "12.3 Harvest Finance Attack (Oct 2020)",
  "id": "123-harvest-finance-attack-oct-2020",
  "level": 3
}, {
  "value": "12.4 Ronin Bridge Timeline",
  "id": "124-ronin-bridge-timeline",
  "level": 3
}, {
  "value": "13. TypeScript Implementation Examples",
  "id": "13-typescript-implementation-examples",
  "level": 2
}, {
  "value": "13.1 Block Header Validator",
  "id": "131-block-header-validator",
  "level": 3
}, {
  "value": "13.2 Smart Contract Vulnerability Scanner",
  "id": "132-smart-contract-vulnerability-scanner",
  "level": 3
}, {
  "value": "13.3 Flash Loan Attack Simulator",
  "id": "133-flash-loan-attack-simulator",
  "level": 3
}, {
  "value": "13.4 MEV Sandwich Attack Calculator",
  "id": "134-mev-sandwich-attack-calculator",
  "level": 3
}, {
  "value": "13.5 AMM Price Impact Calculator",
  "id": "135-amm-price-impact-calculator",
  "level": 3
}, {
  "value": "13.6 Signature Verification (ECDSA Replay Protection)",
  "id": "136-signature-verification-ecdsa-replay-protection",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz (10 MCQ)",
  "id": "chapter-quiz-10-mcq",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 3
}, {
  "value": "Application (Hands-On)",
  "id": "application-hands-on",
  "level": 3
}, {
  "value": "Challenge (Advanced)",
  "id": "challenge-advanced",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    del: "del",
    details: "details",
    em: "em",
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
        id: "chapter-19-blockchain-smart-contract--defi-security",
        children: "Chapter 19: Blockchain, Smart Contract & DeFi Security"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapters 2 (Cryptography), 3 (Network Security); familiarity with basic blockchain concepts (blocks, transactions, wallets).\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " [Chapter 20: Emerging Threats & Post-Quantum Cryptography] (planned)\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Target Audience:"
        }), " Security engineers, smart contract auditors, DeFi analysts, blockchain developers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/cyber-security/19-blockchain-defi-security/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/19-blockchain-defi-security/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/19-blockchain-defi-security/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/19-blockchain-defi-security/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/19-blockchain-defi-security/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/19-blockchain-defi-security/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and explain fundamental blockchain attacks: 51%, Sybil, eclipse, selfish mining, and timejacking."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze consensus-level security for PoW (double-spend probability), PoS (long-range, nothing-at-stake), PBFT, and DPoS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect and mitigate smart contract vulnerabilities including reentrancy, integer overflow, front-running, flash loan attacks, and oracle manipulation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand DeFi-specific threats: AMM constant-product manipulation, MEV sandwich attacks, impermanent loss, and liquidation attacks."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply Solidity security patterns: differentiate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tx.origin"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), ", audit delegatecall proxies, and handle unchecked arithmetic."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate cross-chain bridge security using historical case studies (Wormhole, Ronin, Nomad)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement HD wallet key derivation (BIP32/39/44) in TypeScript for wallet security analysis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Develop a blockchain transaction graph analyzer for forensic taint-flow tracking."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain Security Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51%, Sybil, eclipse, selfish mining, timejacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational threats to chain integrity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double-spend odds, long-range attacks, nothing-at-stake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus design drives security guarantees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smart Contract Vulnerabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reentrancy, overflow, access control, flash loans, oracles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$7B+ lost to contract exploits since 2016"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DeFi Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMM manipulation, MEV, liquidation attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeFi composability creates cascading risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Solidity Security Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tx.origin, delegatecall, selfdestruct, unchecked math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every Solidity dev must know these pitfalls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Chain Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge architecture, Wormhole/Ronin/Nomad hacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2.5B stolen from bridges in 2022 alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wallet Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BIP32/39/44 derivation, hardware wallets, multisig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key management is the #1 user-side risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptography in Blockchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA, Ed25519, BLS, nonce reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crypto failures are irreversible on-chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFT Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata integrity, royalty enforcement, ERC-721/1155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFT market $1.3B lost to scams and exploits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain Forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taint analysis, chain hopping, CoinJoin deanonymization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracing illicit funds across chains"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-blockchain-security-fundamentals",
      children: "1. Blockchain Security Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-51-attack-majority-attack",
      children: "1.1 51% Attack (Majority Attack)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An entity controlling >50% of the network's mining hash rate (PoW) or staked value (PoS) can rewrite history by producing a longer chain. The attacker can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Double-spend"
        }), ": Send coins to an exchange, withdraw fiat, then publish a fork that omits that transaction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Censor transactions"
        }), ": Refuse to include specific transactions in blocks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reorder transactions"
        }), ": Front-run or sandwich victim transactions at will."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost to execute a 1-hour 51% attack (2024 estimates):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Chain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Rate (TH/s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Estimated Rental Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin (BTC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~600 EH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$700,000+ / hour"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Classic (ETC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200 TH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$10,000 / hour"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin Cash (BCH)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3 EH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$50,000 / hour"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Litecoin (LTC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 PH/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$5,000 / hour"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Defence:"
      }), " High total hash rate / stake, fast finality gadgets (e.g., Casper FFG), monitoring for deep reorgs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-sybil-attack",
      children: "1.2 Sybil Attack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An attacker creates many fake identities (nodes) to surround and isolate honest peers. Sybil attacks are a prerequisite for eclipse attacks and 51% attacks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Defence:"
      }), " Proof-of-work (costly to create identities), proof-of-stake (economic bond), peer scoring (up-time, age)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-eclipse-attack",
      children: "1.3 Eclipse Attack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The attacker monopolises all incoming/outgoing connections to a target node, isolating it from the honest network. The eclipsed node sees a false view of the blockchain and can be tricked into accepting invalid transactions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Attacker ←→ [Victim Node] ←→ Attacker\n     ↕                          ↕\n[Fake Blockchain]          [Fake Peers]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Defence:"
      }), " Deterministic random node selection (not just IP-based), connection diversity, monitoring for unexpected peer churn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-selfish-mining",
      children: "1.4 Selfish Mining"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A miner with >25% hash rate can gain an unfair advantage by ", (0,jsx_runtime.jsx)(_components.em, {
        children: "withholding"
      }), " found blocks and only publishing them after building a lead. This wastes honest miners' work and destabilises the chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Probability of success:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "With 30% hash rate: ~50% chance of winning the race."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With 40% hash rate: selfish mining becomes ", (0,jsx_runtime.jsx)(_components.em, {
          children: "more profitable"
        }), " than honest mining."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Defence:"
      }), " Fresh-block announcements, uncle/uncle-inclusion rewards (Ethash), tie-breaking rules that favour public chains."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-timejacking",
      children: "1.5 Timejacking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An attacker manipulates a node's network time counter by sending false timestamps in peer address messages, causing the node to accept an alternative chain with different timestamps."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Defence:"
      }), " Reject timestamps far from the node's system clock; use a maximum timestamp drift of 70 minutes (Bitcoin Core)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-consensus-security",
      children: "2. Consensus Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-proof-of-work--double-spend-probability",
      children: "2.1 Proof-of-Work — Double-Spend Probability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The probability that an attacker with proportion ( q ) of the total hash rate can overwrite ( z ) confirmations follows the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Meni Rosenfeld"
      }), " formula:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nP(z, q) = \\left( \\frac{q}{p} \\right)^{z+1} \\quad \\text{for } q < 0.5\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where ( p = 1 - q )."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " An attacker with 10% hash rate trying to reverse 6 confirmations:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nP(6, 0.1) = \\left( \\frac{0.1}{0.9} \\right)^7 \\approx 2.3 \\times 10^{-7}\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function doubleSpendProbability(q: number, z: number): number {\n    if (q >= 0.5) return 1.0; // 51% attack: guaranteed given enough time\n    const p = 1 - q;\n    return Math.pow(q / p, z + 1);\n}\n\n// Attacker with 10% hash rate, 6 confirmations\nconsole.log(doubleSpendProbability(0.1, 6)); // ~2.3e-7\n// Attacker with 30% hash rate, 24 confirmations (exchange standard)\nconsole.log(doubleSpendProbability(0.3, 24)); // ~1.6e-6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-proof-of-stake-vulnerabilities",
      children: "2.2 Proof-of-Stake Vulnerabilities"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Long-Range Attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker creates a fork from a past block using old keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak subjectivity checkpoints, key-evolving signatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nothing-at-Stake"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validators vote on every fork (costless to support all chains)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slashing conditions, economic penalties for equivocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Grinding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator biases VRF/RANDAO outputs to influence future proposers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commit-reveal schemes, verifiable delay functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bribe Attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker pays validators to reorg for a fee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crypto-economic finality (e.g., Casper FFG)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-pbft-practical-byzantine-fault-tolerance",
      children: "2.3 PBFT (Practical Byzantine Fault Tolerance)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PBFT requires ( 3f + 1 ) nodes to tolerate ( f ) Byzantine faults. Communication is O(n²). The protocol reaches finality in three phases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-prepare"
        }), ": Primary proposes a block."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prepare"
        }), ": Nodes broadcast acceptance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit"
        }), ": Nodes broadcast commit — at ( 2f + 1 ) commits, finality is reached."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security property:"
      }), " Under ( f < n/3 ) Byzantine nodes, the protocol guarantees safety and liveness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-dpos-delegated-proof-of-stake",
      children: "2.4 DPoS (Delegated Proof-of-Stake)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A small set of elected block producers (e.g., 21 in EOS) create blocks. While throughput is high (thousands of TPS), the attack surface narrows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cartel formation"
        }), ": Top producers collude to censor transactions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vote buying"
        }), ": Attackers pay token holders for votes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low resilience"
        }), ": With only 21 producers, a compromise of 11 is catastrophic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-smart-contract-vulnerabilities",
      children: "3. Smart Contract Vulnerabilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-reentrancy--the-dao-hack-2016",
      children: "3.1 Reentrancy — The DAO Hack (2016)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The DAO Hack (June 2016) — $60M stolen"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The DAO was a decentralised venture capital fund on Ethereum. An attacker exploited a reentrancy vulnerability in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "splitDAO"
      }), " function:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Attacker\n    participant DAO as DAO Contract\n    participant Fallback as Attacker Fallback\n\n    Attacker->>DAO: withdraw(amount)\n    DAO->>DAO: Check balance\n    DAO->>DAO: Send ETH to Attacker\n    DAO-->>Attacker: ETH sent\n    Note over Attacker,Fallback: Before DAO updates balance...\n    Attacker->>Fallback: receive() triggered\n    Fallback->>DAO: withdraw(amount)  // Re-enter!\n    DAO->>DAO: Check balance (still old!)\n    DAO->>DAO: Send ETH again\n    DAO-->>Fallback: ETH sent\n    Note over DAO: Only after all calls complete<br/>does balance update\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The vulnerable pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// VULNERABLE: state update AFTER external call\nfunction withdraw(uint amount) public {\n    require(balances[msg.sender] >= amount);\n    (bool sent, ) = msg.sender.call{value: amount}(\"\");  // External call FIRST\n    require(sent);\n    balances[msg.sender] -= amount;  // Update AFTER\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The fix (Check-Effects-Interactions pattern):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "function withdraw(uint amount) public {\n    require(balances[msg.sender] >= amount);\n    balances[msg.sender] -= amount;  // UPDATE FIRST\n    (bool sent, ) = msg.sender.call{value: amount}(\"\");  // Then interact\n    require(sent);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use reentrancy guards:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// OpenZeppelin ReentrancyGuard\nmodifier nonReentrant() {\n    require(_status != ENTERED, \"ReentrancyGuard: reentrant call\");\n    _status = ENTERED;\n    _;\n    _status = NOT_ENTERED;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-integer-overflow--underflow",
      children: "3.2 Integer Overflow / Underflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before Solidity 0.8, arithmetic operations silently wrapped. An attacker could underflow a balance check:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// VULNERABLE (pre-0.8)\nfunction transfer(address to, uint amount) public {\n    require(balances[msg.sender] >= amount);\n    balances[msg.sender] -= amount;  // If amount > balance, wraps to max uint\n    balances[to] += amount;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "amount = 100"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "balance = 50"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "50 - 100 = 2^256 - 50"
        }), " (underflow → enormous balance)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-0.8:"
      }), " Built-in checked arithmetic reverts on overflow. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unchecked"
      }), " blocks only when overflow is explicitly intended (e.g., gas optimisation in Solidity 0.8+)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-access-control-vulnerabilities",
      children: "3.3 Access Control Vulnerabilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Missing or incorrect access control modifiers are the most common critical finding in audits."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// VULNERABLE: missing onlyOwner\nfunction mint(address to, uint amount) public {\n    _mint(to, amount);  // Anyone can mint!\n}\n\n// CORRECT\nfunction mint(address to, uint amount) public onlyOwner {\n    _mint(to, amount);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common pitfalls:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tx.origin"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), " for authentication"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initializer functions on upgradeable contracts not protected"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Incorrect role assignments in OpenZeppelin's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AccessControl"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-front-running",
      children: "3.4 Front-Running"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Attackers monitor the mempool and submit transactions with higher gas to execute ", (0,jsx_runtime.jsx)(_components.em, {
        children: "before"
      }), " a victim's pending transaction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Displacement front-run"
        }), ": Replace victim's order with a better-priced one."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insertion front-run"
        }), ": Insert a buy order before victim, sell after."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timestamp dependence"
        }), ": Mining a block at a favourable timestamp."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MempoolTx {\n    txHash: string;\n    from: string;\n    to: string;\n    data: string;\n    gasPrice: bigint;\n    nonce: number;\n}\n\nfunction detectFrontRunning(pendingTxs: MempoolTx[]): MempoolTx[] {\n    // Simple heuristic: same method selector, escalating gas prices\n    const methodSelectors = new Map<string, MempoolTx[]>();\n    for (const tx of pendingTxs) {\n        const selector = tx.data.slice(0, 10); // first 4 bytes = method ID\n        const group = methodSelectors.get(selector) || [];\n        group.push(tx);\n        methodSelectors.set(selector, group);\n    }\n    const suspicious: MempoolTx[] = [];\n    for (const [, txs] of methodSelectors) {\n        if (txs.length >= 2) {\n            const sorted = txs.sort((a, b) =>\n                a.gasPrice < b.gasPrice ? -1 : a.gasPrice > b.gasPrice ? 1 : 0\n            );\n            for (let i = 1; i < sorted.length; i++) {\n                const ratio = Number(\n                    (sorted[i].gasPrice * BigInt(100)) / sorted[i - 1].gasPrice\n                );\n                if (ratio > 120) suspicious.push(sorted[i]); // >20% gas bump\n            }\n        }\n    }\n    return suspicious;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigations:"
      }), " Commit-reveal schemes (e.g., submarine sends), Flashbots RPC (private mempool), reducing MEV exposure via tight slippage bounds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-flash-loan-attacks",
      children: "3.5 Flash Loan Attacks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Flash loans allow borrowing any amount of assets ", (0,jsx_runtime.jsx)(_components.em, {
        children: "without collateral"
      }), " as long as the loan is repaid within the same transaction. This enables complex multi-step exploits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anatomy of a flash loan attack:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Flash Loan: Borrow $1B DAI] --> B[Swap DAI → USDC on AMM A]\n    B --> C[Swap USDC → DAI on AMM B]\n    C --> D[Arbitrage profit captured]\n    D --> E[Repay flash loan]\n    E --> F[Profit: difference minus fees]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notable flash loan attacks:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loss"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vector"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bZx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feb 2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$350K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle manipulation + flash loan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Harvest Finance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oct 2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$24M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curve pool manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PancakeBunny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May 2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$45M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMM price manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cream Finance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oct 2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$130M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash loan + reentrancy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-oracle-manipulation",
      children: "3.6 Oracle Manipulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Oracles feed external data (e.g., asset prices) onto the blockchain. Manipulating an oracle lets attackers over-value collateral or under-value debt."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack: Manipulating a Uniswap TWAP oracle"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a protocol uses a Uniswap TWAP (time-weighted average price) with a short window (e.g., 10 minutes), an attacker can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flash loan a large amount of Token A."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swap Token A → Token B on Uniswap, crashing the price."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trigger a liquidation or borrow against inflated collateral."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swap back and repay the flash loan."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Defence:"
      }), " Use multiple independent oracles (Chainlink, MakerOSM, Tellor), long TWAP windows (30 min+), circuit breakers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-defi-security",
      children: "4. DeFi Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-amm-manipulation",
      children: "4.1 AMM Manipulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uniswap's constant product formula: ( x \\times y = k )"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An attack that manipulates the price:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface AMMPool {\n    reserve0: bigint; // Token A reserve\n    reserve1: bigint; // Token B reserve\n}\n\nfunction getAmountOut(\n    amountIn: bigint,\n    reserveIn: bigint,\n    reserveOut: bigint\n): bigint {\n    const amountInWithFee = amountIn * BigInt(997); // 0.3% fee\n    const numerator = amountInWithFee * reserveOut;\n    const denominator = reserveIn * BigInt(1000) + amountInWithFee;\n    if (denominator === BigInt(0)) return BigInt(0);\n    return numerator / denominator;\n}\n\nfunction calculatePriceImpact(\n    pool: AMMPool,\n    amountIn: bigint,\n    token0In: boolean\n): number {\n    const reserveIn = token0In ? pool.reserve0 : pool.reserve1;\n    const reserveOut = token0In ? pool.reserve1 : pool.reserve0;\n    const amountOut = getAmountOut(amountIn, reserveIn, reserveOut);\n    const priceBefore = Number(reserveOut) / Number(reserveIn);\n    const priceAfter = Number(reserveOut - amountOut) / Number(reserveIn + amountIn);\n    return ((priceBefore - priceAfter) / priceBefore) * 100;\n}\n\nconst pool: AMMPool = { reserve0: BigInt(1000e18), reserve1: BigInt(1000e18) };\nconsole.log(`Price impact for 100 ETH swap: ${calculatePriceImpact(pool, BigInt(100e18), true).toFixed(2)}%`);\n// Large swap → high price impact, exploitable by sandwich attacks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-impermanent-loss",
      children: "4.2 Impermanent Loss"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Liquidity providers (LPs) suffer impermanent loss when the price ratio between pooled assets changes. The loss is \"impermanent\" until withdrawal — if the price ratio returns to the deposit ratio, IL disappears."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nIL = \\frac{2 \\times \\sqrt{r}}{1 + r} - 1\n]\nwhere ( r = P_{\\text{new}} / P_{\\text{original}} )."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function impermanentLoss(priceRatio: number): number {\n    const sqrt = Math.sqrt(priceRatio);\n    return (2 * sqrt) / (1 + priceRatio) - 1;\n}\n\nconst ratios = [1.25, 1.5, 2.0, 3.0, 5.0];\nfor (const r of ratios) {\n    console.log(`Price ratio ${r}x → IL: ${(impermanentLoss(r) * 100).toFixed(2)}%`);\n}\n// Price ratio 1.25x → IL: -0.49%\n// Price ratio 2.0x  → IL: -5.72%\n// Price ratio 5.0x  → IL: -25.46%\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-mev--miner-extractable-value",
      children: "4.3 MEV — Miner Extractable Value"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MEV refers to value extracted by reordering, including, or excluding transactions within a block."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Types of MEV:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Profitability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DEX Arbitrage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buy low on A, sell high on B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (risk-free)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sandwich Attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buy before victim, sell after"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (capital intensive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Liquidation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Liquidate underwater positions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable (DeFi lending)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NFT MEV"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sweep rare NFTs before others"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sandwich attack anatomy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Victim\n    participant Searcher\n    participant Mempool\n    participant BlockBuilder\n\n    Victim->>Mempool: Submit swap: BUY 100 ETH at market\n    Searcher->>Mempool: Detect victim's pending tx\n    Searcher->>Mempool: Front-run tx: BUY 50 ETH (higher gas)\n    Searcher->>Mempool: Back-run tx: SELL 50 ETH (after victim)\n    BlockBuilder->>BlockBuilder: Order: Front-run → Victim → Back-run\n    Note over Searcher: Profit = back-run sale - front-run buy - fees\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-liquidation-attacks",
      children: "4.4 Liquidation Attacks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lending protocols (Aave, Compound) allow over-collateralised borrowing. If collateral value falls below the liquidation threshold, anyone can liquidate the position for a bonus."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack vector:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deposit large collateral → borrow maximum."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manipulate the oracle to trigger a false \"health factor drop.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Liquidator (often the attacker themselves) claims the liquidation bonus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repay the loan and profit from the bonus."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-solidity-security-patterns",
      children: "5. Solidity Security Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "51-txorigin-vs-msgsender",
      children: ["5.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tx.origin"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.sender"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tx.origin"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.sender"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Original EOA that initiated the tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate caller (could be contract)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "VULNERABLE"
            }), " — phishing attacks"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe for auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gas cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheaper (SLOAD vs CALLER)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// VULNERABLE: phishing attack\nfunction withdrawAll() public {\n    require(tx.origin == owner); // Owner's wallet calls a malicious contract\n    // which then calls this function. tx.origin == owner passes!\n    payable(owner).transfer(address(this).balance);\n}\n\n// CORRECT\nfunction withdrawAll() public {\n    require(msg.sender == owner); // Only direct calls from owner pass\n    payable(owner).transfer(address(this).balance);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-delegatecall-proxy-patterns",
      children: "5.2 Delegatecall Proxy Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "delegatecall"
      }), " executes a contract's code in the caller's storage context. This is the foundation of upgradeable contracts — but it's dangerous."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Parity Wallet Hack (2017) — $280M frozen"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Parity multi-sig wallet used a library contract with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delegatecall"
      }), ". An attacker called the library's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "initWallet()"
      }), " function (which set the owner) after the library was initialised, then called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kill()"
      }), " to selfdestruct the library, freezing all funds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Golden rule:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delegatecall"
      }), " preserves ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.sender"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.value"
      }), " from the external caller. Storage layouts of the calling and called contracts must match."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "53-selfdestruct",
      children: ["5.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selfdestruct"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "selfdestruct(address)"
      }), " removes contract bytecode and sends remaining ETH to the target. Attack vectors:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forced ETH send"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "selfdestruct"
        }), " can send ETH to a contract without its fallback function being called, breaking balance invariants."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contract kill"
        }), ": A malicious owner can destroy a contract and freeze funds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation:"
      }), " Avoid ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selfdestruct"
      }), " in contracts that hold user funds. Use a timelock if destruction is required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-unchecked-arithmetic--unsafe-typecasting",
      children: "5.4 Unchecked Arithmetic & Unsafe Typecasting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// VULNERABLE: overflow / truncation\nuint256 large = type(uint256).max;\nuint160 smaller = uint160(large); // Truncation! Information loss\n\n// VULNERABLE: unsafe downcast\nuint32 a = 0xFFFFFFFF;\nuint16 b = uint16(a); // b = 0xFFFF — value truncated silently\n\n// Solidity 0.8+ safe casting\nimport \"@openzeppelin/contracts/utils/math/SafeCast.sol\";\nuint16 c = SafeCast.toUint16(a); // reverts on overflow\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-cross-chain-security",
      children: "6. Cross-Chain Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-bridge-architecture--trust-assumptions",
      children: "6.1 Bridge Architecture & Trust Assumptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bridges transfer assets between blockchains. Every bridge introduces a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trust assumption"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Chain_A[\"Ethereum\"]\n        L1A[\"Bridge Contract\"]\n        ValidatorsA[\"Validator Set\"]\n    end\n    subgraph Chain_B[\"Solana\"]\n        L1B[\"Bridge Contract\"]\n        ValidatorsB[\"Validator Set\"]\n    end\n    subgraph Bridge[\"Bridge Layer\"]\n        MPC[\"Multi-Party Computation\"]\n        Oracle[\"Oracle / Relayer Network\"]\n    end\n    \n    UserA[\"User on ETH\"] --> L1A\n    L1A --> MPC\n    MPC --> L1B\n    L1B --> UserB[\"User on Solana\"]\n    \n    Note_R[\"Risk: If MPC/Oracles<br/>compromised,<br/>all bridge funds lost\"]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bridge Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trust Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Validator-set bridge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust a multi-sig / validator set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wormhole, Ronin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimistic bridge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assume honest, fraud proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nomad, Across"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Light-client bridge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust consensus rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IBC (Cosmos), Rainbow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Liquidity network"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust market makers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hop, Synapse"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-major-bridge-hacks",
      children: "6.2 Major Bridge Hacks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ronin Bridge (Axie Infinity) — March 2022 — $625M"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Target"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ronin bridge (Ethereum ↔ Ronin sidechain)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Root Cause"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5/9 validator keys compromised"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker used compromised private keys to forge withdrawal transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Discovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 days after exploit — user couldn't withdraw 5,000 ETH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aftermath"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Axie Infinity token crashed 40%; US Treasury sanctioned North Korea's Lazarus Group"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wormhole Bridge — February 2022 — $320M"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Target"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wormhole (Ethereum ↔ Solana)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Root Cause"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Solana ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Secp256k1"
            }), " instruction verification bypass"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker minted 120,000 wrapped ETH on Solana without depositing on Ethereum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patched signature verification; Jump Crypto replenished funds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nomad Bridge — August 2022 — $190M"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Target"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nomad (optimistic bridge, multiple chains)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Root Cause"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incorrect initialisation — a \"0x00\" root hash was accepted as valid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Attack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker spoofed a legitimate message; copycat attackers drained remaining funds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aftermath"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$32M recovered via bounty; bridge permanently shut"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-atomic-swaps",
      children: "6.3 Atomic Swaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An atomic swap is a trustless cross-chain exchange using hashed timelock contracts (HTLCs). It is \"atomic\" — either both parties receive funds, or neither does."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface HTLC {\n    sender: string;\n    receiver: string;\n    hashLock: string;      // SHA-256 of secret\n    timelock: number;      // Block height expiry\n    amount: bigint;\n    asset: string;\n    secret?: string;       // Pre-image (only revealed on claim)\n}\n\n// Security: pre-image reveal race condition\n// If the secret is revealed on Chain A, Chain B's timelock\n// gives the counterparty time to also claim using the same secret.\n// Attacker could front-run the secret reveal on Chain B.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-wallet-security",
      children: "7. Wallet Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-hd-wallet-derivation-bip323944",
      children: "7.1 HD Wallet Derivation (BIP32/39/44)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hierarchical Deterministic (HD) wallets derive keys from a single seed phrase."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hierarchy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Mnemonic (BIP39) → Seed (PBKDF2) → Master Private Key → Child Keys\n\nBIP44 Path: m / purpose' / coin_type' / account' / change / address_index\nExample:     m / 44'     / 60'       / 0'        / 0      / 0\n                                            ↕\n                                    Ethereum mainnet address\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// HD Wallet Key Derivation (BIP32/39/44) — TypeScript Implementation\nimport { createHmac, randomBytes } from \"crypto\";\n\ninterface HDNode {\n    privateKey: Buffer;\n    chainCode: Buffer;\n    depth: number;\n    index: number;\n    parentFingerprint: number;\n}\n\nfunction bip39MnemonicToSeed(mnemonic: string, passphrase = \"\"): Buffer {\n    const mnemonicBytes = Buffer.from(mnemonic, \"utf8\");\n    const passphraseBytes = Buffer.from(`mnemonic${passphrase}`, \"utf8\");\n    // PBKDF2 with 2048 rounds\n    return require(\"crypto\").pbkdf2Sync(\n        mnemonicBytes,\n        passphraseBytes,\n        2048,\n        64,\n        \"sha512\"\n    );\n}\n\n// Simplified CKD (Child Key Derivation) — secp256k1\nfunction ckdPriv(parent: HDNode, index: number): HDNode {\n    const indexBuffer = Buffer.alloc(4);\n    indexBuffer.writeUInt32BE(index, 0);\n    \n    const data = Buffer.concat([\n        Buffer.from([0x00]), // 0x00 for private key derivation\n        parent.privateKey,\n        indexBuffer,\n    ]);\n    \n    const hmac = createHmac(\"sha512\", parent.chainCode).update(data).digest();\n    const left = hmac.subarray(0, 32);\n    const right = hmac.subarray(32, 64);\n    \n    const childPriv = Buffer.alloc(32);\n    let carry = 0n;\n    for (let i = 31; i >= 0; i--) {\n        const sum = BigInt(parent.privateKey[i]) + BigInt(left[i]) + BigInt(carry);\n        childPriv[i] = Number(sum & 0xffn);\n        carry = sum >> 8n;\n    }\n    \n    return {\n        privateKey: childPriv,\n        chainCode: right,\n        depth: parent.depth + 1,\n        index,\n        parentFingerprint: 0,\n    };\n}\n\n// BIP44 path: m/44'/60'/0'/0/0 (Ethereum)\nfunction deriveBIP44(mnemonic: string): HDNode {\n    const seed = bip39MnemonicToSeed(mnemonic);\n    // Master node = HMAC-SHA512(\"Bitcoin seed\", seed)\n    const hmac = createHmac(\"sha512\", Buffer.from(\"Bitcoin seed\", \"utf8\"))\n        .update(seed)\n        .digest();\n    \n    let node: HDNode = {\n        privateKey: hmac.subarray(0, 32),\n        chainCode: hmac.subarray(32, 64),\n        depth: 0,\n        index: 0,\n        parentFingerprint: 0,\n    };\n    \n    // m/44'/60'/0'/0/0\n    const path = [0x80000000 | 44, 0x80000000 | 60, 0x80000000 | 0, 0, 0];\n    for (const idx of path) {\n        node = ckdPriv(node, idx);\n    }\n    \n    return node;\n}\n\n// Test\nconst mnemonic = \"abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about\";\nconst wallet = deriveBIP44(mnemonic);\nconsole.log(`Derived private key (hex): ${wallet.privateKey.toString(\"hex\")}`);\nconsole.log(`Depth: ${wallet.depth}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-mnemonic-security",
      children: "7.2 Mnemonic Security"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Threat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Physical theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seed phrase written on paper stolen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steel plates (Cryptosteel, Billfodl)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake wallet apps that capture seed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify app signatures, use hardware wallets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Social engineering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker poses as support asking for seed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never share seed phrase — ever"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud leak"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seed stored in iCloud/Google Drive accidentally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-factor, encrypted backup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Supply chain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-generated seed cards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate seeds on-device only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-hardware-wallets",
      children: "7.3 Hardware Wallets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hardware wallets (Ledger, Trezor, KeepKey) keep private keys in a secure enclave. Transactions are signed on-device; keys never touch the internet."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack surface:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supply chain:"
        }), " Tampered device in original packaging"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Physical access:"
        }), " Side-channel via power analysis (expert, rare)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Firmware:"
        }), " Malicious firmware update (mitigated by signed firmware)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Seed extraction:"
        }), " If attacker steals the device and knows the PIN"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-multisig-wallets-gnosis-safe",
      children: "7.4 Multisig Wallets (Gnosis Safe)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A multisig wallet requires M-of-N signatures to execute a transaction. This prevents a single compromised key from draining funds."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Gnosis Safe: 2-of-3 multisig\n        ┌─────┐\nOwner 1 ├─────┤  Sign Tx\nOwner 2 ├─────┤  Sign Tx  →  Execute\nOwner 3 └─────┘  (not required)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Social recovery: Replace a lost key via other signers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module system: Add DeFi integrations without compromising base wallet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No single point of failure: M-of-N prevents single-key compromise"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-cryptography-in-blockchain",
      children: "8. Cryptography in Blockchain"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-ecdsa-secp256k1-ed25519",
      children: "8.1 ECDSA (secp256k1, Ed25519)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Curve"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Usage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signature Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secp256k1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin, Ethereum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bytes (priv), 64 bytes (pub, uncompressed 65)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~71 bytes (DER)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard in most L1s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ed25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana, Cardano, Stellar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bytes (priv), 32 bytes (pub)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster, simpler, no malleability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLS12-381"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum 2.0, Filecoin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bytes (priv), 48/96 bytes (pub)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48/96 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature aggregation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-signature-malleability",
      children: "8.2 Signature Malleability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ECDSA signature ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(r, s)"
      }), " can be modified to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(r, -s mod n)"
      }), " while still being valid for the same message. Bitcoin's ECDSA had a high-s malleability issue exploited for transaction ID malleability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Only accept ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s <= n/2"
      }), " (low-s) signatures (BIP-0062)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ECDSA signature verification with malleability protection\nimport { createHash, createSign, createVerify } from \"crypto\";\n\ninterface ECDSASignature {\n    r: bigint;\n    s: bigint;\n    v: number; // recovery ID\n}\n\nfunction verifyLowS(sig: ECDSASignature, secp256k1n: bigint): boolean {\n    const halfN = secp256k1n >> 1n;\n    return sig.s <= halfN; // Must be low-s\n}\n\nfunction verifySignature(\n    message: string,\n    signature: ECDSASignature,\n    publicKeyHex: string\n): boolean {\n    const secp256k1n = BigInt(\"0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141\");\n    \n    if (!verifyLowS(signature, secp256k1n)) {\n        console.warn(\"Signature malleability detected: high-s rejected\");\n        return false;\n    }\n    \n    const verifier = createVerify(\"SHA256\");\n    verifier.update(message);\n    return verifier.verify(\n        { key: `-----BEGIN PUBLIC KEY-----\\n${publicKeyHex}\\n-----END PUBLIC KEY-----`, format: \"pem\" },\n        Buffer.from(signature.r.toString(16) + signature.s.toString(16), \"hex\")\n    );\n}\n\n// Replay protection via nonce/chain ID\nfunction addReplayProtection(txHash: string, chainId: number): string {\n    return createHash(\"sha256\")\n        .update(txHash + chainId.toString())\n        .digest()\n        .toString(\"hex\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-ecdsa-nonce-reuse",
      children: "8.3 ECDSA Nonce Reuse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If two signatures share the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), " (nonce), the private key can be recovered:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nk = \\frac{h_1 - h_2}{s_1 - s_2} \\quad \\text{mod } n\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world case:"
      }), " In 2013, Android's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SecureRandom"
      }), " bug caused nonce reuse in Bitcoin wallets, leaking private keys. Over $5M in BTC was stolen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function recoverPrivateKeyFromNonceReuse(\n    sig1: ECDSASignature,\n    sig2: ECDSASignature,\n    hash1: bigint,\n    hash2: bigint,\n    secp256k1n: bigint\n): bigint | null {\n    // k = (h1 - h2) / (s1 - s2) mod n\n    const diffHash = (hash1 - hash2 + secp256k1n) % secp256k1n;\n    const diffS = (sig1.s - sig2.s + secp256k1n) % secp256k1n;\n    \n    // mod inverse of diffS\n    const k = (diffHash * modInverse(diffS, secp256k1n)) % secp256k1n;\n    \n    // private key = (k * s1 - h1) / r1 mod n\n    const privateKey = ((k * sig1.s - hash1 + secp256k1n) % secp256k1n)\n        * modInverse(sig1.r, secp256k1n) % secp256k1n;\n    \n    return privateKey;\n}\n\nfunction modInverse(a: bigint, m: bigint): bigint {\n    let [old_r, r] = [a, m];\n    let [old_s, s] = [1n, 0n];\n    while (r !== 0n) {\n        const quotient = old_r / r;\n        [old_r, r] = [r, old_r - quotient * r];\n        [old_s, s] = [s, old_s - quotient * s];\n    }\n    return (old_s + m) % m;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-bls-signatures",
      children: "8.4 BLS Signatures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BLS (Boneh–Lynn–Shacham) signatures enable:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signature aggregation"
        }), ": Combine N signatures into one constant-size signature."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key aggregation"
        }), ": Combine N public keys into one."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subgroup verification"
        }), ": Verify N-of-N signatures in O(1) time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in Ethereum 2.0 for validator signature aggregation (thousands of validators per slot)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-nft-security",
      children: "9. NFT Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-metadata-integrity",
      children: "9.1 Metadata Integrity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFT metadata (image URL, attributes) is often stored off-chain. Attack vectors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metadata freeze"
        }), ": If metadata is mutable (not pinned to IPFS/Arweave), the creator can change it post-sale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image removal"
        }), ": If stored on a central server, the image can be deleted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reveal attack"
        }), ": Players mint before the reveal, then metadata shows a common item instead of rare."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secure pattern:"
      }), " Store metadata on IPFS with a content-addressed URI (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ipfs://<CID>"
      }), ") and freeze it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-royalty-enforcement",
      children: "9.2 Royalty Enforcement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["EIP-2981 standardises royalty payments, but royalties are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not enforced on-chain"
      }), " at the exchange level."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Marketplace"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Royalty Enforcement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenSea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voluntary (operator filter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only on-chain if creator uses registry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most trading volume bypasses royalties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LooksRare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero mandatory royalties"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack:"
      }), " Buy NFT on Blur (no royalty), sell on OpenSea (with royalty) — wash trading and royalty arbitrage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-token-standard-issues",
      children: "9.3 Token Standard Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ERC-721 vs ERC-1155:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ERC-721"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ERC-1155"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch transfers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Per-token ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transferFrom"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single ", (0,jsx_runtime.jsx)(_components.code, {
              children: "safeBatchTransferFrom"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reentrancy risk"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Standard ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_mint"
            }), " may call recipient"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_mint"
            }), " triggers ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onERC1155Received"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safe vs unsafe"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "safeTransferFrom"
            }), " recommended"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "safeTransferFrom"
            }), " enforced"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common audit findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whenNotPaused"
        }), " on mint functions"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Centralised owner can rug-pull (stop trading or drain)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Price oracle not bound for NFT valuation (lending protocols)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-blockchain-forensics",
      children: "10. Blockchain Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-chain-hopping-tracking",
      children: "10.1 Chain Hopping Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Attackers move funds across blockchains (L1s, bridges, DEXs) to obfuscate the trail. Forensic trace must follow:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BTC → Binance → ETH → Tornado Cash → Arbitrum → DEX → Solana → ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools:"
      }), " Chainalysis, Elliptic, CipherTrace, Dune Analytics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-taint-analysis",
      children: "10.2 Taint Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Taint analysis tracks the provenance of specific UTXOs or token amounts through the transaction graph."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Blockchain Transaction Graph Analyzer — Taint Flow Tracking\ninterface TxInput {\n    txHash: string;\n    outputIndex: number;\n    address: string;\n    amount: bigint;\n}\n\ninterface TxOutput {\n    address: string;\n    amount: bigint;\n    spent: boolean;\n}\n\ninterface Transaction {\n    hash: string;\n    inputs: TxInput[];\n    outputs: TxOutput[];\n    blockNumber: number;\n    timestamp: number;\n}\n\ninterface TaintNode {\n    address: string;\n    taintAmount: bigint;\n    totalAmount: bigint;\n    taintedInputs: string[]; // tx hashes that introduced taint\n}\n\nclass TaintAnalyzer {\n    private taintMap = new Map<string, TaintNode>();\n\n    seedTaint(address: string, amount: bigint, reason: string): void {\n        this.taintMap.set(address, {\n            address,\n            taintAmount: amount,\n            totalAmount: amount,\n            taintedInputs: [reason],\n        });\n    }\n\n    processTransaction(tx: Transaction): void {\n        // Sum taint from all inputs\n        let totalInputTaint = 0n;\n        let totalInputAmount = 0n;\n        const taintedReason: string[] = [];\n\n        for (const inp of tx.inputs) {\n            const senderTaint = this.taintMap.get(inp.address);\n            if (senderTaint && senderTaint.taintAmount > 0n) {\n                // Proportionally attribute taint\n                const proportion =\n                    Number(inp.amount) / Number(senderTaint.totalAmount);\n                const inputTaint = BigInt(\n                    Math.floor(Number(senderTaint.taintAmount) * proportion)\n                );\n                totalInputTaint += inputTaint;\n                taintedReason.push(...senderTaint.taintedInputs);\n            }\n            totalInputAmount += inp.amount;\n        }\n\n        if (totalInputTaint === 0n) return; // No taint flows through\n\n        // Distribute taint proportionally to outputs\n        for (const out of tx.outputs) {\n            if (out.amount === 0n) continue;\n            const proportion = Number(out.amount) / Number(totalInputAmount);\n            const outTaint = BigInt(Math.floor(Number(totalInputTaint) * proportion));\n\n            const existing = this.taintMap.get(out.address) || {\n                address: out.address,\n                taintAmount: 0n,\n                totalAmount: 0n,\n                taintedInputs: [],\n            };\n            existing.taintAmount += outTaint;\n            existing.totalAmount += out.amount;\n            for (const reason of taintedReason) {\n                if (!existing.taintedInputs.includes(reason)) {\n                    existing.taintedInputs.push(reason);\n                }\n            }\n            this.taintMap.set(out.address, existing);\n        }\n    }\n\n    getTaintReport(): Map<string, TaintNode> {\n        return this.taintMap;\n    }\n\n    findExchangesWithTaint(minTaint: bigint): string[] {\n        const result: string[] = [];\n        for (const [addr, node] of this.taintMap) {\n            if (node.taintAmount >= minTaint) {\n                result.push(`${addr}: ${node.taintAmount.toString()} tainted`);\n            }\n        }\n        return result;\n    }\n}\n\n// Usage\nconst analyzer = new TaintAnalyzer();\nanalyzer.seedTaint(\"0xHacker\", BigInt(1000e18), \"The DAO Exploit\");\nanalyzer.processTransaction({\n    hash: \"0xabc123\",\n    inputs: [\n        { txHash: \"0xprev\", outputIndex: 0, address: \"0xHacker\", amount: BigInt(1000e18) },\n    ],\n    outputs: [\n        { address: \"0xMixer1\", amount: BigInt(500e18), spent: false },\n        { address: \"0xExchange1\", amount: BigInt(500e18), spent: false },\n    ],\n    blockNumber: 15000000,\n    timestamp: 1700000000,\n});\nconsole.log(\"Taint report:\", analyzer.getTaintReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-deanonymization-techniques",
      children: "10.3 Deanonymization Techniques"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CoinJoin graph analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster inputs that belong to same user via common-spend heuristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CryptoNote ring signature analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trace ring members via decoy selection patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chain hopping analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track bridge deposits/withdrawals to link addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KYT (Know Your Transaction)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VASP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time screening of addresses against sanctions lists"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-know-your-transaction-kyt",
      children: "10.4 Know Your Transaction (KYT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KYT is a regulatory framework requiring VASPs (Virtual Asset Service Providers) to screen incoming/outgoing transactions against:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sanctions lists"
        }), " (OFAC, EU, UN)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Darknet markets"
        }), " (Hydra, AlphaBay successors)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mixing services"
        }), " (Tornado Cash, Sinbad)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stolen funds databases"
        }), " (Elliptic, Chainalysis)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-smart-contract-audit-checklist",
      children: "11. Smart Contract Audit Checklist"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reentrancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All external calls follow Check-Effects-Interactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Control"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "onlyOwner"
            }), " on all privileged functions"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arithmetic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SafeCast for downcasting; checked math for operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "tx.origin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never used for authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flash Loans"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State consistency if large liquidity swings occur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oracle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use multiple oracles; TWAP long enough"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Front-running"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commit-reveal or slippage bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delegatecall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage layout compatibility; no selfdestruct in library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Upgradeability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initializer protection; proxy admin secure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Token Compliance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ERC-20 return value checked; safeTransfer used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded loops; DoS via gas exhaustion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Events"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All state-changing operations emit events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Timelock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admin functions behind timelock (e.g., 48h delay)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-major-attack-technical-breakdowns",
      children: "12. Major Attack Technical Breakdowns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-dao-hack-technical-breakdown-june-2016",
      children: "12.1 DAO Hack Technical Breakdown (June 2016)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vulnerability:"
      }), " Reentrancy in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "splitDAO"
      }), " function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Attacker deployed a malicious contract that called ", (0,jsx_runtime.jsx)(_components.code, {
          children: "splitDAO"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "splitDAO"
        }), " sent ETH to the attacker's contract via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "call.value()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The attacker's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fallback()"
        }), " function re-entered ", (0,jsx_runtime.jsx)(_components.code, {
          children: "splitDAO"
        }), " before the balance was updated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each re-entry sent more ETH — totalling ", (0,jsx_runtime.jsx)(_components.del, {
          children: "3.6M ETH ("
        }), "$60M at the time)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Aftermath:"
      }), " Ethereum hard-forked at block 1,920,000 to reverse the theft. The original chain (Ethereum Classic) refused."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-bzx-flash-loan-attack-feb-2020",
      children: "12.2 bZx Flash Loan Attack (Feb 2020)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Protocol:"
      }), " bZx (lending protocol on Ethereum)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exploit anatomy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flash loan 10,000 ETH from dYdX."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deposit 5,500 ETH as collateral on bZx."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Borrow 112 BTC (worth ~$1M at the time) against the collateral."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the borrowed BTC to manipulate the Kyber Uniswap ETH/BTC price."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The manipulated price triggered margin calls on bZx, profiting the attacker."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repay flash loan. Profit: ~$350K."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-harvest-finance-attack-oct-2020",
      children: "12.3 Harvest Finance Attack (Oct 2020)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Protocol:"
      }), " Harvest Finance (yield optimiser on Curve)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exploit anatomy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flash loan 90M USDC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deposit into Harvest's Curve USDC pool — inflating the share price."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deposit a small amount of USDC at the inflated share price."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Withdraw — the small deposit redeemed far more than expected."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repay flash loan. Profit: ~$24M."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root cause:"
      }), " The share price was calculated using the pool balance without accounting for the flash loan deposit artificially inflating it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-ronin-bridge-timeline",
      children: "12.4 Ronin Bridge Timeline"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nov 2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ronin bridge goes live for Axie Infinity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mar 23, 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker compromises 5/9 validator keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mar 29, 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User reports inability to withdraw 5,000 ETH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mar 29, 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team discovers $625M exploit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apr 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US Treasury sanctions Lazarus Group (North Korea)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jun 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sky Mavis raises $150M to reimburse users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nov 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ronin bridge reopens with new security"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-typescript-implementation-examples",
      children: "13. TypeScript Implementation Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-block-header-validator",
      children: "13.1 Block Header Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Block Header Validator — verify PoW difficulty and merkle root\nimport { createHash } from \"crypto\";\n\ninterface BlockHeader {\n    version: number;\n    previousBlockHash: string;\n    merkleRoot: string;\n    timestamp: number;\n    bits: number;      // Compact difficulty target\n    nonce: number;\n}\n\nfunction hashBlockHeader(header: BlockHeader): string {\n    const data =\n        header.version.toString(16).padStart(8, \"0\") +\n        header.previousBlockHash +\n        header.merkleRoot +\n        header.timestamp.toString(16).padStart(8, \"0\") +\n        header.bits.toString(16).padStart(8, \"0\") +\n        header.nonce.toString(16).padStart(8, \"0\");\n    return createHash(\"sha256\")\n        .update(createHash(\"sha256\").update(Buffer.from(data, \"hex\")).digest())\n        .digest()\n        .toString(\"hex\");\n}\n\nfunction validatePoW(header: BlockHeader): boolean {\n    const hash = hashBlockHeader(header);\n    const target = calculateTarget(header.bits);\n    const hashBigInt = BigInt(\"0x\" + hash);\n    return hashBigInt <= target;\n}\n\nfunction calculateTarget(bits: number): bigint {\n    const exponent = bits >> 24;\n    const mantissa = bits & 0x7fffff;\n    return BigInt(mantissa) << BigInt(8 * (exponent - 3));\n}\n\nfunction computeMerkleRoot(txHashes: string[]): string {\n    if (txHashes.length === 0) return \"\";\n    let layer = txHashes.map((h) =>\n        Buffer.from(h, \"hex\")\n    );\n    while (layer.length > 1) {\n        const newLayer: Buffer[] = [];\n        for (let i = 0; i < layer.length; i += 2) {\n            const left = layer[i];\n            const right = i + 1 < layer.length ? layer[i + 1] : left;\n            const concat = createHash(\"sha256\")\n                .update(createHash(\"sha256\").update(Buffer.concat([left, right])).digest())\n                .digest();\n            newLayer.push(concat);\n        }\n        layer = newLayer;\n    }\n    return layer[0].toString(\"hex\");\n}\n\n// Test\nconst header: BlockHeader = {\n    version: 1,\n    previousBlockHash:\n        \"0000000000000000000089c89ad1c2c6c3f5b30cd5ecbef14cdb0f173edbe75c\",\n    merkleRoot: \"0xabc\",\n    timestamp: 1700000000,\n    bits: 0x1d00ffff,\n    nonce: 3456789,\n};\nconsole.log(`Block hash: ${hashBlockHeader(header)}`);\nconsole.log(`PoW valid: ${validatePoW(header)}`);\n\nconst txs = [\"tx1hash\", \"tx2hash\", \"tx3hash\", \"tx4hash\"];\nconsole.log(`Merkle root: ${computeMerkleRoot(txs)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-smart-contract-vulnerability-scanner",
      children: "13.2 Smart Contract Vulnerability Scanner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Smart Contract Vulnerability Scanner\ninterface Vulnerability {\n    type: string;\n    severity: \"Critical\" | \"High\" | \"Medium\" | \"Low\";\n    line: number;\n    description: string;\n}\n\ninterface FunctionDef {\n    name: string;\n    body: string;\n    modifiers: string[];\n    stateMutability: string;\n}\n\ninterface ContractSource {\n    name: string;\n    functions: FunctionDef[];\n    sourceCode: string;\n}\n\nclass SolidityVulnScanner {\n    scan(contract: ContractSource): Vulnerability[] {\n        const findings: Vulnerability[] = [];\n        \n        // Check for .call{value: ...}(\"\") without state update before\n        this._checkReentrancy(contract, findings);\n        \n        // Check for unchecked arithmetic blocks\n        this._checkUncheckedMath(contract, findings);\n        \n        // Check for tx.origin usage\n        this._checkTxOrigin(contract, findings);\n        \n        // Check for selfdestruct\n        this._checkSelfdestruct(contract, findings);\n        \n        // Check for dangerous delegatecall\n        this._checkDelegatecall(contract, findings);\n        \n        // Check for floating pragma\n        this._checkFloatingPragma(contract, findings);\n        \n        return findings;\n    }\n    \n    private _addFinding(\n        findings: Vulnerability[],\n        type: string,\n        severity: Vulnerability[\"severity\"],\n        line: number,\n        description: string\n    ): void {\n        findings.push({ type, severity, line, description });\n    }\n    \n    private _checkReentrancy(\n        contract: ContractSource,\n        findings: Vulnerability[]\n    ): void {\n        const lines = contract.sourceCode.split(\"\\n\");\n        const reentrancyPattern =\n            /\\.call\\s*\\{[^}]*value\\s*:[^}]*\\}\\s*\\([^)]*\\)/g;\n        for (let i = 0; i < lines.length; i++) {\n            if (reentrancyPattern.test(lines[i])) {\n                // Check if state update follows\n                let hasStateUpdateAfter = false;\n                for (let j = i + 1; j < Math.min(i + 10, lines.length); j++) {\n                    if (\n                        /(balances\\[|_mint|_burn|_transfer|\\.push|state\\w+\\s*=)/.test(\n                            lines[j]\n                        )\n                    ) {\n                        hasStateUpdateAfter = true;\n                        break;\n                    }\n                }\n                if (hasStateUpdateAfter) {\n                    this._addFinding(\n                        findings,\n                        \"Reentrancy\",\n                        \"High\",\n                        i + 1,\n                        \"External call before state update — potential reentrancy\"\n                    );\n                }\n            }\n        }\n    }\n    \n    private _checkUncheckedMath(\n        contract: ContractSource,\n        findings: Vulnerability[]\n    ): void {\n        const lines = contract.sourceCode.split(\"\\n\");\n        for (let i = 0; i < lines.length; i++) {\n            if (\n                /unchecked\\s*\\{/.test(lines[i]) &&\n                /(--|\\+\\+|[-+*\\/%]=)/.test(lines[i + 1] || \"\")\n            ) {\n                this._addFinding(\n                    findings,\n                    \"Unchecked Arithmetic\",\n                    \"Medium\",\n                    i + 1,\n                    \"Unchecked block with arithmetic — potential overflow/underflow\"\n                );\n            }\n        }\n    }\n    \n    private _checkTxOrigin(\n        contract: ContractSource,\n        findings: Vulnerability[]\n    ): void {\n        const lines = contract.sourceCode.split(\"\\n\");\n        for (let i = 0; i < lines.length; i++) {\n            if (\n                /tx\\.origin/.test(lines[i]) &&\n                /require|if|==|!=/.test(lines[i])\n            ) {\n                this._addFinding(\n                    findings,\n                    \"tx.origin Authentication\",\n                    \"Critical\",\n                    i + 1,\n                    \"tx.origin used for authentication — use msg.sender instead\"\n                );\n            }\n        }\n    }\n    \n    private _checkSelfdestruct(\n        contract: ContractSource,\n        findings: Vulnerability[]\n    ): void {\n        const lines = contract.sourceCode.split(\"\\n\");\n        for (let i = 0; i < lines.length; i++) {\n            if (/selfdestruct\\s*\\(/.test(lines[i])) {\n                this._addFinding(\n                    findings,\n                    \"Selfdestruct\",\n                    \"High\",\n                    i + 1,\n                    \"selfdestruct present — contract can be destroyed\"\n                );\n            }\n        }\n    }\n    \n    private _checkDelegatecall(\n        contract: ContractSource,\n        findings: Vulnerability[]\n    ): void {\n        const lines = contract.sourceCode.split(\"\\n\");\n        for (let i = 0; i < lines.length; i++) {\n            if (/delegatecall/.test(lines[i])) {\n                this._addFinding(\n                    findings,\n                    \"Delegatecall\",\n                    \"High\",\n                    i + 1,\n                    \"delegatecall used — verify storage compatibility and target trust\"\n                );\n            }\n        }\n    }\n    \n    private _checkFloatingPragma(\n        contract: ContractSource,\n        findings: Vulnerability[]\n    ): void {\n        const lines = contract.sourceCode.split(\"\\n\");\n        for (let i = 0; i < lines.length; i++) {\n            if (/pragma\\s+solidity\\s+\\^/.test(lines[i])) {\n                this._addFinding(\n                    findings,\n                    \"Floating Pragma\",\n                    \"Low\",\n                    i + 1,\n                    \"Floating pragma — lock to specific compiler version\"\n                );\n            }\n        }\n    }\n}\n\n// Test\nconst scanner = new SolidityVulnScanner();\nconst vulnContract: ContractSource = {\n    name: \"VulnerableBank\",\n    functions: [\n        { name: \"withdraw\", body: \"\", modifiers: [], stateMutability: \"nonpayable\" },\n    ],\n    sourceCode: `contract VulnerableBank {\n    mapping(address => uint) public balances;\n    \n    function withdraw(uint amount) public {\n        require(balances[msg.sender] >= amount);\n        (bool sent, ) = msg.sender.call{value: amount}(\"\");\n        require(sent);\n        balances[msg.sender] -= amount;\n    }\n    \n    function isOwner() public view returns (bool) {\n        return tx.origin == owner;\n    }\n    \n    function destroy() public onlyOwner {\n        selfdestruct(payable(owner));\n    }\n    \n    function fastMath(uint a, uint b) public pure returns (uint) {\n        unchecked {\n            uint c = a + b;\n            return c + 1;\n        }\n    }\n}`,\n};\n\nconst results = scanner.scan(vulnContract);\nconsole.log(\"Vulnerability scan results:\");\nfor (const v of results) {\n    console.log(`  [${v.severity}] ${v.type} (line ${v.line}): ${v.description}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-flash-loan-attack-simulator",
      children: "13.3 Flash Loan Attack Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Flash Loan Attack Simulator — arbitrage between two AMMs\ninterface SimAMMPool {\n    name: string;\n    reserveA: bigint;  // Token A reserve\n    reserveB: bigint;  // Token B reserve\n}\n\nfunction simulateSwap(\n    pool: SimAMMPool,\n    amountIn: bigint,\n    tokenAIn: boolean\n): { amountOut: bigint; newPool: SimAMMPool } {\n    const reserveIn = tokenAIn ? pool.reserveA : pool.reserveB;\n    const reserveOut = tokenAIn ? pool.reserveB : pool.reserveA;\n    \n    const amountInWithFee = amountIn * BigInt(997); // 0.3% fee\n    const numerator = amountInWithFee * reserveOut;\n    const denominator = reserveIn * BigInt(1000) + amountInWithFee;\n    const amountOut = numerator / denominator;\n    \n    const newPool = tokenAIn\n        ? { ...pool, reserveA: reserveIn + amountIn, reserveB: reserveOut - amountOut }\n        : { ...pool, reserveA: reserveOut - amountOut, reserveB: reserveIn + amountIn };\n    \n    return { amountOut, newPool };\n}\n\nfunction flashLoanArbitrage(\n    poolA: SimAMMPool,\n    poolB: SimAMMPool,\n    borrowAmount: bigint\n): bigint {\n    // Step 1: Swap borrow on Pool A (e.g., Token A → Token B)\n    const { amountOut: tokenBFromA, newPool: poolA2 } = simulateSwap(poolA, borrowAmount, true);\n    \n    // Step 2: Swap Token B back to Token A on Pool B\n    const { amountOut: tokenARepaid, newPool: poolB2 } = simulateSwap(poolB, tokenBFromA, false);\n    \n    console.log(`Borrowed: ${borrowAmount} A`);\n    console.log(`Swapped A→B on ${poolA.name}: ${tokenBFromA} B`);\n    console.log(`Swapped B→A on ${poolB.name}: ${tokenARepaid} A`);\n    \n    const profit = tokenARepaid - borrowAmount;\n    const flashLoanFee = borrowAmount / BigInt(10000); // 0.01% fee (e.g., dYdX)\n    const netProfit = profit - flashLoanFee;\n    \n    if (netProfit > 0n) {\n        console.log(`Arbitrage profitable! Net profit: ${netProfit} A`);\n    } else {\n        console.log(`No arbitrage opportunity. Net profit: ${netProfit} A`);\n    }\n    \n    return netProfit;\n}\n\n// Test: Two pools with different prices\n// Pool A: 1000 A, 1000 B → price 1:1\n// Pool B: 800 A, 1000 B → price 1 A = 1.25 B (more expensive A on Pool B)\nconst poolA: SimAMMPool = { name: \"UniswapV3\", reserveA: BigInt(1000e18), reserveB: BigInt(1000e18) };\nconst poolB: SimAMMPool = { name: \"SushiSwap\", reserveA: BigInt(800e18), reserveB: BigInt(1000e18) };\n\nconst profit = flashLoanArbitrage(poolA, poolB, BigInt(100e18));\nconsole.log(`Final profit: ${profit} wei`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-mev-sandwich-attack-calculator",
      children: "13.4 MEV Sandwich Attack Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// MEV Sandwich Attack Calculator\ninterface SandwichPool {\n    reserveIn: bigint;\n    reserveOut: bigint;\n}\n\nfunction calculateSandwichProfit(\n    pool: SandwichPool,\n    victimAmount: bigint,\n    frontRunAmount: bigint,\n    feeBps: number = 30, // 0.3% default\n    backRunSlippage: number = 0.005 // 0.5% buffer\n): {\n    profit: bigint;\n    frontRunOut: bigint;\n    victimOut: bigint;\n    backRunOut: bigint;\n    priceImpactVictim: number;\n} {\n    const feeMultiplier = BigInt(10000 - feeBps);\n    \n    // Helper: getAmountOut given reserves\n    function getOut(ri: bigint, ro: bigint, ai: bigint): bigint {\n        const aiWithFee = (ai * feeMultiplier) / BigInt(10000);\n        const numerator = aiWithFee * ro;\n        const denominator = ri + aiWithFee;\n        return numerator / denominator;\n    }\n    \n    // 1. Front-run: buy before victim\n    const frontRunOut = getOut(pool.reserveIn, pool.reserveOut, frontRunAmount);\n    let rIn = pool.reserveIn + frontRunAmount;\n    let rOut = pool.reserveOut - frontRunOut;\n    \n    // 2. Victim swap\n    const victimOut = getOut(rIn, rOut, victimAmount);\n    rIn += victimAmount;\n    rOut -= victimOut;\n    const priceImpact = 1 - Number(rOut * BigInt(1e18) / rIn) / Number(pool.reserveOut * BigInt(1e18) / pool.reserveIn);\n    \n    // 3. Back-run: sell what we bought\n    const backRunOut = getOut(rOut, rIn, frontRunOut - (frontRunOut * BigInt(Math.floor(backRunSlippage * 10000)) / BigInt(10000)));\n    \n    const profit = backRunOut - frontRunAmount;\n    \n    return {\n        profit: profit > 0n ? profit : 0n,\n        frontRunOut,\n        victimOut,\n        backRunOut,\n        priceImpactVictim: priceImpact * 100,\n    };\n}\n\n// Pool: 500 ETH / 1,000,000 USDC\nconst pool: SandwichPool = {\n    reserveIn: BigInt(500e18),    // ETH\n    reserveOut: BigInt(1_000_000e6), // USDC (6 decimals)\n};\n\nconst result = calculateSandwichProfit(\n    pool,\n    BigInt(100e18),  // Victim buys 100 ETH\n    BigInt(50e18)    // Front-run with 50 ETH\n);\n\nconsole.log(\"Sandwich Attack Profit Analysis:\");\nconsole.log(`  Front-run output: ${Number(result.frontRunOut) / 1e6} USDC`);\nconsole.log(`  Victim output: ${Number(result.victimOut) / 1e6} USDC`);  \nconsole.log(`  Price impact on victim: ${result.priceImpactVictim.toFixed(2)}%`);\nconsole.log(`  Back-run output: ${Number(result.backRunOut) / 1e18} ETH`);\nconsole.log(`  Estimated profit: ${Number(result.profit) / 1e18} ETH`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "135-amm-price-impact-calculator",
      children: "13.5 AMM Price Impact Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// AMM Price Impact Calculator\nfunction ammPriceImpact(\n    reserveA: bigint,\n    reserveB: bigint,\n    tradeAmount: bigint,\n    isTokenAIn: boolean\n): {\n    priceBefore: number;\n    priceAfter: number;\n    priceImpactPct: number;\n    amountOut: bigint;\n    effectivePrice: number;\n} {\n    const ri = isTokenAIn ? reserveA : reserveB;\n    const ro = isTokenAIn ? reserveB : reserveA;\n    \n    const priceBefore = Number(ro) / Number(ri);\n    \n    const amountInWithFee = (tradeAmount * BigInt(997)) / BigInt(1000);\n    const amountOut = (amountInWithFee * ro) / (ri + amountInWithFee);\n    \n    const riAfter = ri + tradeAmount;\n    const roAfter = ro - amountOut;\n    const priceAfter = Number(roAfter) / Number(riAfter);\n    \n    const priceImpactPct = Math.abs((priceAfter - priceBefore) / priceBefore) * 100;\n    const effectivePrice = Number(tradeAmount) / Number(amountOut);\n    \n    return {\n        priceBefore,\n        priceAfter,\n        priceImpactPct,\n        amountOut,\n        effectivePrice,\n    };\n}\n\nconst daiPool = { reserveA: BigInt(10_000_000e18), reserveB: BigInt(10_000_000e18) };\n\nconst smallTrade = ammPriceImpact(\n    daiPool.reserveA, daiPool.reserveB, BigInt(100e18), true\n);\nconsole.log(`Small trade (100 DAI →): Impact ${smallTrade.priceImpactPct.toFixed(4)}%`);\n\nconst largeTrade = ammPriceImpact(\n    daiPool.reserveA, daiPool.reserveB, BigInt(5_000_000e18), true\n);\nconsole.log(`Large trade (5M DAI →): Impact ${largeTrade.priceImpactPct.toFixed(2)}%`);\n// Demonstrates why large swaps are vulnerable to MEV\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "136-signature-verification-ecdsa-replay-protection",
      children: "13.6 Signature Verification (ECDSA Replay Protection)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ECDSA Signature Verification with Replay Protection\nimport { createHash, randomBytes } from \"crypto\";\n\ninterface SecureTx {\n    to: string;\n    value: bigint;\n    nonce: number;       // Prevents replay on same chain\n    chainId: number;     // Prevents replay across chains (EIP-155)\n    gasLimit: number;\n    data: string;\n}\n\nfunction hashTransaction(tx: SecureTx): string {\n    const encoded =\n        tx.to +\n        tx.value.toString(16).padStart(64, \"0\") +\n        tx.nonce.toString(16).padStart(64, \"0\") +\n        tx.chainId.toString(16) +\n        tx.gasLimit.toString(16) +\n        tx.data;\n    \n    return createHash(\"keccak256\")\n        .update(Buffer.from(encoded, \"hex\"))\n        .digest()\n        .toString(\"hex\");\n}\n\nfunction verifyAndRecoverSigner(\n    tx: SecureTx,\n    signatureR: string,\n    signatureS: string,\n    recoveryId: number\n): string | null {\n    const txHash = hashTransaction(tx);\n    \n    // In production: use elliptic curve library\n    // e.g., ethers.js: ethers.utils.recoverAddress(txHash, { r, s, v })\n    // This is a structural demonstration\n    \n    // Replay protection checks:\n    if (tx.chainId === 0) {\n        console.warn(\"No chain ID — transaction replayable across chains!\");\n        return null;\n    }\n    if (tx.nonce < 0) {\n        console.warn(\"Invalid nonce\");\n        return null;\n    }\n    \n    console.log(`Transaction hash: ${txHash}`);\n    console.log(`Recovery ID: ${recoveryId}`);\n    console.log(`Chain ID: ${tx.chainId} — replay protection active`);\n    \n    // Return recovered address (simplified)\n    return `0xRecoveredAddress_${recoveryId}`;\n}\n\n// Usage\nconst tx: SecureTx = {\n    to: \"0xRecipient\",\n    value: BigInt(1e18),\n    nonce: 42,\n    chainId: 1, // Ethereum mainnet — prevents replay on Goerli, Polygon, etc.\n    gasLimit: 21000,\n    data: \"0x\",\n};\n\nconst signer = verifyAndRecoverSigner(tx, \"0xr\", \"0xs\", 27);\nconsole.log(`Signer: ${signer}`);\n"
      })
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
            children: "Apply Check-Effects-Interactions to prevent reentrancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always update contract state before making external calls; use OpenZeppelin's ReentrancyGuard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use hardware security keys (FIDO2) for all crypto accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store seed phrases on steel plates; use Ledger/Trezor for transaction signing; never type seed online"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audit smart contracts for tx.origin and delegatecall misuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run the SolidityVulnScanner on all contracts before deployment; never use tx.origin for auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use multiple oracles with long TWAP windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine Chainlink, MakerOSM, and Tellor; set TWAP to 30+ minutes to resist flash loan manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement multisig wallets for all protocol treasuries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy Gnosis Safe with 3-of-5 signers; require hardware-wallet signatures for all admin transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy circuit breakers and timelocks on admin functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add 48-hour timelock delays to all privileged operations; implement pause/unpause for emergency stops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor mempool for front-running and MEV attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Flashbots RPC for private transaction submission; set tight slippage bounds on swaps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blockchain, smart contract, and DeFi security span a unique attack surface where economic incentives, cryptographic primitives, and software correctness converge. Key takeaways:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary Threats"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Defensive Strategies"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consensus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51%, selfish mining, long-range attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High hash rate/stake, finality gadgets, checkpoints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Smart Contracts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reentrancy, overflow, access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check-Effects-Interactions, SafeMath, OpenZeppelin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DeFi"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMM manipulation, MEV, oracle attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TWAP oracles, slippage bounds, circuit breakers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross-chain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge validator compromise, spoofed messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Light-client verification, threshold signatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wallet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seed theft, phishing, compromised RNG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware wallets, multisig, BIP44 derivation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cryptography"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nonce reuse, malleability, curve attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic nonces (RFC 6979), low-s validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NFT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata mutability, royalty bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPFS pinning, on-chain metadata, EIP-2981"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forensics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taint tracking, chain hopping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph analysis, KYT screening, clustering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Over $7B has been lost to blockchain security exploits since 2016. Understanding these attack vectors is essential for every blockchain developer, security auditor, and DeFi participant."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-10-mcq",
      children: "Chapter Quiz (10 MCQ)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "What percentage of hash rate does an attacker need for selfish mining to become more profitable than honest mining?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In PBFT consensus, how many Byzantine nodes can be tolerated with 7 nodes?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the following is the correct mitigation for reentrancy attacks?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use tx.origin for authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update state before making external calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use delegatecall instead of call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase gas limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the constant product formula used by Uniswap?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x + y = k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x × y = k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x² + y² = k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x − y = k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which attack involves buying an asset before a victim's transaction executes and selling immediately after?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash loan attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sandwich attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-range attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eclipse attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In Solidity, which of the following is safer for authentication?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tx.origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msg.sender"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "block.coinbase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "address(this)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What was the root cause of the 2017 Parity Wallet hack that froze $280M?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reentrancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploitable delegatecall to a selfdestructed library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51% attack on Ethereum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Ronin bridge hack ($625M) was caused by:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A smart contract reentrancy bug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compromise of 5 out of 9 validator keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An oracle manipulation attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A flash loan attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the BIP44 derivation path for an Ethereum account?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m/44'/0'/0'/0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m/44'/60'/0'/0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m/60'/44'/0'/0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m/0'/44'/60'/0/0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which cryptographic vulnerability allowed recovery of Bitcoin private keys from Android wallets in 2013?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature malleability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA nonce reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak SHA-256 collision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merkle tree second preimage attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "theory",
        children: "Theory"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Double-Spend Probability."
            }), " An attacker controls 15% of the total hash rate on a PoW chain. Calculate the probability of successfully double-spending after 3, 6, and 12 confirmations using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "doubleSpendProbability"
            }), ". At what confirmation depth does the probability drop below 10⁻⁶?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "51% Attack Cost Estimation."
            }), " Assume a blockchain has a total hash rate of 100 PH/s. Mining hardware costs $50 per TH/s per day (rental). How much would it cost to sustain a 51% attack for 6 hours? Include a 20% safety margin for variance."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Reentrancy Identification."
            }), " The following Solidity snippet has a security vulnerability. Identify it, explain the exploit, and write the corrected code:"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "function redeem(uint256 amount) external {\n    require(balances[msg.sender] >= amount);\n    uint256 reward = amount / 100;\n    (bool ok, ) = msg.sender.call{value: amount + reward}(\"\");\n    require(ok, \"transfer failed\");\n    balances[msg.sender] -= amount;\n    totalRewards -= reward;\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "4",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bridge Trust Model Analysis."
          }), " Compare the trust assumptions of a validator-set bridge (e.g., Wormhole) versus an optimistic bridge (e.g., Nomad). For each, describe a realistic attack scenario and its probability."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "application-hands-on",
        children: "Application (Hands-On)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "5",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Vulnerability Scanner Extension."
            }), " Extend the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SolidityVulnScanner"
            }), " from §13.2 with a new check for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "unprotected initializer functions"
            }), " (detect ", (0,jsx_runtime.jsx)(_components.code, {
              children: "initialize"
            }), " functions without an ", (0,jsx_runtime.jsx)(_components.code, {
              children: "initializer"
            }), " modifier). Write the TypeScript check and test it against a sample contract."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Flash Loan Simulator — Three-Pool Arbitrage."
            }), " Extend the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "flashLoanArbitrage"
            }), " function from §13.3 to handle three AMM pools. Given:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Pool A: 2000 USDC / 1 ETH"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Pool B: 1800 USDC / 1 ETH"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Pool C: 1 USDC / 1 USDT (stable swap)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Find the optimal route for a 500 USDC flash loan that maximises profit."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Taint Analysis — Multi-Hop Trace."
            }), " Using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TaintAnalyzer"
            }), " from §11.2, simulate a three-hop taint flow:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Hacker sends 100 ETH to Mixer A."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Mixer A sends 50 ETH to Exchange 1 and 50 ETH to Exchange 2."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Exchange 2 sends 25 ETH to Exchange 1."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Compute the final taint amounts at Exchanges 1 and 2. Which address has the highest taint concentration?"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "challenge-advanced",
        children: "Challenge (Advanced)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "8",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BIP32 HD Wallet — Path Derivation & Address Generation."
            }), " Implement a full BIP44 derivation that generates the first 5 Ethereum addresses from a mnemonic. For each address, output the derivation path, public key (uncompressed hex), and address (keccak256 of the public key, last 20 bytes). Use the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "crypto"
            }), " module for HMAC-SHA512 and PBKDF2."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MEV Sandwich Simulator — Optimisation."
            }), " Given the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "calculateSandwichProfit"
            }), " function from §13.4, write a solver that finds the optimal front-run amount (0.1 ETH to 50 ETH) that maximises attacker profit, assuming:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Pool reserves: 500 ETH / 1,000,000 USDC"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Victim amount: 100 ETH"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Gas cost: 0.01 ETH (subtract from profit)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Report the optimal front-run amount and the net profit."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Smart Contract Audit Report."
            }), " Perform a complete audit of the following minimal lending protocol using the checklist from §12. For each finding, provide:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Type and severity"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Line number and description"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Code snippet of vulnerability"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Recommended fix"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "contract SimpleLender {\n    mapping(address => uint) public deposits;\n    address public owner;\n    \n    function deposit() external payable {\n        deposits[msg.sender] += msg.value;\n    }\n    \n    function withdraw(uint amount) external {\n        require(deposits[msg.sender] >= amount);\n        (bool ok, ) = msg.sender.call{value: amount}(\"\");\n        require(ok);\n        deposits[msg.sender] -= amount;\n    }\n    \n    function setOwner(address newOwner) external {\n        owner = newOwner;\n    }\n    \n    function emergencyWithdraw() external {\n        require(msg.sender == owner);\n        selfdestruct(payable(owner));\n    }\n}\n"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mastering Ethereum (Antonopoulos & Wood), Ch. 9 — Smart Contract Security"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OWASP Smart Contract Top 10"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trail of Bits: \"Ethereum Security Deterministic Audit Guide\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Samczsun's Smart Contract Security Research"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flashbots: MEV Research"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chainalysis: Blockchain Forensics Reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rekt.news: DeFi Exploit Database"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Chapter 19"
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