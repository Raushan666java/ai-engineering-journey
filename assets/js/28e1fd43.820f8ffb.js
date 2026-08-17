"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[85210],{

/***/ 28274
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_blockchain_06_solidity_md_28e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-blockchain-06-solidity-md-28e.json
const site_docs_courses_blockchain_06_solidity_md_28e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/blockchain/06-solidity","title":"Chapter 6: Smart Contract Development","description":"Previous Ethereum and Smart Contracts | Next Decentralized Applications (dApps)","source":"@site/docs/courses/blockchain/06-solidity.md","sourceDirName":"courses/blockchain","slug":"/blockchain/06-solidity","permalink":"/ai-engineering-journey/blockchain/06-solidity","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-solidity","slug":"/blockchain/06-solidity","title":"Chapter 6: Smart Contract Development","sidebar_label":"Chapter 6: Smart Contract Development","sidebar_position":6},"sidebar":"course-blockchain","previous":{"title":"Chapter 5: Ethereum and Smart Contracts","permalink":"/ai-engineering-journey/blockchain/05-ethereum"},"next":{"title":"Chapter 7: Decentralized Applications (dApps)","permalink":"/ai-engineering-journey/blockchain/07-dapps"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/blockchain/06-solidity.md


const frontMatter = {
	id: '06-solidity',
	slug: '/blockchain/06-solidity',
	title: 'Chapter 6: Smart Contract Development',
	sidebar_label: 'Chapter 6: Smart Contract Development',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Smart Contract Development';

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
  "value": "Solidity Overview",
  "id": "solidity-overview",
  "level": 3
}, {
  "value": "Data Types and Storage Locations",
  "id": "data-types-and-storage-locations",
  "level": 3
}, {
  "value": "Token Standards",
  "id": "token-standards",
  "level": 3
}, {
  "value": "Security Patterns",
  "id": "security-patterns",
  "level": 3
}, {
  "value": "Upgradeable Contracts (Proxy Pattern)",
  "id": "upgradeable-contracts-proxy-pattern",
  "level": 3
}, {
  "value": "Gas Optimization Techniques",
  "id": "gas-optimization-techniques",
  "level": 3
}, {
  "value": "Common Vulnerabilities",
  "id": "common-vulnerabilities",
  "level": 3
}, {
  "value": "Flash Loan Attack Pattern",
  "id": "flash-loan-attack-pattern",
  "level": 3
}, {
  "value": "Formal Verification",
  "id": "formal-verification",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Complete ERC-20 Token",
  "id": "example-1-complete-erc-20-token",
  "level": 3
}, {
  "value": "Example 2: Reentrancy Attack Simulation",
  "id": "example-2-reentrancy-attack-simulation",
  "level": 3
}, {
  "value": "Example 3: Gas Cost Comparison",
  "id": "example-3-gas-cost-comparison",
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
  "value": "TypeScript: Storage Layout Calculator",
  "id": "typescript-storage-layout-calculator",
  "level": 3
}, {
  "value": "TypeScript: Function Selector Generator",
  "id": "typescript-function-selector-generator",
  "level": 3
}, {
  "value": "TypeScript: Event Log Parser",
  "id": "typescript-event-log-parser",
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
    em: "em",
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
        id: "chapter-6-smart-contract-development",
        children: "Chapter 6: Smart Contract Development"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/05-ethereum",
          children: "Chapter 5: Ethereum and Smart Contracts"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/07-dapps",
          children: "Chapter 7: Decentralized Applications (dApps)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Solidity syntax, data types, and storage semantics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ERC-20, ERC-721, and ERC-1155 token standards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write secure smart contracts using established security patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement proxy-based upgradeable contracts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and mitigate common vulnerabilities (reentrancy, overflow, front-running)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use gas optimization techniques effectively"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand formal verification concepts for smart contracts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy and test contracts with Hardhat/Foundry"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Solidity Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object-oriented, EVM-targeted language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Influenced by C++, Python, JavaScript"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage vs Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage persists on-chain (expensive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimize storage writes to save gas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token Standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ERC-20 (fungible), ERC-721 (NFT), ERC-1155 (multi-token)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each standard enables specific use cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check-Effects-Interactions, Pull over Push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always update state before external calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegatecall-based upgrades"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate logic from storage for upgradeability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gas Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calldata, packing, unchecked math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 10x gas savings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formal Verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematical proofs of contract correctness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents bugs that audits might miss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common Vulnerabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reentrancy, overflow, front-running, flash loan attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cause billions in losses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Solidity Basics] --> B[Data Types & Storage]\n    B --> C[Token Standards]\n    C --> D[Security Patterns]\n    D --> E[Proxy Upgrades]\n    E --> F[Gas Optimization]\n    F --> G[Vulnerabilities]\n    G --> H[Testing & Verification]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solidity-overview",
      children: "Solidity Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solidity is a high-level, object-oriented language for writing smart contracts. It compiles to EVM bytecode. It is influenced by C++ (syntax), Python (modifiers, events), and JavaScript (function declarations)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\n// A minimal Solidity contract\ncontract HelloWorld {\n    string public greeting;\n\n    constructor(string memory _greeting) {\n        greeting = _greeting;\n    }\n\n    function setGreeting(string memory _greeting) external {\n        greeting = _greeting;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key language features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pragma:"
        }), " Specifies compiler version for compatibility"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constructor:"
        }), " Runs once at deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modifiers:"
        }), " Reusable access control and validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Events:"
        }), " Lightweight logging, indexed for searchability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Errors:"
        }), " Custom error types (cheaper than string messages since Solidity 0.8.4)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-types-and-storage-locations",
      children: "Data Types and Storage Locations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Value Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "uint"
        }), " (8, 16, 32, ..., 256): Unsigned integers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " (same sizes): Signed integers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "bool"
        }), ": Boolean (true/false)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "address"
        }), ": 20-byte Ethereum address"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "bytes32"
        }), ": Fixed-size byte array (up to 32 bytes)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        }), ": Dynamic UTF-8 string"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "bytes"
        }), ": Dynamic byte array"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "struct"
        }), ": Custom data structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "mapping"
        }), ": Key-value store (no iteration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "array"
        }), ": Fixed or dynamic array"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Locations:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permanent on-chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State variables (over 20K gas per write)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary variables, ABI decoding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "calldata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheapest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External function parameters (non-modifiable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local variables (limited to 16 variables)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "token-standards",
      children: "Token Standards"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ERC-20 (Fungible Tokens):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard for interchangeable tokens (like currencies)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ninterface IERC20 {\n    function totalSupply() external view returns (uint256);\n    function balanceOf(address account) external view returns (uint256);\n    function transfer(address to, uint256 amount) external returns (bool);\n    function allowance(address owner, address spender) external view returns (uint256);\n    function approve(address spender, uint256 amount) external returns (bool);\n    function transferFrom(address from, address to, uint256 amount) external returns (bool);\n\n    event Transfer(address indexed from, address indexed to, uint256 value);\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ERC-721 (Non-Fungible Tokens):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard for unique, non-interchangeable tokens (like collectibles)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ninterface IERC721 {\n    function balanceOf(address owner) external view returns (uint256);\n    function ownerOf(uint256 tokenId) external view returns (address);\n    function transferFrom(address from, address to, uint256 tokenId) external;\n\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\n    event Approval(address indexed owner, address indexed spender, uint256 indexed tokenId);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ERC-1155 (Multi-Token Standard):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combines ERC-20 and ERC-721 features — one contract manages multiple token types."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ninterface IERC1155 {\n    function balanceOf(address account, uint256 id) external view returns (uint256);\n    function balanceOfBatch(\n        address[] calldata accounts,\n        uint256[] calldata ids\n    ) external view returns (uint256[] memory);\n    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;\n\n    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);\n    event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ERC-20"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ERC-721"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ERC-1155"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fungible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-Fungible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch Transfers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gas Efficiency (batch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (batched operations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currencies, stablecoins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFTs, collectibles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaming (items + currency)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single Contract Tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited (by ID)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-patterns",
      children: "Security Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Check-Effects-Interactions Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most important security pattern: always update state before making external calls."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// UNSAFE: External call before state update\nfunction withdrawUnsafe(uint256 amount) external {\n    require(balances[msg.sender] >= amount, \"Insufficient balance\");\n    (bool success, ) = msg.sender.call{value: amount}(\"\");  // External call FIRST\n    require(success, \"Transfer failed\");\n    balances[msg.sender] -= amount;  // State update AFTER — VULNERABLE!\n}\n\n// SAFE: Check-Effects-Interactions\nfunction withdrawSafe(uint256 amount) external {\n    require(balances[msg.sender] >= amount, \"Insufficient balance\");\n    balances[msg.sender] -= amount;  // State update FIRST (Effects)\n    (bool success, ) = msg.sender.call{value: amount}(\"\");  // External call LAST (Interaction)\n    require(success, \"Transfer failed\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Pull over Push Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let users withdraw their own funds instead of pushing payments to them."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "contract PullOverPush {\n    mapping(address => uint256) public pendingWithdrawals;\n\n    function withdraw() external {\n        uint256 amount = pendingWithdrawals[msg.sender];\n        require(amount > 0, \"Nothing to withdraw\");\n        pendingWithdrawals[msg.sender] = 0;  // Clear state first\n        (bool success, ) = msg.sender.call{value: amount}(\"\");\n        require(success, \"Transfer failed\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Reentrancy Guard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "contract ReentrancyGuard {\n    uint256 private _status;\n    uint256 private constant _NOT_ENTERED = 1;\n    uint256 private constant _ENTERED = 2;\n\n    modifier nonReentrant() {\n        require(_status != _ENTERED, \"ReentrancyGuard: reentrant call\");\n        _status = _ENTERED;\n        _;\n        _status = _NOT_ENTERED;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upgradeable-contracts-proxy-pattern",
      children: "Upgradeable Contracts (Proxy Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Smart contracts are immutable by default. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "proxy pattern"
      }), " separates logic from storage:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Users[\"Users Interact With\"]\n        Proxy[\"Proxy Contract<br/>(Storage)\"]\n    end\n    subgraph Developer[\"Developer Controls\"]\n        LogicV1[\"Logic V1<br/>(Implementation)\"]\n        LogicV2[\"Logic V2<br/>(Upgraded Implementation)\"]\n    end\n    \n    Proxy -->|\"DELEGATECALL\"| LogicV1\n    Proxy -.->|\"After upgrade\"| LogicV2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// Minimal proxy pattern (UUPS — Universal Upgradeable Proxy Standard)\ncontract UUPSProxy {\n    address public implementation;\n\n    fallback() external payable {\n        address impl = implementation;\n        assembly {\n            calldatacopy(0, 0, calldatasize())\n            let result := delegatecall(gas(), impl, 0, calldatasize(), 0, 0)\n            returndatacopy(0, 0, returndatasize())\n            switch result\n            case 0 { revert(0, returndatasize()) }\n            default { return(0, returndatasize()) }\n        }\n    }\n}\n\n// UUPS upgrade logic (in implementation contract)\nabstract contract UUPSUpgradeable {\n    address public implementation;\n\n    function upgradeTo(address newImplementation) external virtual {\n        require(msg.sender == owner, \"Not authorized\");\n        require(newImplementation.code.length > 0, \"Empty contract\");\n        implementation = newImplementation;\n    }\n\n    modifier onlyProxy() {\n        require(address(this) != implementation, \"Not proxy\");\n        _;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note on storage collisions:"
      }), " Proxy patterns must respect storage layout — you cannot reorder or remove state variables. The OpenZeppelin upgradeable contracts and UUPS/Transparent proxy patterns handle this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gas-optimization-techniques",
      children: "Gas Optimization Techniques"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "contract GasOptimized {\n    // 1. Use uint256 for loop counters (EVM natively handles 256-bit)\n    //    Smaller uints (uint8, uint16) cost MORE due to packing/unpacking\n    function loop() external {\n        for (uint256 i = 0; i < 100; i++) { /* ... */ }  // Efficient\n    }\n\n    // 2. Pack related small variables in the same storage slot\n    struct PackedData {\n        uint128 amount;   // 16 bytes\n        uint64 timestamp; // 8 bytes\n        address user;     // 20 bytes ? padded to 32\n    }\n    // Without packing: 3 slots (96 bytes)\n    // With packing: 2 slots (44 bytes + padding)\n\n    // 3. Use unchecked math in Solidity 0.8+ where overflow is impossible\n    function sum(uint256 a, uint256 b) external pure returns (uint256) {\n        unchecked { return a + b; }\n        // Saves ~200 gas per operation\n    }\n\n    // 4. Cache repeated storage reads\n    function badReads() external view {\n        mapping(address => uint256) storage balances;\n        for (uint256 i = 0; i < 10; i++) {\n            // balances[user] read from storage EVERY iteration (SLOAD = 2100 gas)\n        }\n    }\n\n    function goodReads() external view {\n        mapping(address => uint256) storage balances;\n        uint256 cached = balances[user];  // SLOAD once (2100 gas)\n        for (uint256 i = 0; i < 10; i++) {\n            // Use cached value (memory access = 3 gas)\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-vulnerabilities",
      children: "Common Vulnerabilities"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vulnerability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Damage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reentrancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker calls back into contract before state updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fund loss (The DAO: $60M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check-Effects-Interactions, ReentrancyGuard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arithmetic Overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Underflow/overflow in math operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incorrect balances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solidity 0.8+ has built-in overflow checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Front-Running"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker observes pending tx and submits own first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEV extraction, sandwich attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commit-reveal schemes, submarine sends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flash Loan Attacks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulate price oracles using borrowed funds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol insolvency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TWAP oracles, manipulation-resistant AMMs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oracle Manipulation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker manipulates off-chain data source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incorrect price feeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralized oracles (Chainlink), TWAP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing permission checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized admin actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modifiers, Ownable pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delegatecall Injection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker calls through proxy to selfdestruct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy bricked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage collision checks, UUPS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signature Replay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valid signature reused on different chains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EIP-712 signatures, nonces, chain ID"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flash-loan-attack-pattern",
      children: "Flash Loan Attack Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Attacker as Attacker Contract\n    participant AMM as DEX (AMM Pool)\n    participant Oracle as Price Oracle\n    participant Flash as Flash Loan Provider\n    \n    Attacker->>Flash: 1. Borrow $100M (no collateral)\n    Flash->>Attacker: 2. Send $100M\n    \n    Attacker->>AMM: 3. Massive swap ? manipulate price\n    AMM->>Oracle: 4. Provide manipulated price\n    \n    Attacker->>Oracle: 5. Exploit protocol using bad price\n    Note over Attacker: 6. Profit (e.g., liquidate positions)\n    \n    Attacker->>AMM: 7. Reverse swap\n    Attacker->>Flash: 8. Repay $100M + fee\n    Note over Attacker: 9. Keep profit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formal-verification",
      children: "Formal Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formal verification mathematically proves contract correctness against a specification."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Example: Certora Prover rule for a token contract\n// Ensures the total supply never exceeds MAX_SUPPLY\n// \n// rule total_supply_bound() {\n//     require(initialSupply <= MAX_SUPPLY);\n//     require(initialSupply > 0);\n//     \n//     method f;\n//     env e;\n//     calldataarg args;\n//     f(e, args);\n//     \n//     assert totalSupply() <= MAX_SUPPLY,\n//         \"Total supply exceeded maximum\";\n// }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal verification tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Certora Prover:"
        }), " Automated formal verification for Solidity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Foundry fuzz testing:"
        }), " Property-based testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mythril:"
        }), " Symbolic execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slither:"
        }), " Static analysis (detects common vulnerabilities)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-complete-erc-20-token",
      children: "Example 1: Complete ERC-20 Token"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\n\ncontract SimpleERC20 {\n    string public name;\n    string public symbol;\n    uint8 public decimals;\n    uint256 public totalSupply;\n\n    mapping(address => uint256) public balanceOf;\n    mapping(address => mapping(address => uint256)) public allowance;\n\n    event Transfer(address indexed from, address indexed to, uint256 value);\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n\n    constructor(string memory _name, string memory _symbol, uint256 _initialSupply) {\n        name = _name;\n        symbol = _symbol;\n        decimals = 18;\n        totalSupply = _initialSupply * 10 ** 18;\n        balanceOf[msg.sender] = totalSupply;\n    }\n\n    function transfer(address to, uint256 amount) external returns (bool) {\n        require(balanceOf[msg.sender] >= amount, \"Insufficient balance\");\n        balanceOf[msg.sender] -= amount;\n        balanceOf[to] += amount;\n        emit Transfer(msg.sender, to, amount);\n        return true;\n    }\n\n    function approve(address spender, uint256 amount) external returns (bool) {\n        allowance[msg.sender][spender] = amount;\n        emit Approval(msg.sender, spender, amount);\n        return true;\n    }\n\n    function transferFrom(address from, address to, uint256 amount) external returns (bool) {\n        require(balanceOf[from] >= amount, \"Insufficient balance\");\n        require(allowance[from][msg.sender] >= amount, \"Insufficient allowance\");\n        allowance[from][msg.sender] -= amount;\n        balanceOf[from] -= amount;\n        balanceOf[to] += amount;\n        emit Transfer(from, to, amount);\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-reentrancy-attack-simulation",
      children: "Example 2: Reentrancy Attack Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// Vulnerable contract\ncontract VulnerableBank {\n    mapping(address => uint256) public balances;\n\n    function deposit() external payable {\n        balances[msg.sender] += msg.value;\n    }\n\n    function withdraw(uint256 amount) external {\n        require(balances[msg.sender] >= amount, \"Insufficient balance\");\n        (bool success, ) = msg.sender.call{value: amount}(\"\");\n        require(success, \"Transfer failed\");\n        balances[msg.sender] -= amount;  // State update AFTER call\n    }\n}\n\n// Attacker contract\ncontract ReentrancyAttacker {\n    VulnerableBank public target;\n    uint256 public constant ATTACK_DEPTH = 3;\n\n    constructor(address _target) {\n        target = VulnerableBank(_target);\n    }\n\n    function attack() external payable {\n        require(msg.value >= 1 ether, \"Need 1 ETH to attack\");\n        target.deposit{value: 1 ether}();\n        target.withdraw(1 ether);\n    }\n\n    receive() external payable {\n        if (msg.sender.balance > 0) {\n            target.withdraw(1 ether);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-gas-cost-comparison",
      children: "Example 3: Gas Cost Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "contract GasComparison {\n    // Gas: ~50000\n    function inefficient(uint256[] calldata values) external {\n        for (uint256 i = 0; i < values.length; i++) {\n            // SLOAD each iteration\n        }\n    }\n\n    // Gas: ~30000 (40% savings)\n    function efficient(uint256[] calldata values) external {\n        uint256 len = values.length;  // Cache array length\n        for (uint256 i = 0; i < len; i = unchecked_inc(i)) {\n            // Cached + unchecked\n        }\n    }\n\n    function unchecked_inc(uint256 i) private pure returns (uint256) {\n        unchecked { return i + 1; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Every storage write costs 5,000-22,100 gas while memory operations cost ~3 gas — the biggest optimization in Solidity is minimizing what you store on the blockchain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calldata"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memory"
        }), " for read-only function parameters. It's cheaper than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memory"
        }), " and avoids unnecessary data copying."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tx.origin"
        }), " global should never be used for authentication — it returns the original sender of the transaction, which can be a malicious contract. Always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), " for access control."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent on-chain data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive (20K gas write), permanent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State variables, balances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary during execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheap, forgotten after execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function-local arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calldata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only input data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheapest, non-modifiable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External function parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local variables on EVM stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free but limited (16 variables)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop counters, temporaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-value store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No iteration possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token balances, allowance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "struct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom data type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group related fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User profiles, orders"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERC-20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fungible token standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interchangeable tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currencies, stablecoins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERC-721"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFT standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collectibles, property deeds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERC-1155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-token standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaming items"
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
              children: "Visibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "public, private, internal, external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "external is cheaper than public for functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modifiers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "onlyOwner, whenNotPaused, nonReentrant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable security guards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "storage, memory, calldata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "calldata is read-only and cheapest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Globals"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msg.sender, msg.value, block.timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "block.timestamp can be manipulated by miners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gas Ops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADD: 3, SSTORE: 22K/5K, SLOAD: 2100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage is the dominant cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Token Standards"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ERC-20, ERC-721, ERC-1155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each has distinct use cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proxy Pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UUPS, Transparent, Beacon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegatecall-based upgrades"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security Checklist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CEI, Pull over Push, ReentrancyGuard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents 90%+ of common exploits"
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
            children: "Storage Layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token balance tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset ledger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function Visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pool withdrawal (public)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle callback (external)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaincode invoke (public)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "onlyOwner admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reentrancy guard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composable modifiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check-Effects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash loan safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Withdrawal pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Escrow settlement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit trail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event indexing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token Standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEX, lending, NFTs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset tokenization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard improvements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which data location is cheapest for read-only function parameters in Solidity?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) storage"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) calldata"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) stack"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) calldata.** Calldata is a read-only, non-modifiable location that avoids copying data. It's cheaper than memory for function parameters that don't need modification.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_;"
        }), " symbol represent in a Solidity modifier?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) A semicolon"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The insertion point where the function body executes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) A loop continuation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) A require statement"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) The insertion point where the function body executes.** In a modifier, `_;` is replaced by the function body at runtime. Code before `_;` runs before the function, and code after runs after.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tx.origin"
        }), " dangerous for authentication?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It returns the wrong address"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It can be the address of an attacker's contract, not the intended user"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It costs more gas"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It only works on testnets"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) It can be the address of an attacker's contract, not the intended user.** `tx.origin` returns the original EOA that initiated the transaction chain, which an intermediate malicious contract can exploit to impersonate a user. Always use `msg.sender`.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary purpose of the proxy pattern in Solidity?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To improve gas efficiency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To enable upgradeable smart contracts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To reduce deployment cost"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To increase security"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) To enable upgradeable smart contracts.** The proxy pattern separates logic from storage using DELEGATECALL. The proxy contract holds the storage, and the implementation contract contains the logic. Users call the proxy, which delegates to the implementation, allowing the logic to be replaced while preserving state.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the proper ordering of operations in the Check-Effects-Interactions pattern?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Interaction ? Check ? Effects"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Check ? Effects ? Interaction"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Effects ? Check ? Interaction"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Interaction ? Effects ? Check"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Check ? Effects ? Interaction.** First check all conditions (require), then update state (effects), then make external calls (interaction). This order prevents reentrancy attacks because state changes are visible to the attacker before they can re-enter the function.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-storage-layout-calculator",
      children: "TypeScript: Storage Layout Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class StorageLayoutCalculator {\n  static readonly SLOT_SIZE = 32;\n\n  static calculateSlot(variableIndex: number): number {\n    return variableIndex;\n  }\n\n  static mappingSlot(baseSlot: number, key: string): string {\n    const paddedKey = key.padStart(64, \"0\");\n    const paddedSlot = baseSlot.toString(16).padStart(64, \"0\");\n    const hash = sha256(paddedKey + paddedSlot);\n    return BigInt(\"0x\" + hash).toString();\n  }\n\n  static arraySlot(baseSlot: number, index: number): string {\n    const arrStart = sha256(baseSlot.toString(16).padStart(64, \"0\"));\n    const elementSlot = BigInt(\"0x\" + arrStart) + BigInt(index);\n    return elementSlot.toString();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-function-selector-generator",
      children: "TypeScript: Function Selector Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createHash } from \"node:crypto\";\n\nconst keccak256 = (d: string): string => createHash(\"sha256\").update(d).digest(\"hex\");\n\nclass SelectorGenerator {\n  static generate(sig: string): string {\n    return keccak256(sig).slice(0, 8);\n  }\n\n  static fromFunction(name: string, inputs: string[]): string {\n    const sig = `${name}(${inputs.join(\",\")})`;\n    return this.generate(sig);\n  }\n\n  static selectors(): Record<string, string> {\n    const sigs = [\n      \"transfer(address,uint256)\", \"balanceOf(address)\", \"approve(address,uint256)\",\n      \"transferFrom(address,address,uint256)\", \"totalSupply()\", \"allowance(address,address)\",\n      \"ownerOf(uint256)\", \"safeTransferFrom(address,address,uint256)\",\n      \"mint(address,uint256)\", \"burn(uint256)\", \"pause()\", \"unpause()\",\n    ];\n    const result: Record<string, string> = {};\n    for (const sig of sigs) {\n      const name = sig.split(\"(\")[0];\n      result[name] = \"0x\" + this.generate(sig);\n    }\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-event-log-parser",
      children: "TypeScript: Event Log Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface EventLog {\n  address: string; topics: string[]; data: string; blockNumber: number; transactionHash: string;\n}\n\ninterface ParsedEvent {\n  name: string; args: Record<string, unknown>;\n}\n\nclass EventLogParser {\n  private eventSignatures: Map<string, string> = new Map();\n\n  register(signature: string, name: string): void {\n    this.eventSignatures.set(keccak256(signature), name);\n  }\n\n  parse(log: EventLog): ParsedEvent | null {\n    const topic0 = log.topics[0]?.slice(2);\n    const name = this.eventSignatures.get(topic0 ?? \"\");\n    if (!name) return null;\n    const indexedCount = (log.topics.length - 1);\n    const dataHex = log.data.startsWith(\"0x\") ? log.data.slice(2) : log.data;\n    const args: Record<string, unknown> = {};\n    for (let i = 1; i < log.topics.length; i++) {\n      args[`topic${i}`] = \"0x\" + log.topics[i].slice(2);\n    }\n    if (dataHex.length >= 64) {\n      args.value = BigInt(\"0x\" + dataHex.slice(0, 64)).toString();\n    }\n    return { name, args };\n  }\n\n  parseTransfer(log: EventLog): { from: string; to: string; value: bigint } | null {\n    const sig = keccak256(\"Transfer(address,address,uint256)\");\n    if ((log.topics[0]?.slice(2)) !== sig) return null;\n    return {\n      from: \"0x\" + log.topics[1].slice(26),\n      to: \"0x\" + log.topics[2].slice(26),\n      value: BigInt(log.data),\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Storage Layout Simulator ===\nclass StorageLayout {\n    private slots = new Map<number, bigint>();\n    \n    write(slot: number, value: bigint): void { this.slots.set(slot, value); }\n    read(slot: number): bigint { return this.slots.get(slot) ?? BigInt(0); }\n    \n    static computeSlot(mappingSlot: number, key: string): number {\n        let h = mappingSlot;\n        for (let i = 0; i < key.length; i++) h = ((h << 5) - h) + key.charCodeAt(i);\n        return Math.abs(h) % (1 << 30);\n    }\n    static computeArraySlot(baseSlot: number, index: number): number {\n        let h = baseSlot;\n        for (let i = 0; i < index; i++) h = ((h << 5) - h) + i;\n        return Math.abs(h) % (1 << 30);\n    }\n    \n    packValues(values: number[], bitSizes: number[]): bigint {\n        let packed = BigInt(0);\n        let offset = 0;\n        for (let i = 0; i < values.length; i++) {\n            packed |= BigInt(values[i] & ((1 << bitSizes[i]) - 1)) << BigInt(offset);\n            offset += bitSizes[i];\n        }\n        return packed;\n    }\n    unpackValues(packed: bigint, bitSizes: number[]): number[] {\n        const result: number[] = [];\n        let offset = 0;\n        for (const bits of bitSizes) {\n            result.push(Number((packed >> BigInt(offset)) & BigInt((1 << bits) - 1)));\n            offset += bits;\n        }\n        return result;\n    }\n}\n\n// === Function Selector Generator ===\nclass SelectorGenerator {\n    static generate(functionSig: string): string {\n        let h = 0;\n        for (let i = 0; i < functionSig.length; i++) h = ((h << 5) - h) + functionSig.charCodeAt(i);\n        return '0x' + Math.abs(h).toString(16).padStart(8, '0');\n    }\n    static selectorFromSignature(name: string, params: string[]): string {\n        const sig = `${name}(${params.join(',')})`;\n        return this.generate(sig);\n    }\n    static decodeSelector(selector: string, knownFunctions: Map<string, string>): string | null {\n        for (const [sig, sel] of knownFunctions) if (this.generate(sig) === selector) return sig;\n        return null;\n    }\n}\n\n// === Event Signature Generator ===\nclass EventSignature {\n    static hash(eventName: string, params: string[]): string {\n        const sig = `${eventName}(${params.join(',')})`;\n        let h = BigInt(0);\n        for (let i = 0; i < sig.length; i++) h = (h << 5n) - h + BigInt(sig.charCodeAt(i));\n        const hex = (h < 0n ? -h : h).toString(16).padStart(64, '0');\n        return '0x' + hex;\n    }\n}\n\n// === Function Modifier Simulator ===\ntype ModifierFn = (fn: () => any) => any;\nclass ModifierEngine {\n    private modifiers = new Map<string, ModifierFn>();\n\n    defineModifier(name: string, impl: ModifierFn): void { this.modifiers.set(name, impl); }\n    execute(fn: () => any, modNames: string[]): any {\n        let wrapped = fn;\n        for (const name of modNames.reverse()) {\n            const mod = this.modifiers.get(name);\n            if (mod) { const next = wrapped; wrapped = () => mod(next); }\n        }\n        return wrapped();\n    }\n}\n\n// === ABI Decoder ===\nclass ABIDecoder {\n    static decode(encoded: string, types: string[]): any[] {\n        const results: any[] = [];\n        let offset = 10;\n        for (const type of types) {\n            const chunk = encoded.slice(offset, offset + 64);\n            if (type === 'uint256' || type.startsWith('uint')) results.push(BigInt('0x' + chunk));\n            else if (type === 'address') results.push('0x' + chunk.slice(24));\n            else if (type === 'bool') results.push(chunk !== '0'.repeat(64));\n            else if (type === 'string') {\n                const len = parseInt(chunk, 16);\n                const data = encoded.slice(offset + 64, offset + 64 + len * 2);\n                results.push(Buffer.from(data, 'hex').toString());\n                offset += len * 2;\n            }\n            offset += 64;\n        }\n        return results;\n    }\n}\n\n// === Contract Factory ===\nclass ContractFactory {\n    private bytecodes = new Map<string, string>();\n\n    register(name: string, bytecode: string): void { this.bytecodes.set(name, bytecode); }\n    deploy(name: string, args: string): { address: string; bytecode: string } {\n        const bc = this.bytecodes.get(name);\n        if (!bc) throw new Error(`Contract ${name} not found`);\n        let addr = 0;\n        for (let i = 0; i < (bc + args).length; i++) addr = ((addr << 5) - addr) + (bc + args).charCodeAt(i);\n        return { address: `0x${Math.abs(addr).toString(16).padStart(40, '0')}`, bytecode: bc + args };\n    }\n}\n\n// === Demo ===\nconst sel = new SelectorGenerator();\nconsole.log(`Selector balanceOf: ${sel.selectorFromSignature('balanceOf', ['address'])}`);\nconsole.log(`Selector transfer: ${sel.selectorFromSignature('transfer', ['address', 'uint256'])}`);\n\nconst evSig = new EventSignature();\nconsole.log(`Transfer event hash: ${evSig.hash('Transfer', ['address', 'address', 'uint256']).slice(0, 20)}...`);\n\nconst layout = new StorageLayout();\nconst packed = layout.packValues([255, 15, 1], [8, 4, 1]);\nconsole.log(`Packed storage: ${packed.toString(16)}`);\nconsole.log(`Unpacked: ${layout.unpackValues(packed, [8, 4, 1])}`);\n\nconst mod = new ModifierEngine();\nmod.defineModifier('onlyOwner', (fn) => { console.log('  modifier: onlyOwner'); return fn(); });\nmod.defineModifier('nonReentrant', (fn) => { console.log('  modifier: nonReentrant'); return fn(); });\nmod.execute(() => { console.log('  function body'); return 'ok'; }, ['onlyOwner', 'nonReentrant']);\n\nconst factory = new ContractFactory();\nfactory.register('Token', '0x60806040');\nconst deployed = factory.deploy('Token', '0000000000000000000000000000000000000000000000000000000000000001');\nconsole.log(`Deployed Token at: ${deployed.address}`);\n\nconst decoded = ABIDecoder.decode('0x000000000000000000000000abc1230000000000000000000000000000000000000000000000000000000000000001', ['address', 'uint256']);\nconsole.log(`Decoded: ${decoded[0]}, ${decoded[1]}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// solidity\n// distributed-ledger-crypto implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'solidity', data: { topic: 'distributed-ledger-crypto' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solidity is the most widely used language for EVM-compatible smart contracts."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Efficient use of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "storage"
        }), " vs. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memory"
        }), " vs. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calldata"
        }), " is critical for gas optimization."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function modifiers and visibility levels provide robust control over contract behavior."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token standards (ERC-20, ERC-721, ERC-1155) enable interoperability across the ecosystem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security must be designed into the contract from the beginning using established patterns."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The proxy pattern enables upgradeability while preserving state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common vulnerabilities (reentrancy, overflow, front-running) must be understood and mitigated."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formal verification provides mathematical guarantees beyond manual audits."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always follow Check-Effects-Interactions — update state before external calls."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use OpenZeppelin's audited contracts for standards (ERC-20, ERC-721) rather than writing from scratch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the proxy pattern for production contracts that may need future upgrades."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calldata"
        }), " for read-only function parameters and pack struct fields to save gas."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run Slither and Mythril static analysis before every deployment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write fuzz tests with Foundry to cover edge cases in contract logic."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mapping"
        }), " data type?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "external"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "public"
        }), " visibility."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is it important to use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "view"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pure"
        }), " when possible?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), " global variable represent?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the proxy pattern enable upgradeability?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "add(uint a, uint b)"
        }), " that returns the sum but fails if the result exceeds 2^256-1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mapping"
        }), " that stores the balance of different tokens for different users."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a modifier ", (0,jsx_runtime.jsx)(_components.code, {
          children: "costs(uint amount)"
        }), " that requires the caller to send at least ", (0,jsx_runtime.jsx)(_components.code, {
          children: "amount"
        }), " Wei."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a simple ERC-721 contract that mints unique NFTs with metadata URIs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Analyze the \"DAO Hack\" and explain why updating the state ", (0,jsx_runtime.jsx)(_components.em, {
          children: "after"
        }), " an external call led to a catastrophic failure. Write a Solidity test that demonstrates the vulnerability and the fix."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research ERC-4626 (Tokenized Vault Standard) and implement a simplified yield-bearing vault that accepts deposits and tracks shares."
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