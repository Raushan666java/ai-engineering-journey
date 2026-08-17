"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[35794],{

/***/ 44092
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_blockchain_05_ethereum_md_938_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-blockchain-05-ethereum-md-938.json
const site_docs_courses_blockchain_05_ethereum_md_938_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/blockchain/05-ethereum","title":"Chapter 5: Ethereum and Smart Contracts","description":"Previous The Bitcoin Network | Next Smart Contract Development","source":"@site/docs/courses/blockchain/05-ethereum.md","sourceDirName":"courses/blockchain","slug":"/blockchain/05-ethereum","permalink":"/ai-engineering-journey/blockchain/05-ethereum","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-ethereum","slug":"/blockchain/05-ethereum","title":"Chapter 5: Ethereum and Smart Contracts","sidebar_label":"Chapter 5: Ethereum and Smart Contracts","sidebar_position":5},"sidebar":"course-blockchain","previous":{"title":"Chapter 4: The Bitcoin Network","permalink":"/ai-engineering-journey/blockchain/04-bitcoin"},"next":{"title":"Chapter 6: Smart Contract Development","permalink":"/ai-engineering-journey/blockchain/06-solidity"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/blockchain/05-ethereum.md


const frontMatter = {
	id: '05-ethereum',
	slug: '/blockchain/05-ethereum',
	title: 'Chapter 5: Ethereum and Smart Contracts',
	sidebar_label: 'Chapter 5: Ethereum and Smart Contracts',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Ethereum and Smart Contracts';

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
  "value": "The Account Model",
  "id": "the-account-model",
  "level": 3
}, {
  "value": "State Trie (Patricia Merkle Trie)",
  "id": "state-trie-patricia-merkle-trie",
  "level": 3
}, {
  "value": "The Ethereum Virtual Machine (EVM)",
  "id": "the-ethereum-virtual-machine-evm",
  "level": 3
}, {
  "value": "EVM Opcodes",
  "id": "evm-opcodes",
  "level": 3
}, {
  "value": "Gas and Economic Security",
  "id": "gas-and-economic-security",
  "level": 3
}, {
  "value": "EIP-1559 Fee Market",
  "id": "eip-1559-fee-market",
  "level": 3
}, {
  "value": "Gas Calculation Example",
  "id": "gas-calculation-example",
  "level": 3
}, {
  "value": "Turing Completeness and The Halting Problem",
  "id": "turing-completeness-and-the-halting-problem",
  "level": 3
}, {
  "value": "Ethereum Upgrades",
  "id": "ethereum-upgrades",
  "level": 3
}, {
  "value": "EOA vs Contract Account Comparison",
  "id": "eoa-vs-contract-account-comparison",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Simple Storage Contract",
  "id": "example-1-simple-storage-contract",
  "level": 3
}, {
  "value": "Example 2: Out of Gas Error",
  "id": "example-2-out-of-gas-error",
  "level": 3
}, {
  "value": "Example 3: ERC-20 Transfer with Gas Calculation",
  "id": "example-3-erc-20-transfer-with-gas-calculation",
  "level": 3
}, {
  "value": "Example 4: State Trie Verification",
  "id": "example-4-state-trie-verification",
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
  "value": "TypeScript: Simplified Account State Trie",
  "id": "typescript-simplified-account-state-trie",
  "level": 3
}, {
  "value": "TypeScript: ABI Encoder / Decoder",
  "id": "typescript-abi-encoder--decoder",
  "level": 3
}, {
  "value": "TypeScript: Gas Calculator",
  "id": "typescript-gas-calculator",
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
        id: "chapter-5-ethereum-and-smart-contracts",
        children: "Chapter 5: Ethereum and Smart Contracts"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/04-bitcoin",
          children: "Chapter 4: The Bitcoin Network"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/06-solidity",
          children: "Chapter 6: Smart Contract Development"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the Ethereum Account model with the Bitcoin UTXO model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between Externally Owned Accounts (EOA) and Contract Accounts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the Ethereum Virtual Machine (EVM) architecture and bytecode execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the state trie (Patricia Merkle Trie) and its role in Ethereum state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate gas costs for common operations and understand EIP-1559 fee market"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe EVM opcodes and their execution model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the history of Ethereum upgrades (Merge, Shanghai, Dencun)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the concept of Turing completeness and the halting problem in blockchain"
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
            children: "Account Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOA (users) vs Contract (code) accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key distinction from Bitcoin's UTXO model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sandboxed, deterministic runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every node runs every transaction — expensive but trustless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smart Contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-executing immutable code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy once, runs forever as programmed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computational cost measured per opcode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents infinite loops, funds network security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Trie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patricia Merkle Trie maps address ? state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiently proves account existence and balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EIP-1559"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base fee + priority fee (tip)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deflationary burn mechanism, better fee estimation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EIP-4844"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proto-Danksharding (blob transactions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dramatically reduces L2 fees"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Account Model] --> B[State Trie]\n    B --> C[EVM Architecture]\n    C --> D[Smart Contracts]\n    D --> E[Gas Economics & EIP-1559]\n    E --> F[EVM Opcodes]\n    F --> G[Turing Completeness]\n    G --> H[Ethereum Upgrades]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-account-model",
      children: "The Account Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike Bitcoin, Ethereum uses an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Account-based model"
      }), " (similar to a bank account). The \"Global State\" of Ethereum is a mapping of addresses to account states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Two account types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "EOA (Externally Owned Account):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Controlled by a private key"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Can initiate transactions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Has ETH balance and nonce"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No associated code"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Contract Account:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Controlled by code (smart contract)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Executes when triggered by an EOA or another contract"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Has ETH balance, nonce, storage, and code hash"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cannot initiate transactions on its own"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph AccountTypes[\"Ethereum Account Types\"]\n        EOA[\"EOA (Externally Owned)<br/>- Balance: 2.5 ETH<br/>- Nonce: 3<br/>- Code: None<br/>- Storage: None\"]\n        CA[\"Contract Account<br/>- Balance: 10 ETH<br/>- Nonce: 1<br/>- CodeHash: 0xabc...<br/>- StorageRoot: 0xdef...\"]\n    end\n    \n    EOA -->|\"Creates transaction\"| CA\n    CA -->|\"Executes code\"| CA\n    EOA -->|\"Signs with private key\"| Network\n    \n    User[\"Human User\"] -->|\"Controls\"| EOA\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Account State Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "nonce:"
        }), " Number of transactions sent (EOA) or number of contracts created (Contract)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "balance:"
        }), " Ether balance in Wei (1 ETH = 10^18 Wei)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "storageRoot:"
        }), " Root hash of the account's storage trie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "codeHash:"
        }), " Hash of the account's bytecode (empty for EOAs)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state-trie-patricia-merkle-trie",
      children: "State Trie (Patricia Merkle Trie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ethereum uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Modified Merkle Patricia Trie"
      }), " to store the global state. Unlike Bitcoin's simple UTXO set, Ethereum maintains a single authenticated data structure that maps every address to its account state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    Root[\"State Root<br/>(Global state hash)\"]\n    Node1[\"Branch Node\"]\n    Node2[\"Branch Node\"]\n    Leaf1[\"Leaf: 0xAb...<br/>Balance: 2.5 ETH<br/>Nonce: 3\"]\n    Leaf2[\"Leaf: 0xBc...<br/>Balance: 10 ETH<br/>Nonce: 1<br/>CodeHash: 0xabc\"]\n    Leaf3[\"Leaf: 0xDf...<br/>Balance: 0.1 ETH<br/>Nonce: 0\"]\n    \n    Root --> Node1\n    Node1 --> Node2\n    Node1 --> Leaf1\n    Node2 --> Leaf2\n    Node2 --> Leaf3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why a Patricia Trie?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Efficient proofs:"
        }), " Prove any account's state with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "O(log n)"
        }), " hashes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic:"
        }), " Same state always produces the same root hash"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insertion order independent:"
        }), " Different order of inserts still produces the same trie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update efficiency:"
        }), " Writing to storage only updates affected branches"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-ethereum-virtual-machine-evm",
      children: "The Ethereum Virtual Machine (EVM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The EVM is a sandboxed runtime environment for executing smart contract code. It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Turing complete"
      }), ", meaning it can perform any computation given enough resources and time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph EVMArchitecture[\"EVM Architecture\"]\n        Code[\"Contract Bytecode\"]\n        Stack[\"Stack<br/>(1024 max depth)\"]\n        Memory[\"Memory<br/>(Volatile, byte-addressable)\"]\n        Storage[\"Storage<br/>(Persistent, key-value)\"]\n        PC[\"Program Counter\"]\n        GasCounter[\"Gas Counter\"]\n    end\n    \n    Code -->|\"Fetches instruction\"| PC\n    PC -->|\"Executes opcode\"| Stack\n    Stack --> Memory\n    Stack --> Storage\n    GasCounter -->|\"Tracks consumption\"| Stack\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "EVM execution model:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack-based:"
        }), " All operations push/pop from a 1024-element stack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic:"
        }), " Same code + same input ? same output on every node"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Isolated:"
        }), " Contracts cannot access the filesystem, network, or other contracts' internal storage directly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serialized:"
        }), " One transaction executes at a time per contract (no concurrency issues)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "evm-opcodes",
      children: "EVM Opcodes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The EVM has ~140+ opcodes categorized by function:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Opcodes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADD, SUB, MUL, DIV, MOD, ADDMOD, MULMOD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer math (256-bit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LT, GT, EQ, ISZERO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AND, OR, XOR, NOT, SHL, SHR, SAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MLOAD, MSTORE, MSTORE8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volatile memory access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLOAD, SSTORE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent storage (expensive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BALANCE, CALLER, ORIGIN, ADDRESS, CALLVALUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block Info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BLOCKHASH, COINBASE, TIMESTAMP, NUMBER, GASLIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control Flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JUMP, JUMPI, JUMPDEST, PC, STOP, RETURN, REVERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execution flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOG0, LOG1, LOG2, LOG3, LOG4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event emission"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CALL, CALLCODE, DELEGATECALL, STATICCALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract interaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE, CREATE2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract deployment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gas costs for common opcodes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Opcode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gas"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADD/SUB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MUL/DIV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplication/division"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BALANCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets account balance (warm access)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLOAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2100 (cold), 100 (warm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load from storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSTORE (zero?nonzero)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write to storage (cold)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSTORE (nonzero?nonzero)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call another contract (warm)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy new contract"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELFDESTRUCT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destroy contract"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gas-and-economic-security",
      children: "Gas and Economic Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To prevent infinite loops and resource abuse (the Halting Problem), Ethereum introduces ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gas"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph GasMechanism[\"Gas Mechanism\"]\n        Tx[\"Transaction\"]\n        GasLimit[\"Gas Limit: 100,000\"]\n        GasPrice[\"Gas Price: 50 Gwei\"]\n        TotalFee[\"Max Fee: 100,000 × 50 = 5,000,000 Gwei<br/>= 0.005 ETH\"]\n        Execution[\"EVM Executes...\"\n        UsedGas[\"Gas Used: 45,000\"]\n        Refund[\"Unused Gas Refunded:<br/>55,000 × 50 = 2,750,000 Gwei\"]\n    end\n    \n    Tx --> GasLimit\n    Tx --> GasPrice\n    GasLimit --> TotalFee\n    GasPrice --> TotalFee\n    GasLimit --> Execution\n    Execution --> UsedGas\n    UsedGas --> Refund\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gas:"
        }), " Unit of computational work (each opcode costs fixed gas)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gas Price:"
        }), " Amount you pay per unit of gas (in Gwei, 1 Gwei = 10^-9 ETH)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gas Limit:"
        }), " Maximum gas you allow the transaction to consume"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total Fee:"
        }), " Gas Used × Gas Price"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EIP-1559 (London fork):"
        }), " Base fee (burned) + Priority fee (tip to miner)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eip-1559-fee-market",
      children: "EIP-1559 Fee Market"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Introduced in the London hard fork (August 2021):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface EIP1559Transaction {\n    maxFeePerGas: bigint;    // Maximum total fee willing to pay\n    maxPriorityFeePerGas: bigint;  // Tip to validator\n    baseFeePerGas: bigint;   // Network-calculated base fee (burned)\n}\n\nfunction calculateEffectiveFee(\n    maxFee: bigint,\n    maxPriority: bigint,\n    baseFee: bigint\n): bigint {\n    // Effective priority = min(maxPriority, maxFee - baseFee)\n    const effectivePriority = maxFee - baseFee < maxPriority\n        ? maxFee - baseFee\n        : maxPriority;\n    return baseFee + effectivePriority;\n}\n\n// Base fee adjusts based on block fullness\nfunction adjustBaseFee(\n    currentBaseFee: bigint,\n    blockGasUsed: number,\n    blockGasTarget: number  // 15M for pre-Dencun, 30M post\n): bigint {\n    // Target is 50% of gas limit\n    const target = blockGasTarget;\n    if (blockGasUsed > target) {\n        // Block >50% full ? base fee increases by up to 12.5%\n        const excess = blockGasUsed - target;\n        const increase = (excess * currentBaseFee) / (BigInt(target) * 8n);\n        return currentBaseFee + increase;\n    } else {\n        // Block <50% full ? base fee decreases\n        const deficit = target - blockGasUsed;\n        const decrease = (deficit * currentBaseFee) / (BigInt(target) * 8n);\n        return currentBaseFee - decrease;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key changes from EIP-1559:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Base fee is burned (removed from circulation) — can make ETH deflationary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority fee goes to validator as incentive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better fee estimation (base fee is deterministic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users no longer need to guess gas prices manually"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gas-calculation-example",
      children: "Gas Calculation Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function estimateContractCallGas(\n    functionComplexity: \"simple\" | \"medium\" | \"complex\"\n): number {\n    switch (functionComplexity) {\n        case \"simple\":\n            // Simple read/view function, no storage writes\n            return 50000;\n        case \"medium\":\n            // Some storage writes, basic computation\n            return 150000;\n        case \"complex\":\n            // Multiple storage writes, loops, external calls\n            return 500000;\n    }\n}\n\n// Example: Calling a token transfer function\nconst gasUsed = 45000;  // Typical ERC-20 transfer\nconst gasPrice = 50n;   // 50 Gwei\nconst baseFee = 30n;    // 30 Gwei base, 20 Gwei tip\n\nconst fee = gasUsed * Number(gasPrice);  // in Gwei\nconst ethFee = fee / 1e9;  // Convert to ETH\n// 45000 * 50 = 2,250,000 Gwei = 0.00225 ETH\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "turing-completeness-and-the-halting-problem",
      children: "Turing Completeness and The Halting Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ethereum is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Turing complete"
      }), " — it can simulate any computable function. This is both a blessing and a curse:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Benefit:"
        }), " Can express any logic — complex DeFi protocols, NFTs, DAOs, etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Challenge:"
        }), " Can't know if a program will finish (the Halting Problem is undecidable)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethereum's solution:"
      }), " Gas! Instead of proving a program halts, Ethereum charges for every computational step. If a transaction runs out of gas, it reverts but the miner keeps the gas. This ensures:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Infinite loops cost attackers real money"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Miners are compensated for computation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The network remains available (no single transaction can halt all nodes)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ethereum-upgrades",
      children: "Ethereum Upgrades"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "timeline\n    title Ethereum Major Upgrades\n    Frontier : July 2015 : First live release\n    Homestead : March 2016 : Second major release\n    DAO Fork : July 2016 : Reversed DAO hack\n    Metropolis Byzantium : Oct 2017 : Privacy features\n    Metropolis Constantinople : Feb 2019 : Gas optimization\n    Istanbul : Dec 2019 : ZK readiness\n    London : Aug 2021 : EIP-1559 fee burn\n    Paris (Merge) : Sept 2022 : PoS transition\n    Shanghai : April 2023 : ETH withdrawals\n    Dencun : March 2024 : EIP-4844 blobs\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Upgrade"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Changes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frontier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jul 2015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Homestead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mar 2016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second major release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sep 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PoW ? PoS, 99.9% energy reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shanghai"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apr 2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enabled staking withdrawals (EIP-4895)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dencun"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mar 2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proto-Danksharding (EIP-4844), blob transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Electra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PeerDAS, further scalability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Merge (Paris):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transitioned execution layer from PoW to PoS (Beacon Chain)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduced energy consumption by ~99.9%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validators replaced miners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same EVM, same smart contracts, same execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dencun (EIP-4844):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Introduced ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "blob transactions"
        }), " — temporary data storage for L2 rollups"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduced L2 fees by 10-100x"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No permanent state storage for blobs (pruned after ~18 days)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Foundation for future full Danksharding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eoa-vs-contract-account-comparison",
      children: "EOA vs Contract Account Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "EOA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contract Account"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can initiate transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has persistent storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has bytecode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create at"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User generates key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address derivation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Keccak256(pubkey)[12:]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Keccak256(sender, nonce)[12:]"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-simple-storage-contract",
      children: "Example 1: Simple Storage Contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract SimpleStorage {\n    uint256 public storedData;\n\n    function set(uint256 x) public {\n        storedData = x;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment:"
        }), " Alice sends a transaction with the contract's bytecode."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution:"
        }), " Bob calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "set(42)"
        }), ". He pays for the gas required to update the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "storedData"
        }), " variable in Ethereum's global storage."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Gas breakdown for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "set(42)"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Base cost: 21,000 gas (transaction)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSTORE (zero ? non-zero, cold): 22,100 gas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total: ~43,100 gas"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-out-of-gas-error",
      children: "Example 2: Out of Gas Error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alice sends a transaction to a complex contract with a Gas Limit of 21,000."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The transaction starts (base cost: 21,000 gas consumed)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "There is 0 gas remaining for execution."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " The transaction fails. The state changes are reverted, but the 21,000 gas is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not refunded"
        }), " because the miner already performed the work."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class EVM {\n    private gasCounter: number;\n    private gasLimit: number;\n\n    execute(code: string, gasLimit: number): ExecutionResult {\n        this.gasLimit = gasLimit;\n        this.gasCounter = 0;\n\n        // Base transaction cost\n        this.consumeGas(21000, \"transaction base fee\");\n\n        try {\n            // Execute opcodes\n            while (this.gasCounter < this.gasLimit) {\n                const opcode = this.fetchNextOpcode(code);\n                this.executeOpcode(opcode);\n            }\n            return { success: true, gasUsed: this.gasCounter };\n        } catch (error) {\n            if (error instanceof OutOfGasError) {\n                return {\n                    success: false,\n                    gasUsed: this.gasLimit,  // All gas consumed!\n                    error: \"out of gas\",\n                };\n            }\n            throw error;\n        }\n    }\n\n    private consumeGas(amount: number, reason: string): void {\n        if (this.gasCounter + amount > this.gasLimit) {\n            throw new OutOfGasError(reason);\n        }\n        this.gasCounter += amount;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-erc-20-transfer-with-gas-calculation",
      children: "Example 3: ERC-20 Transfer with Gas Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ERC20TransferParameters {\n    to: string;\n    value: bigint;\n}\n\nfunction estimateERC20TransferGas(totalHolders?: number): number {\n    // Base: 21000\n    // 2 SLOAD (balanceOf sender, totalSupply check): 2 * 2100 = 4200\n    // 2 SSTORE (sender balance--, receiver balance++): 2 * 5000 = 10000\n    // 2 LOG operations: 2 * 750 = 1500\n    // SLOAD for allowance if needed: 2100\n    // Various checks and overhead: ~5000\n    return 21000 + 4200 + 10000 + 1500 + 2100 + 5000;\n    // ˜ 45800 gas for a typical transfer\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-state-trie-verification",
      children: "Example 4: State Trie Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Simplified representation of Patricia Merkle Trie verification\nfunction verifyAccountState(\n    address: string,\n    expectedBalance: bigint,\n    stateRootProof: string[],\n    globalStateRoot: string\n): boolean {\n    // Walk through the state trie using Merkle proofs\n    let currentNodeHash = globalStateRoot;\n    \n    for (const nibble of hexToNibbles(address)) {\n        const branchNode = getNode(currentNodeHash);\n        currentNodeHash = branchNode.children[parseInt(nibble, 16)];\n        \n        if (!currentNodeHash) {\n            return false; // Address does not exist\n        }\n    }\n    \n    // Leaf node contains the account's RLP-encoded state\n    const accountState = rlpDecode(getNode(currentNodeHash));\n    return BigInt(accountState.balance) === expectedBalance;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Ethereum's gas mechanism solves the halting problem for a Turing-complete blockchain by charging per-operation, ensuring infinite loops cost an attacker real money rather than halting the network."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When deploying a smart contract, the gas cost scales with storage writes (SSTORE), not instruction count. Writing to a storage slot from zero costs ~22,100 gas, while writing from non-zero costs ~5,000 gas. Optimize by minimizing storage writes and using events for non-critical data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Smart contracts are immutable after deployment. If a bug is discovered, funds are at risk until a new contract is deployed and users migrate. Always audit contracts and include upgrade patterns (proxy contracts) for production systems."]
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
            children: "EOA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled by private key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can initiate transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User wallets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contract Account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled by contract code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has storage and logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DApps, DeFi protocols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UTXO Model (Bitcoin)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State = set of unspent outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No code execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple payments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Account Model (Ethereum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State = address ? balance mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports arbitrary computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contracts, DeFi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computation cost unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents DoS, funds network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All EVM operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Trie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patricia Merkle Trie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient state proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EIP-1559"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base fee burning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deflationary, better UX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fee market improvement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EIP-4844"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blob transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheap L2 data availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollup scaling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Account Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOA (externally owned), Contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOA txs are signed; Contract txs are triggered internally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EVM Ops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADD (3 gas), SSTORE (22K/5K), BALANCE (2600)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gas costs vary by operation complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Denominations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ETH = 10? Gwei = 10¹8 Wei"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gas price typically quoted in Gwei"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Contract Lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy ? Interact ? Selfdestruct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No upgrade by default — use proxy pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State Transition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s[t+1] = ?(s[t], T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic across all nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Base Fee"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EIP-1559: Burned, adjusts by up to 12.5%/block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deflationary when blocks >50% full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blobs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EIP-4844: Temporary data, pruned after 18 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-100x cheaper L2 fees"
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
            children: "Account Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token standards (ERC-20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permissioned EVMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EVM optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gas Economics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap pricing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private chain pricing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EIP-1559 fee market"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smart Contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lending protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Transition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash loans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-contract calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-chain state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel EVM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Trie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "World state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Light client sync"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why do Ethereum transactions cost more gas when writing to a storage slot for the first time (vs updating)?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It's a bug in the EVM"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Writing from zero to non-zero is a cold storage access requiring more computation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It's randomly determined each block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Gas cost is the same regardless"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Writing from zero to non-zero is a cold storage access requiring more computation.** SSTORE from zero costs ~22,100 gas vs ~5,000 for updating existing storage. This incentivizes users to clear unused storage (gas refund).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens to the state changes of an Ethereum transaction that runs out of gas?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Partial state changes remain"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) All state changes are reverted, but gas is not refunded"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The transaction succeeds partially"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Both state and gas are refunded"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) All state changes are reverted, but gas is not refunded.** The miner performed computational work, so gas is consumed even though the transaction ultimately failed. This prevents DoS attacks where attackers revert cheap transactions.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the critical security difference between an EOA and a Contract Account?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) EOAs can hold ETH, contracts cannot"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Contract accounts can be programmed to execute multi-step operations atomically; EOAs cannot"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) EOAs have higher gas limits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Contract accounts cannot send transactions"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Contract accounts can be programmed to execute multi-step operations atomically.** This enables composable DeFi operations (flash loans, multi-hop swaps) that execute as atomic units — either all steps succeed or none do.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the base fee in EIP-1559?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) A fee paid directly to the miner"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A mandatory fee that is burned (removed from circulation)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) An optional tip for priority"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) A percentage of the transaction value"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) A mandatory fee that is burned (removed from circulation).** In EIP-1559, the base fee is calculated per-block based on demand and is burned, potentially making ETH deflationary. The priority fee (tip) goes to the validator.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does Ethereum use a Patricia Merkle Trie instead of Bitcoin's simple Merkle tree?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Patricia tries are faster to compute"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Patricia tries allow efficient proof of individual account states (key-value queries)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Patricia tries use less storage"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Bitcoin's tree is actually a Patricia trie"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Patricia tries allow efficient proof of individual account states (key-value queries).** Ethereum needs to efficiently read, update, and prove the state of any account (balance, nonce, storage, code) by address. A Patricia Trie enables efficient key-value lookups and proofs, unlike Bitcoin's transaction-oriented Merkle tree.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-simplified-account-state-trie",
      children: "TypeScript: Simplified Account State Trie"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createHash } from \"node:crypto\";\n\nconst sha256 = (d: string): string => createHash(\"sha256\").update(d).digest(\"hex\");\n\ninterface AccountState {\n  nonce: number; balance: bigint; storageRoot: string; codeHash: string;\n}\n\nclass StateTrie {\n  nodes: Map<string, { children: Map<string, string>; value?: AccountState }> = new Map();\n  root: string = \"\";\n\n  put(address: string, account: AccountState): void {\n    const hash = sha256(address);\n    const nibbles = hash.split(\"\");\n    let current = this.root;\n    let path = \"\";\n    for (const nibble of nibbles.slice(0, 8)) {\n      path += nibble;\n      if (!this.nodes.has(path)) {\n        this.nodes.set(path, { children: new Map() });\n        if (current) {\n          const parent = this.nodes.get(current);\n          if (parent) parent.children.set(nibble, path);\n        }\n        if (!this.root) this.root = path;\n      }\n      current = path;\n    }\n    const leaf = this.nodes.get(current);\n    if (leaf) leaf.value = account;\n  }\n\n  get(address: string): AccountState | undefined {\n    const hash = sha256(address);\n    const nibbles = hash.split(\"\").slice(0, 8);\n    let current = this.root;\n    for (const nibble of nibbles) {\n      const node = this.nodes.get(current);\n      if (!node) return undefined;\n      const child = node.children.get(nibble);\n      if (!child) return undefined;\n      current = child;\n    }\n    return this.nodes.get(current)?.value;\n  }\n\n  getRootHash(): string {\n    const entries = [...this.nodes.entries()].filter(([, n]) => n.value);\n    return sha256(entries.map(([k, v]) => k + JSON.stringify(v.value)).join(\"|\"));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-abi-encoder--decoder",
      children: "TypeScript: ABI Encoder / Decoder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ABIEncoder {\n  static encodeFunctionSignature(sig: string): string {\n    return sha256(sig).slice(0, 8);\n  }\n\n  static encodeUint(value: bigint): string {\n    return value.toString(16).padStart(64, \"0\");\n  }\n\n  static encodeAddress(addr: string): string {\n    return \"0\".repeat(24) + addr.slice(2).toLowerCase();\n  }\n\n  static encodeParams(types: string[], values: unknown[]): string {\n    return types.map((t, i) => {\n      const v = values[i];\n      if (t === \"uint256\") return this.encodeUint(BigInt(v as number));\n      if (t === \"address\") return this.encodeAddress(v as string);\n      if (t === \"bool\") return \"0\".repeat(63) + (v ? \"1\" : \"0\");\n      if (t.startsWith(\"bytes\")) return (v as string).padEnd(64, \"0\");\n      return \"\";\n    }).join(\"\");\n  }\n\n  static encodeCall(sig: string, types: string[], values: unknown[]): string {\n    return this.encodeFunctionSignature(sig) + this.encodeParams(types, values);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-gas-calculator",
      children: "TypeScript: Gas Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class GasCalculator {\n  static readonly BASE_TX = 21000;\n  static readonly SSTORE_SET = 22100;\n  static readonly SSTORE_UPDATE = 5000;\n  static readonly SLOAD_COLD = 2100;\n  static readonly SLOAD_WARM = 100;\n  static readonly CALL = 2600;\n  static readonly CREATE = 32000;\n  static readonly LOG = 375;\n  static readonly SHA3 = 30;\n\n  static estimateContractCall(\n    storageWrites: number,\n    storageReads: number,\n    internalCalls: number,\n    logCount: number\n  ): number {\n    let gas = this.BASE_TX;\n    gas += storageWrites * this.SSTORE_SET;\n    gas += storageReads * this.SLOAD_COLD;\n    gas += internalCalls * this.CALL;\n    gas += logCount * this.LOG;\n    return gas;\n  }\n\n  static calculateFee(gasUsed: number, baseFeeGwei: number, priorityGwei: number): string {\n    const totalGwei = BigInt(gasUsed) * BigInt(baseFeeGwei + priorityGwei);\n    return `${totalGwei} Gwei (${Number(totalGwei) / 1e9} ETH)`;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Account State Trie (simplified) ===\ninterface AccountState { nonce: number; balance: bigint; storageRoot: string; codeHash: string; }\nclass StateTrie {\n    private state = new Map<string, AccountState>();\n\n    createAccount(addr: string, balance: bigint): void {\n        this.state.set(addr.toLowerCase(), { nonce: 0, balance, storageRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b41', codeHash: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470' });\n    }\n    getAccount(addr: string): AccountState | undefined { return this.state.get(addr.toLowerCase()); }\n    transfer(from: string, to: string, amount: bigint): boolean {\n        const f = this.getAccount(from), t = this.getAccount(to);\n        if (!f || f.balance < amount) return false;\n        if (!t) return false;\n        this.state.set(from.toLowerCase(), { ...f, nonce: f.nonce + 1, balance: f.balance - amount });\n        this.state.set(to.toLowerCase(), { ...t, balance: t.balance + amount });\n        return true;\n    }\n    incrementNonce(addr: string): void {\n        const acct = this.getAccount(addr);\n        if (acct) this.state.set(addr.toLowerCase(), { ...acct, nonce: acct.nonce + 1 });\n    }\n    dump(): void { this.state.forEach((v, k) => console.log(`  ${k}: balance=${v.balance} nonce=${v.nonce}`)); }\n}\n\n// === Transaction Receipt Generator ===\ninterface Receipt { txHash: string; status: number; gasUsed: number; logs: { address: string; topics: string[]; data: string }[]; }\nclass ReceiptGenerator {\n    generate(txHash: string, success: boolean, gasUsed: number, logs: { address: string; topics: string[]; data: string }[]): Receipt {\n        return { txHash, status: success ? 1 : 0, gasUsed, logs };\n    }\n    receiptRoot(receipts: Receipt[]): string {\n        let h = 0;\n        for (const r of receipts) {\n            h ^= r.status + r.gasUsed;\n            for (const log of r.logs) h ^= log.topics.reduce((a, t) => a + parseInt(t.slice(2, 10), 16), 0);\n        }\n        return `0x${Math.abs(h).toString(16).padStart(64, '0')}`;\n    }\n}\n\n// === Gas Cost Calculator ===\nclass GasCalculator {\n    static readonly BASE_TX = 21000;\n    static readonly SSTORE_SET = 20000;\n    static readonly SSTORE_RESET = 5000;\n    static readonly SLOAD_COLD = 2100;\n    static readonly CALL = 700;\n    static readonly LOG = 375;\n    static readonly SELFDESTRUCT = 5000;\n\n    static txDataCost(data: string): number {\n        let cost = 0;\n        for (let i = 2; i < data.length; i += 2) cost += data.slice(i, i + 2) === '00' ? 4 : 16;\n        return cost;\n    }\n    static contractCreation(bytecode: string): number {\n        const base = 32000;\n        const codeCost = Math.ceil((bytecode.length - 2) / 2) * 200;\n        return base + codeCost;\n    }\n    static totalGas(txData: string, storageWrites: number, storageReads: number, calls: number): number {\n        return this.BASE_TX + this.txDataCost(txData) + storageWrites * this.SSTORE_SET + storageReads * this.SLOAD_COLD + calls * this.CALL;\n    }\n    static fee(gasUsed: number, baseFeeGwei: number, priorityGwei: number): string {\n        return `${(gasUsed * (baseFeeGwei + priorityGwei)).toLocaleString()} Gwei`;\n    }\n}\n\n// === ABI Encoder ===\nclass ABIEncoder {\n    static encodeFunctionSignature(sig: string): string {\n        let h = 0;\n        for (let i = 0; i < sig.length; i++) h = ((h << 5) - h) + sig.charCodeAt(i);\n        return `0x${Math.abs(h).toString(16).padStart(8, '0')}`;\n    }\n    static encodeUint(value: bigint): string {\n        return value.toString(16).padStart(64, '0');\n    }\n    static encodeAddress(addr: string): string {\n        return '0'.repeat(24) + addr.slice(2).toLowerCase();\n    }\n    static encodeBool(value: boolean): string {\n        return '0'.repeat(63) + (value ? '1' : '0');\n    }\n    static encodeCall(sig: string, args: string[]): string {\n        const selector = this.encodeFunctionSignature(sig).slice(2);\n        return '0x' + selector + args.join('');\n    }\n}\n\n// === Event Log Topic Extractor ===\nclass EventLogParser {\n    private readonly signatureHash: (sig: string) => string;\n    constructor() {\n        this.signatureHash = (sig: string) => {\n            let h = 0;\n            for (let i = 0; i < sig.length; i++) h = ((h << 5) - h) + sig.charCodeAt(i);\n            return Math.abs(h).toString(16).padStart(64, '0');\n        };\n    }\n    parseLog(topics: string[], data: string, knownEvents: Map<string, string>): { event: string; args: Record<string, string> } | null {\n        const sig = topics[0]?.slice(2);\n        for (const [event, abi] of knownEvents) {\n            if (this.signatureHash(event) === sig) {\n                const args: Record<string, string> = {};\n                topics.slice(1).forEach((t, i) => args[`topic${i}`] = t);\n                args.data = data;\n                return { event, args };\n            }\n        }\n        return null;\n    }\n}\n\n// === Demo ===\nconst trie = new StateTrie();\ntrie.createAccount('0xalice', BigInt(100));\ntrie.createAccount('0xbob', BigInt(50));\nconsole.log('State before transfer:');\ntrie.dump();\ntrie.transfer('0xalice', '0xbob', BigInt(25));\nconsole.log('State after transfer:');\ntrie.dump();\n\nconst gc = new GasCalculator();\nconst txData = '0x6080604052';\nconsole.log(`Tx data cost: ${gc.txDataCost(txData)}`);\nconsole.log(`Total gas (1 write, 2 reads): ${gc.totalGas(txData, 1, 2, 0)}`);\n\nconst abi = new ABIEncoder();\nconsole.log(`transfer selector: ${abi.encodeFunctionSignature('transfer(address,uint256)')}`);\nconsole.log(`Encoded uint(42): ${abi.encodeUint(BigInt(42)).slice(0, 16)}...`);\n\nconst logs = new EventLogParser();\nconst events = new Map<string, string>();\nevents.set('Transfer(address,address,uint256)', 'transfer');\nconst parsed = logs.parseLog(['0x' + 'ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef', '0x000000000000000000000000alice'], '0x', events);\nconsole.log(`Parsed event: ${parsed?.event ?? 'unknown'}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// ethereum\n// distributed-ledger-crypto implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'ethereum', data: { topic: 'distributed-ledger-crypto' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ethereum is a \"World Computer\" that extends blockchain from payments to general computation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accounts (EOAs and Contracts) are the primary units of state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The EVM provides a consistent, deterministic environment for smart contract execution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gas is the fundamental mechanism for resource allocation and network security."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The state trie (Patricia Merkle Trie) enables efficient account state proofs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EIP-1559 introduced base fee burning for better fee estimation and deflationary pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ethereum has evolved through major upgrades (Merge, Shanghai, Dencun) to improve scalability and sustainability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Smart contracts enable decentralized, trustless logic on a global scale."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use EIP-1559 transactions (", (0,jsx_runtime.jsx)(_components.code, {
          children: "type: 2"
        }), ") for better fee estimation — set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maxFeePerGas"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maxPriorityFeePerGas"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimize SSTORE operations in smart contracts — they cost the most gas."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "storageRoot"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "codeHash"
        }), " in block headers to verify account state via light clients."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For production contracts, always include upgrade mechanisms (proxy pattern) and emergency pause functions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor EIP-4844 blob fees when deploying L2 applications — they are much cheaper than L1 calldata."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between an EOA and a Contract Account?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is Turing completeness both a benefit and a risk for Ethereum?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the relationship between Gwei and Ether."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happens to the \"Nonce\" of an account after a transaction is executed?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the Patricia Merkle Trie differ from a standard Merkle tree?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate the total fee in ETH for a transaction that uses 100,000 gas with a max priority fee of 2 Gwei and a base fee of 30 Gwei."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the storage requirements of the UTXO model versus the Account model for a network with 1 million users."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why \"Gas Price\" fluctuates based on network demand."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate the base fee change if the previous block used 20M gas out of a 30M target."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss the \"Reentrancy\" vulnerability at a high level and explain how it relates to the EVM's execution flow."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research ERC-4337 (Account Abstraction) and explain how it enables smart contract wallets, social recovery, and gas sponsorship without changing the core protocol."
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