"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32185],{

/***/ 45079
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_blockchain_08_defi_md_58a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-blockchain-08-defi-md-58a.json
const site_docs_courses_blockchain_08_defi_md_58a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/blockchain/08-defi","title":"Chapter 8: Decentralized Finance (DeFi)","description":"Previous Decentralized Applications (dApps) | Next Enterprise Blockchain","source":"@site/docs/courses/blockchain/08-defi.md","sourceDirName":"courses/blockchain","slug":"/blockchain/08-defi","permalink":"/ai-engineering-journey/blockchain/08-defi","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-defi","slug":"/blockchain/08-defi","title":"Chapter 8: Decentralized Finance (DeFi)","sidebar_label":"Chapter 8: Decentralized Finance (DeFi)","sidebar_position":8},"sidebar":"course-blockchain","previous":{"title":"Chapter 7: Decentralized Applications (dApps)","permalink":"/ai-engineering-journey/blockchain/07-dapps"},"next":{"title":"Chapter 9: Enterprise Blockchain","permalink":"/ai-engineering-journey/blockchain/09-enterprise"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/blockchain/08-defi.md


const frontMatter = {
	id: '08-defi',
	slug: '/blockchain/08-defi',
	title: 'Chapter 8: Decentralized Finance (DeFi)',
	sidebar_label: 'Chapter 8: Decentralized Finance (DeFi)',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Decentralized Finance (DeFi)';

const assets = {

};



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
  "value": "What is DeFi?",
  "id": "what-is-defi",
  "level": 3
}, {
  "value": "Automated Market Makers (AMM)",
  "id": "automated-market-makers-amm",
  "level": 3
}, {
  "value": "Impermanent Loss",
  "id": "impermanent-loss",
  "level": 3
}, {
  "value": "Lending Protocols",
  "id": "lending-protocols",
  "level": 3
}, {
  "value": "Stablecoin Types",
  "id": "stablecoin-types",
  "level": 3
}, {
  "value": "Yield Farming",
  "id": "yield-farming",
  "level": 3
}, {
  "value": "Flash Loans",
  "id": "flash-loans",
  "level": 3
}, {
  "value": "DeFi Composability (Money Legos)",
  "id": "defi-composability-money-legos",
  "level": 3
}, {
  "value": "DAO Governance",
  "id": "dao-governance",
  "level": 3
}, {
  "value": "NFTs and Marketplaces",
  "id": "nfts-and-marketplaces",
  "level": 3
}, {
  "value": "DeFi Risks",
  "id": "defi-risks",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Trading on Uniswap",
  "id": "example-1-trading-on-uniswap",
  "level": 3
}, {
  "value": "Example 2: Collateralized Debt Position (CDP)",
  "id": "example-2-collateralized-debt-position-cdp",
  "level": 3
}, {
  "value": "Example 3: Impermanent Loss Simulation",
  "id": "example-3-impermanent-loss-simulation",
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
  "value": "TypeScript: AMM Constant Product Simulator",
  "id": "typescript-amm-constant-product-simulator",
  "level": 3
}, {
  "value": "TypeScript: Liquidity Pool Simulator",
  "id": "typescript-liquidity-pool-simulator",
  "level": 3
}, {
  "value": "TypeScript: Impermanent Loss Calculator",
  "id": "typescript-impermanent-loss-calculator",
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
        id: "chapter-8-decentralized-finance-defi",
        children: "Chapter 8: Decentralized Finance (DeFi)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/07-dapps",
          children: "Chapter 7: Decentralized Applications (dApps)"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/09-enterprise",
          children: "Chapter 9: Enterprise Blockchain"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the core components of the DeFi ecosystem (AMMs, lending, yield farming)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Automated Market Makers and the constant product formula"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe stablecoin types and their risk profiles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze yield farming strategies and impermanent loss"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain flash loan mechanics and their dual nature (tool vs weapon)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand DAO governance models and treasury management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe NFT standards, marketplaces, and use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify DeFi risks including oracle manipulation, liquidation, and smart contract bugs"
      }), "\n"]
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
            children: "DeFi Ecosystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial services without intermediaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built entirely on smart contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x × y = k constant product formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No order book needed, but price slippage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stablecoins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fiat-backed, crypto-collateralized, algorithmic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each type has different trust assumptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Yield Farming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moving assets across protocols for returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High APY but high risk, impermanent loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flash Loans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncollateralized loans within one transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Powerful tool; also exploited in attacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAOs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralized autonomous organizations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token-based governance and voting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFTs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-fungible tokens for digital ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Art, music, gaming, real-world assets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[DeFi Overview] --> B[AMM & Uniswap]\n    B --> C[Lending Protocols]\n    C --> D[Stablecoins]\n    D --> E[Yield Farming]\n    E --> F[Flash Loans]\n    F --> G[DAOs & Governance]\n    G --> H[NFTs & Markets]\n    H --> I[DeFi Risks & Security]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-defi",
      children: "What is DeFi?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DeFi is an ecosystem of financial applications built on top of blockchain networks. It aims to recreate traditional financial services (Lending, Borrowing, Trading, Insurance) in a decentralized, permissionless, and transparent manner."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph DeFiEcosystem[\"DeFi Ecosystem\"]\n        DEX[\"DEX<br/>Uniswap, Curve\"]\n        Lending[\"Lending<br/>Aave, Compound\"]\n        Stablecoins[\"Stablecoins<br/>DAI, USDC\"]\n        Yield[\"Yield Aggregators<br/>Yearn\"]\n        Derivatives[\"Derivatives<br/>Synthetix\"]\n        Insurance[\"Insurance<br/>Nexus Mutual\"]\n    end\n    \n    DEX --> Lending\n    DEX --> Stablecoins\n    Lending --> Yield\n    Stablecoins --> Yield\n    DEX --> Derivatives\n    Lending --> Insurance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key metrics (2024-2025):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total Value Locked (TVL): $50-100B+"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Daily DEX volume: $5-15B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Active DeFi users: 5-10M+"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Major chains: Ethereum, Solana, Arbitrum, Optimism, Base"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-market-makers-amm",
      children: "Automated Market Makers (AMM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AMMs replace traditional order books. Instead of matching buyers and sellers, users trade against a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Liquidity Pool"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph TraditionalDEX[\"Traditional Order Book\"]\n        Buyers[\"Buyers: Bid $2000\"]\n        Sellers[\"Sellers: Ask $2010\"]\n        Match[\"Match engine pairs orders\"]\n    end\n    subgraph AMM[\"Automated Market Maker\"]\n        Pool[\"Liquidity Pool<br/>10 ETH + 20,000 USDC\"]\n        Formula[\"x × y = k<br/>10 × 20,000 = 200,000\"]\n        Trade[\"Trade: 1 ETH ? get USDC<br/>New pool: 11 ETH + 18,181 USDC<br/>Trader receives: 1,818 USDC\"]\n    end\n    \n    Buyers --> Match\n    Sellers --> Match\n    Pool --> Formula\n    Formula --> Trade\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Constant Product Formula:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x × y = k"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " are the quantities of two tokens in the pool"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "k"
        }), " must remain constant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you buy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), ", its price increases (because its quantity in the pool decreases)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Price impact calculation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function calculateOutput(\n    inputAmount: number,\n    inputReserve: number,\n    outputReserve: number\n): number {\n    // Constant product: x * y = k\n    // New input reserve: inputReserve + inputAmount\n    // New output reserve: k / (inputReserve + inputAmount)\n    // Output = outputReserve - new output reserve\n    const inputWithFee = inputAmount * 0.997;  // 0.3% fee\n    const k = inputReserve * outputReserve;\n    const newInputReserve = inputReserve + inputWithFee;\n    const newOutputReserve = k / newInputReserve;\n    return outputReserve - newOutputReserve;\n}\n\n// Example: ETH/USDC pool (10 ETH, 20,000 USDC)\nconst output = calculateOutput(1, 10, 20000);\nconsole.log(`1 ETH ? ${output.toFixed(2)} USDC`);  // ~1,818 USDC (slippage of ~9%)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Liquidity Provider (LP) tokens:"
      }), " When you deposit tokens into a pool, you receive LP tokens representing your share. You earn fees from trades."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impermanent-loss",
      children: "Impermanent Loss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impermanent loss (IL)"
      }), " occurs when the price ratio of deposited tokens changes compared to when you deposited them. \"Impermanent\" because it's unrealized until you withdraw."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function calculateImpermanentLoss(priceRatio: number): number {\n    // priceRatio = current price / initial price\n    // IL = 2*sqrt(r)/(1+r) - 1\n    const sqrtR = Math.sqrt(priceRatio);\n    return (2 * sqrtR) / (1 + priceRatio) - 1;\n}\n\nconst losses = [1, 1.25, 1.5, 2, 3, 4, 5];\nfor (const r of losses) {\n    const il = calculateImpermanentLoss(r);\n    console.log(`${r}x price change ? IL: ${(il * 100).toFixed(2)}%`);\n}\n// 1x  ? IL: 0%\n// 1.25x ? IL: ~0.6%\n// 1.5x ? IL: ~2.0%\n// 2x  ? IL: ~5.7%\n// 3x  ? IL: ~13.4%\n// 4x  ? IL: ~20.0%\n// 5x  ? IL: ~25.5%\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lending-protocols",
      children: "Lending Protocols"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Protocols like Aave and Compound allow users to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deposit"
        }), " assets to earn interest (supply side)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Borrow"
        }), " assets by over-collateralizing (borrow side)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph LendingProtocol[\"Lending Protocol (Aave)\"]\n        Depositor[\"Depositor<br/>Supplies 100 ETH\"]\n        Borrower[\"Borrower<br/>Collateral: 50 ETH<br/>Borrows: 20,000 USDC\"]\n        Pool2[\"Liquidity Pool\"]\n        Interest[\"Interest Rate Model<br/>Utilization-based\"]\n    end\n    \n    Depositor --> Pool2\n    Pool2 --> Borrower\n    Pool2 --> Interest\n    Interest -->|\"High utilization =<br/>high rates\"| Pool2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key lending parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loan-to-Value (LTV):"
        }), " Maximum % you can borrow (e.g., 75% for ETH)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Liquidation Threshold:"
        }), " Price level at which position is liquidated (e.g., 82.5%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Health Factor:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "collateral * price / (borrowed * liquidationThreshold)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Liquidation Penalty:"
        }), " Extra fee paid to liquidators (e.g., 5-10%)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LendingPosition {\n    collateral: { token: string; amount: number; price: number };\n    borrowed: { token: string; amount: number; price: number };\n    ltv: number;         // e.g., 0.75 (75%)\n    liquidationThreshold: number;  // e.g., 0.825 (82.5%)\n}\n\nfunction calculateHealthFactor(position: LendingPosition): number {\n    const collateralValue = position.collateral.amount * position.collateral.price;\n    const borrowedValue = position.borrowed.amount * position.borrowed.price;\n    return (collateralValue * position.liquidationThreshold) / borrowedValue;\n}\n\n// Example: Alice deposits $100K ETH, borrows $60K USDC\nconst alicePosition: LendingPosition = {\n    collateral: { token: \"ETH\", amount: 50, price: 2000 },\n    borrowed: { token: \"USDC\", amount: 60000, price: 1 },\n    ltv: 0.75,\n    liquidationThreshold: 0.825,\n};\n\nconsole.log(calculateHealthFactor(alicePosition));  // 1.375\n// If ETH drops to $1,500:\n// collat.value = $75K, HF = (75K * 0.825) / 60K = 1.03 — close to liquidation!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stablecoin-types",
      children: "Stablecoin Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph StablecoinTypes[\"Stablecoin Types\"]\n        FB[\"Fiat-Backed<br/>USDC, USDT\"]\n        CC[\"Crypto-Collateralized<br/>DAI, LUSD\"]\n        ALGO[\"Algorithmic<br/>Frax, LUNA (failed)\"]\n    end\n    \n    FB -->|\"1 USDC = $1 held in bank\"| Trust\n    CC -->|\"Over-collateralized<br/>150% min\"| Decentralization\n    ALGO -->|\"Supply/demand<br/>mechanism\"| Experiment\n    \n    subgraph Risks[\"Risks\"]\n        R1[\"Counterparty risk<br/>Bank failure\"]\n        R2[\"Liquidation risk<br/>Collateral volatility\"]\n        R3[\"Death spiral<br/>Peg instability\"]\n    end\n    \n    Trust --> R1\n    Decentralization --> R2\n    Experiment --> R3\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collateral"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Peg Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fiat-backed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USDC, USDT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD reserves in bank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1 redemption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bank failure, regulatory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Crypto-collateralized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ETH, stETH over-collateralized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDP + arbitrage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collateral volatility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithmic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FRAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial + algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMO + arbitrage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Death spiral"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Commodity-backed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAXG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1 gold redemption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custody, audit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "yield-farming",
      children: "Yield Farming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yield farming is the practice of moving assets across DeFi protocols to maximize returns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Liquidity Provision:"
        }), " Deposit tokens into AMM pools ? earn trading fees + incentives"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lending:"
        }), " Supply assets to lending protocols ? earn interest + token rewards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Staking:"
        }), " Lock tokens in a protocol ? earn protocol fees + inflation rewards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-compounding:"
        }), " Use vaults (Yearn) that automatically reinvest rewards"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph YieldFarming[\"Yield Farming Strategy\"]\n        Start[\"Deposit ETH/USDC\"]\n        LP[\"LP Tokens\"]\n        Stake[\"Stake LP in Farm\"]\n        Rewards[\"Earn FARM Tokens\"]\n        Harvest[\"Harvest & Sell\"]\n        Compound[\"Reinvest\"]\n    end\n    \n    Start --> LP\n    LP --> Stake\n    Stake --> Rewards\n    Rewards --> Harvest\n    Rewards --> Compound\n    Compound --> Start\n    Harvest --> Start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Risks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impermanent loss"
        }), " (for AMM positions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Smart contract risk"
        }), " (hacks, bugs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protocol risk"
        }), " (governance attacks, oracle manipulation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token price risk"
        }), " (reward token value drops)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rug pull"
        }), " (developers drain liquidity)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flash-loans",
      children: "Flash Loans"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flash loan"
      }), " allows borrowing any amount of cryptocurrency without collateral, as long as it's repaid within the same transaction. If not repaid, the entire transaction reverts (atomicity)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface FlashLoanCallback {\n    executeOperation(\n        assets: string[],\n        amounts: bigint[],\n        premiums: bigint[],\n        initiator: address,\n        params: bytes\n    ): Promise<boolean>;\n}\n\n// Flash loan arbitrage example\nasync function executeFlashLoanArbitrage() {\n    // 1. Borrow $10M USDC via flash loan\n    // 2. Swap USDC ? ETH on DEX A (price: $2000)\n    // 3. Swap ETH ? USDC on DEX B (price: $2020)\n    // 4. Profit = 0.99% (minus fees)\n    // 5. Repay flash loan + fee (~0.09%)\n    // 6. Keep profit (~$90,000)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Legitimate uses:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arbitrage between DEXes (price differences)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Liquidations (repay debt, seize collateral)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collateral swaps (change collateral type without closing position)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-liquidation (avoid liquidation penalties)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Malicious uses:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Price oracle manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Governance attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protocol draining (reentrancy + flash loans)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "defi-composability-money-legos",
      children: "DeFi Composability (Money Legos)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DeFi's power comes from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "composability"
      }), " — protocols can be combined like Lego bricks:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    Start[\"User has ETH\"]\n    Step1[\"1. Supply ETH to Aave<br/>(earns aETH)\"]\n    Step2[\"2. Borrow USDC against ETH\"]\n    Step3[\"3. Deposit USDC-ETH to Uniswap<br/>(earns LP fees)\"]\n    Step4[\"4. Stake LP tokens in Yearn<br/>(auto-compounds)\"]\n    Step5[\"5. Use yvLP as collateral on Maker<br/>(mint DAI)\"]\n    \n    Start --> Step1\n    Step1 --> Step2\n    Step2 --> Step3\n    Step3 --> Step4\n    Step4 --> Step5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dao-governance",
      children: "DAO Governance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decentralized Autonomous Organization (DAO)"
      }), " is an organization governed by smart contracts and token voting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Governance models:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 token = 1 vote"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniswap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, aligned with economic stake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plutocracy, whale dominance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost = votes²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gitcoin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better minority representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex, Sybil-prone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delegated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegate voting power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More informed voting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potential delegate centralization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multisig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M-of-N signers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gnosis Safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trusted signers needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Proposal {\n    id: number;\n    title: string;\n    description: string;\n    targets: string[];\n    values: bigint[];\n    calldatas: string[];\n    proposer: string;\n    startBlock: number;\n    endBlock: number;\n    forVotes: bigint;\n    againstVotes: bigint;\n    executed: boolean;\n    canceled: boolean;\n}\n\nfunction calculateQuorum(\n    forVotes: bigint,\n    againstVotes: bigint,\n    totalSupply: bigint\n): boolean {\n    const totalVotes = forVotes + againstVotes;\n    const participation = Number(totalVotes) / Number(totalSupply);\n    return participation >= 0.04;  // 4% quorum\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nfts-and-marketplaces",
      children: "NFTs and Marketplaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFTs (Non-Fungible Tokens) represent unique digital assets on the blockchain."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NFT use cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Digital Art:"
        }), " Beeple ($69M), Bored Ape Yacht Club"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Music:"
        }), " Royalty splits, concert tickets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gaming:"
        }), " In-game items, characters, land"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real World Assets:"
        }), " Real estate deeds, luxury goods authentication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identity:"
        }), " POAPs (Proof of Attendance Protocol), reputation badges"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Marketplace mechanics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List NFT for sale at fixed price"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Auction (English, Dutch)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Royalty enforcement (creator gets % of secondary sales)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lazy minting (mint on first purchase to save gas)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "defi-risks",
      children: "DeFi Risks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smart Contract Bug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code vulnerability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The DAO hack ($60M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audits, formal verification, bug bounties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle Manipulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulated price feed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mango Markets ($115M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TWAP oracles, multiple sources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flash Loan Attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unc collateralized manipulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cream Finance ($130M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulation-resistant pricing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Impermanent Loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divergent token prices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All AMM LPs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concentrated liquidity, single-sided staking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Liquidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collateral value drops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3AC, Celsius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conservative LTV, monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Governance Attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious proposal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beanstalk Farms ($182M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timelocks, emergency brakes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regulatory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal action against protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tornado Cash sanctions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal compliance, jurisdictional strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Front-running, sandwich attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All DEX users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slippage protection, private mempools"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-trading-on-uniswap",
      children: "Example 1: Trading on Uniswap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pool has 10 ETH and 20,000 USDC. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k = 10 × 20,000 = 200,000"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alice wants to sell 1 ETH."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New ETH quantity = 11 (10 + 1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New USDC quantity = 200,000 / 11 ˜ 18,181.8."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With fee: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?y = y - (k / (x + ?x))"
        }), " where ?x includes 0.3% fee."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "With 0.997 multiplier: Alice receives ~1,818 USDC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Price impact: Without AMM, 1 ETH = $2,000. Alice receives $1,818 — a slippage of ~9%."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function uniswapTrade(\n    inputAmount: number,\n    inputReserve: number,\n    outputReserve: number\n): { output: number; slippage: number } {\n    const fee = 0.003;  // 0.3%\n    const inputWithFee = inputAmount * (1 - fee);\n    const k = inputReserve * outputReserve;\n    const newInputReserve = inputReserve + inputWithFee;\n    const newOutputReserve = k / newInputReserve;\n    const output = outputReserve - newOutputReserve;\n    \n    const effectivePrice = inputAmount / output;\n    const spotPrice = inputReserve / outputReserve;\n    const slippage = (effectivePrice - spotPrice) / spotPrice * 100;\n    \n    return { output, slippage };\n}\n\nconst result = uniswapTrade(1, 10, 20000);\nconsole.log(`Output: ${result.output.toFixed(2)} USDC`);\nconsole.log(`Slippage: ${result.slippage.toFixed(2)}%`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-collateralized-debt-position-cdp",
      children: "Example 2: Collateralized Debt Position (CDP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice locks 1 ETH (Price: $2,000) as collateral in MakerDAO."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The protocol requires a 150% collateral ratio."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice can borrow a maximum of $2,000 / 1.5 = $1,333 DAI."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If ETH drops to $1,500: health ratio = $1,500 / $1,333 = 1.125 = 112.5%."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At 110% ratio (liquidation threshold at ~$1,466), Alice's position is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "liquidated"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Liquidation fee (~13%) means Alice loses ~$190 of her ETH."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function calculateCollateralRatio(\n    collateralAmount: number,\n    collateralPrice: number,\n    borrowedAmount: number\n): number {\n    const collateralValue = collateralAmount * collateralPrice;\n    return (collateralValue / borrowedAmount) * 100;\n}\n\nconst ethPrice = 2000;\nconst ratio = calculateCollateralRatio(1, ethPrice, 1333);\nconsole.log(`Collateral Ratio: ${ratio.toFixed(1)}%`);  // 150%\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-impermanent-loss-simulation",
      children: "Example 3: Impermanent Loss Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function simulateImpermanentLoss(\n    initialEth: number,\n    initialUsdc: number,\n    ethPriceChange: number\n): { hodl: number; lp: number; ilPercent: number } {\n    const initialUsdcValue = initialUsdc;\n    const initialEthValue = initialEth * (initialUsdc / initialEth) / 2;\n    \n    // HODL value = initial value × price change\n    const hodlEthValue = initialEth * ethPriceChange;\n    const hodlTotal = hodlEthValue + initialUsdcValue;\n    \n    // LP value at new ratio\n    const sqrtR = Math.sqrt(ethPriceChange);\n    const lpEthPortion = initialEth * sqrtR;\n    const lpUsdcPortion = initialUsdc / sqrtR;\n    const lpTotal = lpEthPortion + lpUsdcPortion;\n    \n    const ilPercent = ((lpTotal - hodlTotal) / hodlTotal) * 100;\n    \n    return { hodl: hodlTotal, lp: lpTotal, ilPercent };\n}\n\n// ETH doubles in price\nconst result = simulateImpermanentLoss(10, 20000, 2);\nconsole.log(`HODL: $${result.hodl.toFixed(2)}`);\nconsole.log(`LP: $${result.lp.toFixed(2)}`);\nconsole.log(`IL: ${result.ilPercent.toFixed(2)}%`);  // ~-5.7%\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " DeFi composability means any protocol can plug into any other like Lego bricks — but this also means a vulnerability in one contract can cascade across the entire ecosystem."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When providing liquidity to an AMM, use a calculator to estimate impermanent loss before depositing. For a 2x price change, impermanent loss is ~5.7%; for 5x, it's ~25.5%."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Algorithmic stablecoins are experimental and have repeatedly proven unstable. The collapse of UST ($40B+ loss) demonstrated that algorithm-only pegs without sufficient collateral are fragile."]
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
            children: "AMM (Uniswap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x × y = k constant product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No order book, infinite liquidity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token swaps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Order Book (CEX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buy/sell limit orders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better price discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Professional trading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crypto-collateralized stablecoin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over-collateralized, decentralized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lending, stable savings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fiat-backed stablecoin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized, audited reserves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payments, trading pairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Yield Farming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moving liquidity for rewards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High APY but high risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Liquidity incentives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flash Loan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Borrow/repay in same block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncollateralized, atomic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrage, liquidations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token-governed organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No central authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol governance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-fungible token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique digital asset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Art, collectibles, gaming"
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
              children: "AMM Formula"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x × y = k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger pools = less slippage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Impermanent Loss"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss vs holding during price divergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x change = 5.7% IL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stablecoin Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fiat-backed, crypto-collateralized, algorithmic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different trust and risk profiles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lending"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over-collateralization, liquidation, health factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically 120-150% collateral ratio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DeFi Risks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contract bugs, oracle manipulation, IL, liquidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composable risk = systemic risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flash Loan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic borrow/repay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must repay in same transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TVL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total Value Locked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures DeFi ecosystem health"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Governance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token voting, timelocks, multisig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protects protocol from attacks"
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
            children: "AMM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token swaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settlement channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMM efficiency models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compound, Aave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collateral contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2B lending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stablecoins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trading pairs, yield"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-border settlement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peg stability research"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flash Loans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrage, liquidations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEV analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Yield Farming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LP incentives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reward distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenomics design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAO Governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voting contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consortium governance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voting mechanism design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFTs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digital ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenization standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata standards"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the impermanent loss if a token pair price ratio changes by 4x from the time of deposit?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 0%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) ~20%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) ~25.5%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) ~50%"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) ~20%.** The formula for impermanent loss is (2vr)/(1+r) - 1 where r is the price ratio. For r=4, IL ˜ 20%. For comparison, 2x ? 5.7%, 3x ? 13.4%, 5x ? 25.5%.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why must flash loans be repaid in the same transaction?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Because interest is calculated per block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Because Ethereum atomicity guarantees the entire tx succeeds or reverts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Because flash lenders don't trust borrowers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Because each block has a gas limit"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Because Ethereum atomicity guarantees the entire tx succeeds or reverts.** If the flash loan isn't repaid by the end of the transaction, the entire transaction reverts — including the loan. This makes them trustless.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary risk of an algorithmic stablecoin?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The company behind it can steal funds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A death spiral where price depeg triggers further selling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) High transaction fees"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Regulatory compliance"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) A death spiral where price depeg triggers further selling.** Algorithmic stablecoins rely on arbitrage to maintain their peg. If confidence breaks, the arbitrage mechanism can reverse, causing a cascading devaluation (as seen with UST/LUNA).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does TVL measure in DeFi?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Transaction Volume Location"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Total Value Locked — the amount of assets deposited in a protocol"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Token Velocity Limit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Total Verified Loans"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Total Value Locked — the amount of assets deposited in a protocol.** TVL measures the sum of all assets deposited in a DeFi protocol's smart contracts. It's a key metric for protocol adoption and ecosystem health.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is a key difference between a DAO and a traditional company?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) DAOs cannot hold funds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) DAO governance is transparent and executed through on-chain voting"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) DAOs have no treasury"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) DAOs are illegal"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) DAO governance is transparent and executed through on-chain voting.** In a DAO, all proposals, votes, and treasury movements are recorded on-chain. This makes governance transparent and auditable, unlike traditional corporate governance which often happens behind closed doors.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-amm-constant-product-simulator",
      children: "TypeScript: AMM Constant Product Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class AMMPool {\n  reserveA: number; reserveB: number; fee = 0.003; k: number;\n\n  constructor(reserveA: number, reserveB: number) {\n    this.reserveA = reserveA;\n    this.reserveB = reserveB;\n    this.k = reserveA * reserveB;\n  }\n\n  swap(inputIsA: boolean, inputAmount: number): number {\n    const inputWithFee = inputAmount * (1 - this.fee);\n    if (inputIsA) {\n      const newA = this.reserveA + inputWithFee;\n      const newB = this.k / newA;\n      const output = this.reserveB - newB;\n      this.reserveA = newA;\n      this.reserveB = newB;\n      return output;\n    } else {\n      const newB = this.reserveB + inputWithFee;\n      const newA = this.k / newB;\n      const output = this.reserveA - newA;\n      this.reserveB = newB;\n      this.reserveA = newA;\n      return output;\n    }\n  }\n\n  getPrice(inputIsA: boolean): number {\n    return inputIsA ? this.reserveB / this.reserveA : this.reserveA / this.reserveB;\n  }\n\n  getSlippage(inputIsA: boolean, inputAmount: number): number {\n    const spotPrice = this.getPrice(inputIsA);\n    const output = this.swap(inputIsA, inputAmount);\n    this.reverseSwap(inputIsA, inputAmount, output);\n    const effectivePrice = inputAmount / output;\n    return Math.abs(effectivePrice - spotPrice) / spotPrice;\n  }\n\n  private reverseSwap(inputIsA: boolean, inputAmount: number, output: number): void {\n    if (inputIsA) {\n      this.reserveA -= inputAmount * (1 - this.fee);\n      this.reserveB += output;\n    } else {\n      this.reserveB -= inputAmount * (1 - this.fee);\n      this.reserveA += output;\n    }\n  }\n\n  addLiquidity(amountA: number, amountB: number): number {\n    const shares = Math.min(amountA / this.reserveA, amountB / this.reserveB);\n    this.reserveA += amountA;\n    this.reserveB += amountB;\n    this.k = this.reserveA * this.reserveB;\n    return shares;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-liquidity-pool-simulator",
      children: "TypeScript: Liquidity Pool Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LiquidityPoolSimulator {\n  private pool: AMMPool;\n  private lpShares: number;\n\n  constructor(initialA: number, initialB: number) {\n    this.pool = new AMMPool(initialA, initialB);\n    this.lpShares = Math.sqrt(initialA * initialB);\n  }\n\n  provide(amountA: number, amountB: number): number {\n    const shares = this.pool.addLiquidity(amountA, amountB);\n    this.lpShares += shares * this.lpShares;\n    return this.lpShares;\n  }\n\n  remove(shares: number): { amountA: number; amountB: number } {\n    const ratio = shares / this.lpShares;\n    const amountA = this.pool.reserveA * ratio;\n    const amountB = this.pool.reserveB * ratio;\n    this.pool.reserveA -= amountA;\n    this.pool.reserveB -= amountB;\n    this.pool.k = this.pool.reserveA * this.pool.reserveB;\n    this.lpShares -= shares;\n    return { amountA, amountB };\n  }\n\n  simulateTrades(trades: { isA: boolean; amount: number }[]): void {\n    for (const trade of trades) this.pool.swap(trade.isA, trade.amount);\n  }\n\n  getLPValue(tokenAPrice: number, tokenBPrice: number): number {\n    return this.pool.reserveA * tokenAPrice + this.pool.reserveB * tokenBPrice;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-impermanent-loss-calculator",
      children: "TypeScript: Impermanent Loss Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ImpermanentLossCalculator {\n  static calculate(priceRatio: number): number {\n    const sqrtR = Math.sqrt(priceRatio);\n    return ((2 * sqrtR) / (1 + priceRatio) - 1) * 100;\n  }\n\n  static compareStrategies(\n    initialA: number,\n    initialB: number,\n    priceA: number,\n    finalPriceA: number\n  ): { hodlValue: number; lpValue: number; ilPercent: number; feesEarned: number } {\n    const initialValue = initialA * priceA + initialB * 1;\n    const priceRatio = finalPriceA / priceA;\n    const hodlValue = initialA * finalPriceA + initialB * 1;\n    const sqrtR = Math.sqrt(priceRatio);\n    const lpAValue = initialA * sqrtR * finalPriceA;\n    const lpBValue = (initialB / sqrtR) * 1;\n    const lpValue = lpAValue + lpBValue;\n    const ilPercent = ((lpValue - hodlValue) / hodlValue) * 100;\n    const volumeSimulated = Math.abs(initialA * finalPriceA - initialB) * 0.1;\n    const feesEarned = volumeSimulated * 0.003;\n    return { hodlValue, lpValue, ilPercent, feesEarned };\n  }\n\n  static breakEvenVolume(priceRatio: number, poolTVL: number, fee: number): number {\n    const il = this.calculate(priceRatio);\n    const ilAmount = (Math.abs(il) / 100) * poolTVL;\n    return ilAmount / fee;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === AMM Constant Product Formula ===\nclass ConstantProductAMM {\n    private reserveA: number;\n    private reserveB: number;\n\n    constructor(initialA: number, initialB: number) { this.reserveA = initialA; this.reserveB = initialB; }\n    \n    swap(amountIn: number, isTokenA: boolean): { amountOut: number; newReserveA: number; newReserveB: number } {\n        const k = this.reserveA * this.reserveB;\n        if (isTokenA) {\n            const newA = this.reserveA + amountIn;\n            const newB = k / newA;\n            this.reserveA = newA; this.reserveB = newB;\n            return { amountOut: Math.floor(newB), newReserveA: this.reserveA, newReserveB: this.reserveB };\n        } else {\n            const newB = this.reserveB + amountIn;\n            const newA = k / newB;\n            this.reserveB = newB; this.reserveA = newA;\n            return { amountOut: Math.floor(newA), newReserveA: this.reserveA, newReserveB: this.reserveB };\n        }\n    }\n    addLiquidity(amountA: number, amountB: number): { shares: number; newReserveA: number; newReserveB: number } {\n        const shares = Math.sqrt(amountA * amountB);\n        this.reserveA += amountA; this.reserveB += amountB;\n        return { shares: Math.floor(shares), newReserveA: this.reserveA, newReserveB: this.reserveB };\n    }\n    removeLiquidity(shares: number, totalShares: number): { amountA: number; amountB: number } {\n        const pct = shares / totalShares;\n        const a = Math.floor(this.reserveA * pct);\n        const b = Math.floor(this.reserveB * pct);\n        this.reserveA -= a; this.reserveB -= b;\n        return { amountA: a, amountB: b };\n    }\n    getPrice(): number { return this.reserveB / this.reserveA; }\n    getReserves(): { reserveA: number; reserveB: number } { return { reserveA: this.reserveA, reserveB: this.reserveB }; }\n}\n\n// === Impermanent Loss Calculator ===\nclass ImpermanentLoss {\n    static calculate(priceRatio: number): number {\n        const sqrtR = Math.sqrt(priceRatio);\n        const lpValue = 2 * sqrtR / (1 + priceRatio);\n        return (lpValue - 1) * 100;\n    }\n    static lossTable(): { ratio: number; lossPercent: number }[] {\n        return [1.25, 1.5, 1.75, 2, 3, 4, 5, 10].map(r => ({ ratio: r, lossPercent: this.calculate(r) }));\n    }\n    static breakEvenVolume(priceChangePct: number, fee: number, poolValue: number): number {\n        const loss = Math.abs(this.calculate(1 + priceChangePct / 100) / 100) * poolValue;\n        return loss / fee;\n    }\n}\n\n// === Liquidity Pool Simulator ===\nclass LiquidityPool {\n    private providers = new Map<string, number>();\n    \n    constructor(private amm: ConstantProductAMM) {}\n    \n    provide(address: string, amountA: number, amountB: number): number {\n        const result = this.amm.addLiquidity(amountA, amountB);\n        this.providers.set(address, (this.providers.get(address) ?? 0) + result.shares);\n        return result.shares;\n    }\n    withdraw(address: string, shares: number): { amountA: number; amountB: number } | null {\n        const owned = this.providers.get(address) ?? 0;\n        if (shares > owned) return null;\n        const result = this.amm.removeLiquidity(shares, owned);\n        this.providers.set(address, owned - shares);\n        return result;\n    }\n    getShare(address: string): number { return this.providers.get(address) ?? 0; }\n}\n\n// === Yield Farming Simulator ===\nclass YieldFarm {\n    private stakers = new Map<string, { amount: number; since: number }>();\n    private rewardRate: number;\n\n    constructor(private totalReward: number, private duration: number) { this.rewardRate = totalReward / duration; }\n    \n    stake(address: string, amount: number): void {\n        this.stakers.set(address, { amount, since: Date.now() });\n    }\n    unstake(address: string): { principal: number; reward: number } {\n        const s = this.stakers.get(address);\n        if (!s) return { principal: 0, reward: 0 };\n        const elapsed = (Date.now() - s.since) / 1000;\n        const totalStaked = Array.from(this.stakers.values()).reduce((a, s) => a + s.amount, 0);\n        const reward = totalStaked > 0 ? (s.amount / totalStaked) * this.rewardRate * elapsed : 0;\n        this.stakers.delete(address);\n        return { principal: s.amount, reward };\n    }\n}\n\n// === Stablecoin Collateralization Checker ===\nclass StablecoinEngine {\n    private collateral: Map<string, { deposited: number; minted: number }> = new Map();\n    constructor(private minCollateralRatio: number) {}\n\n    deposit(address: string, amount: number): void {\n        const pos = this.collateral.get(address) ?? { deposited: 0, minted: 0 };\n        pos.deposited += amount;\n        this.collateral.set(address, pos);\n    }\n    mint(address: string, amount: number): boolean {\n        const pos = this.collateral.get(address);\n        if (!pos) return false;\n        const ratio = pos.deposited / (pos.minted + amount);\n        if (ratio < this.minCollateralRatio) return false;\n        pos.minted += amount;\n        return true;\n    }\n    isSafe(address: string): boolean {\n        const pos = this.collateral.get(address);\n        return pos ? (pos.deposited / pos.minted) >= this.minCollateralRatio : true;\n    }\n}\n\n// === Demo ===\nconst amm = new ConstantProductAMM(100, 100);\nconsole.log('AMM initial price:', amm.getPrice());\nconst swap = amm.swap(10, true);\nconsole.log(`Swap 10 A -> ${swap.amountOut} B`);\nconsole.log(`New price: ${amm.getPrice().toFixed(4)}`);\nconsole.log(`IL @ 2x price change: ${ImpermanentLoss.calculate(2).toFixed(2)}%`);\nconsole.log('IL table:', ImpermanentLoss.lossTable().map(r => `${r.ratio}x: ${r.lossPercent.toFixed(2)}%`).join(', '));\n\nconst pool = new LiquidityPool(amm);\npool.provide('alice', 50, 50);\nconsole.log(`Alice LP shares: ${pool.getShare('alice')}`);\n\nconst farm = new YieldFarm(1000, 86400);\nfarm.stake('alice', 100);\nconsole.log(`Farm staked`);\n\nconst se = new StablecoinEngine(1.5);\nse.deposit('alice', 150);\nconsole.log(`Mint 100 stablecoins: ${se.mint('alice', 100)}`);\nconsole.log(`Position safe: ${se.isSafe('alice')}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// defi\n// distributed-ledger-crypto implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'defi', data: { topic: 'distributed-ledger-crypto' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DeFi provides financial services without intermediaries through smart contracts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AMMs enable permissionless trading through liquidity pools and mathematical formulas."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stablecoins are the \"Liquidity\" of the DeFi ecosystem, bridging the gap with fiat."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LPs earn fees but face the risk of Impermanent Loss when token prices diverge."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DeFi protocols are \"Composable\" (Money Legos), allowing complex financial structures."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flash loans enable uncollateralized borrowing within atomic transactions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DAOs provide transparent, on-chain governance for protocol decisions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NFTs represent unique digital ownership across art, gaming, and real-world assets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DeFi risks include smart contract bugs, oracle manipulation, and systemic composability risks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a calculator to estimate impermanent loss before providing AMM liquidity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor health factors on lending positions — set alerts for liquidation thresholds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefer crypto-collateralized stablecoins (DAI) over algorithmic ones for safety."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify contract audits and TVL distribution before depositing in any protocol."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use slippage protection (minOut) when trading on AMMs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider using private mempools (Flashbots) to avoid MEV on large trades."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the constant product formula (x × y = k)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is \"Impermanent Loss\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define \"Over-collateralization\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do decentralized Oracles (like Chainlink) help DeFi protocols?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a flash loan and how does atomicity make it possible?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If an ETH/USDC pool has 100 ETH and 200,000 USDC, calculate the price of 1 ETH."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A protocol has a 120% collateral requirement. If you have $500 worth of collateral, how much can you borrow?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss the impact of a \"Flash Loan\" where an attacker borrows $100M, manipulates a price, and repays the loan in a single transaction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate the impermanent loss for a 3x price change in one direction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the sustainability of high-yield farming protocols (APY > 1000%) and identify the characteristics of a \"Ponzi\" structure in DeFi."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research the Curve Wars phenomenon. Explain how veTokenomics (vote-escrowed tokens) create flywheels for protocol governance and how protocols like Convex and Stake DAO aggregate voting power."
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