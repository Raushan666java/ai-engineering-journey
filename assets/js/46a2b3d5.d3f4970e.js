"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[22892],{

/***/ 39600
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_blockchain_02_cryptography_md_46a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-blockchain-02-cryptography-md-46a.json
const site_docs_courses_blockchain_02_cryptography_md_46a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/blockchain/02-cryptography","title":"Chapter 2: Cryptography for Blockchain","description":"Previous Introduction to Blockchain | Next Consensus Mechanisms","source":"@site/docs/courses/blockchain/02-cryptography.md","sourceDirName":"courses/blockchain","slug":"/blockchain/02-cryptography","permalink":"/ai-engineering-journey/blockchain/02-cryptography","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-cryptography","slug":"/blockchain/02-cryptography","title":"Chapter 2: Cryptography for Blockchain","sidebar_label":"Chapter 2: Cryptography for Blockchain","sidebar_position":2},"sidebar":"course-blockchain","previous":{"title":"Chapter 1: Introduction to Blockchain","permalink":"/ai-engineering-journey/blockchain/01-introduction"},"next":{"title":"Chapter 3: Consensus Mechanisms","permalink":"/ai-engineering-journey/blockchain/03-consensus"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/blockchain/02-cryptography.md


const frontMatter = {
	id: '02-cryptography',
	slug: '/blockchain/02-cryptography',
	title: 'Chapter 2: Cryptography for Blockchain',
	sidebar_label: 'Chapter 2: Cryptography for Blockchain',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Cryptography for Blockchain';

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
  "value": "Cryptographic Hash Functions",
  "id": "cryptographic-hash-functions",
  "level": 3
}, {
  "value": "SHA-256 and the Merkle-Damgård Construction",
  "id": "sha-256-and-the-merkle-damgård-construction",
  "level": 3
}, {
  "value": "Hash Chains",
  "id": "hash-chains",
  "level": 3
}, {
  "value": "Public Key Cryptography (Asymmetric)",
  "id": "public-key-cryptography-asymmetric",
  "level": 3
}, {
  "value": "Elliptic Curve Cryptography (ECC)",
  "id": "elliptic-curve-cryptography-ecc",
  "level": 3
}, {
  "value": "Digital Signatures",
  "id": "digital-signatures",
  "level": 3
}, {
  "value": "Signature Scheme Comparison",
  "id": "signature-scheme-comparison",
  "level": 3
}, {
  "value": "Merkle Trees",
  "id": "merkle-trees",
  "level": 3
}, {
  "value": "Merkle Proof Verification",
  "id": "merkle-proof-verification",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Hashing with SHA-256",
  "id": "example-1-hashing-with-sha-256",
  "level": 3
}, {
  "value": "Example 2: Constructing a Merkle Root for 6 Transactions",
  "id": "example-2-constructing-a-merkle-root-for-6-transactions",
  "level": 3
}, {
  "value": "Example 3: ECDSA Signing and Verification",
  "id": "example-3-ecdsa-signing-and-verification",
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
  "value": "TypeScript: Digital Signature with ECDSA",
  "id": "typescript-digital-signature-with-ecdsa",
  "level": 3
}, {
  "value": "Merkle Tree Verification Process",
  "id": "merkle-tree-verification-process",
  "level": 3
}, {
  "value": "Digital Signature Sign and Verify Flow",
  "id": "digital-signature-sign-and-verify-flow",
  "level": 3
}, {
  "value": "TypeScript: HD Wallet Path Derivation",
  "id": "typescript-hd-wallet-path-derivation",
  "level": 3
}, {
  "value": "TypeScript: Signature Aggregation with BLS-Style Logic",
  "id": "typescript-signature-aggregation-with-bls-style-logic",
  "level": 3
}, {
  "value": "TypeScript: Merkle Proof Verifier",
  "id": "typescript-merkle-proof-verifier",
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
        id: "chapter-2-cryptography-for-blockchain",
        children: "Chapter 2: Cryptography for Blockchain"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/01-introduction",
          children: "Chapter 1: Introduction to Blockchain"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/blockchain/03-consensus",
          children: "Chapter 3: Consensus Mechanisms"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the properties of cryptographic hash functions including preimage resistance and collision resistance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the Merkle-Damgård construction used in SHA-256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the role of Public Key Infrastructure (PKI) and Digital Signatures (ECDSA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct and verify a Merkle Tree from a set of transactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the mathematics behind elliptic curve cryptography at a conceptual level"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare digital signature schemes (ECDSA, Schnorr, BLS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe how hash chains are used in blockchain data structures"
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
            children: "Hash Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic, preimage resistant, collision resistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation of blockchain immutability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merkle-Damgård"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construction pattern for SHA-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables streaming hash of arbitrary-length input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public Key Cryptography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asymmetric keys for identity and ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private key signs, public key verifies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication, non-repudiation, integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematical proof of ownership without revealing the key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merkle Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary tree of hashes summarizes all transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables SPV — verify a transaction without downloading the full chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elliptic curve math for key generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller keys than RSA for equivalent security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Chains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential hashing links blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable history, tamper evidence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Hash Functions] --> B[SHA-256 & Merkle-Damgård]\n    B --> C[Hash Properties]\n    C --> D[Public Key Cryptography]\n    D --> E[Elliptic Curve Cryptography]\n    E --> F[Digital Signatures]\n    F --> G[Merkle Trees]\n    G --> H[Hash Chains & Blockchain]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cryptographic-hash-functions",
      children: "Cryptographic Hash Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A hash function maps an input of arbitrary size to a fixed-size string of characters. For blockchain, hash functions must satisfy four key properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Deterministic:"
          }), " The same input always yields the same output. Without this property, the system would have no way to verify data integrity."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Preimage Resistant:"
          }), " Given an output ", (0,jsx_runtime.jsx)(_components.code, {
            children: "y = H(x)"
          }), ", it is computationally infeasible to find any ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x"
          }), " that produces ", (0,jsx_runtime.jsx)(_components.code, {
            children: "y"
          }), ". This means you cannot reverse a hash to find the original input. This protects the privacy of data stored on-chain."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Second Preimage Resistant:"
          }), " Given an input ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x1"
          }), ", it is computationally infeasible to find another input ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x2"
          }), " such that ", (0,jsx_runtime.jsx)(_components.code, {
            children: "H(x1) = H(x2)"
          }), ". This prevents an attacker from substituting one piece of data for another with the same hash."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Collision Resistant:"
          }), " It is computationally infeasible to find any two distinct inputs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x1"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x2"
          }), " such that ", (0,jsx_runtime.jsx)(_components.code, {
            children: "H(x1) = H(x2)"
          }), ". This is stronger than second-preimage resistance. The birthday paradox means that for an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "n"
          }), "-bit hash, a collision can be found in approximately ", (0,jsx_runtime.jsx)(_components.code, {
            children: "2^(n/2)"
          }), " attempts."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Avalanche Effect:"
          }), " A small change in input (even one bit) leads to a drastically different output (approximately 50% of bits change). This makes it impossible to predict how changes propagate."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph InputChanges[\"Input Changes\"]\n        I1[\"Input: 'Blockchain'\"]\n        I2[\"Input: 'blockchain'\"]\n    end\n    subgraph Outputs[\"SHA-256 Outputs\"]\n        O1[\"ef775988943d8315...\"]\n        O2[\"6175e119424619cd...\"]\n    end\n    I1 --> O1\n    I2 --> O2\n    note[\"Completely different output<br/>despite single-character change<br/>(Avalanche Effect)\"]\n    O1 --> note\n    O2 --> note\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sha-256-and-the-merkle-damgård-construction",
      children: "SHA-256 and the Merkle-Damgård Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SHA-256 (Secure Hash Algorithm 256-bit) is the primary hash function used in Bitcoin and many other blockchains. It belongs to the SHA-2 family and produces a 256-bit (32-byte) output."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SHA-256 uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Merkle-Damgård construction"
      }), ", which works as follows:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Padding:"
        }), " The input message is padded to a multiple of 512 bits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block Processing:"
        }), " The padded message is divided into 512-bit blocks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compression Function:"
        }), " Each block is processed through a compression function along with the previous output (chaining value)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialization Vector (IV):"
        }), " The first block uses a fixed IV as its previous output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Final Output:"
        }), " After all blocks are processed, the final chaining value is the hash."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Input[\"Padded Message (multiple of 512 bits)\"]\n        M1[\"Block 1<br/>(512 bits)\"]\n        M2[\"Block 2<br/>(512 bits)\"]\n        M3[\"Block N<br/>(512 bits)\"]\n    end\n    IV[\"IV<br/>(Initial Vector)\"]\n    F1[\"Compress\"]\n    F2[\"Compress\"]\n    F3[\"Compress\"]\n    Out[\"Hash<br/>(256 bits)\"]\n    \n    IV --> F1\n    M1 --> F1\n    F1 --> F2\n    M2 --> F2\n    F2 --> F3\n    M3 --> F3\n    F3 --> Out\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This construction is important because it allows hashing of arbitrary-length inputs using a fixed-size compression function. It also makes SHA-256 vulnerable to length-extension attacks (which is why Bitcoin uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "H(H(m))"
      }), " or SHA-256d in some contexts)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hash-chains",
      children: "Hash Chains"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A hash chain is created by repeatedly applying a hash function to a value:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "H(H(H(...H(initial_value)...)))"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In blockchain, hash chains are used in two key ways:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Block Chain Linking:"
          }), " Each block header contains the hash of the previous block header, creating a chain of hashes that protects the entire history."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Proof of Work:"
          }), " Miners iterate through nonce values, computing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SHA-256(SHA-256(block_header || nonce))"
          }), " until they find a hash below the target threshold."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function hashChain(seed: string, length: number): string[] {\n    const chain: string[] = [seed];\n    for (let i = 1; i <= length; i++) {\n        // In practice this would be SHA-256\n        const previousHash = chain[i - 1];\n        const nextHash = `H(${previousHash})`;\n        chain.push(nextHash);\n    }\n    return chain;\n}\n// Example output chain:\n// [\"seed\", \"H(seed)\", \"H(H(seed))\", \"H(H(H(seed)))\", ...]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "public-key-cryptography-asymmetric",
      children: "Public Key Cryptography (Asymmetric)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blockchain uses asymmetric cryptography for identity and ownership."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Private Key:"
        }), " A secret (random) number used to sign transactions. Typically 256 bits for ECDSA on the secp256k1 curve."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public Key:"
        }), " Derived from the private key using elliptic curve multiplication. Cannot be reversed to find the private key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Address:"
        }), " A hashed version of the public key (usually through RIPEMD-160 of SHA-256), acting as the user's \"account number.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    PK[\"Private Key<br/>(256-bit random number)\"]\n    PubK[\"Public Key<br/>(point on elliptic curve)\"]\n    Addr[\"Address<br/>(hashed public key)\"]\n    Sig[\"Digital Signature<br/>(r, s values)\"]\n    Tx[\"Transaction<br/>(signed data)\"]\n    \n    PK -->|\"secp256k1<br/>multiplication\"| PubK\n    PubK -->|\"SHA-256 +<br/>RIPEMD-160\"| Addr\n    PK -->|\"Signing\"| Sig\n    Sig -->|\"Appended to\"| Tx\n    PubK -->|\"Verification\"| Sig\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "elliptic-curve-cryptography-ecc",
      children: "Elliptic Curve Cryptography (ECC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bitcoin and Ethereum use ECC with the secp256k1 curve. The core math is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The private key is a random integer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k"
        }), " (256 bits)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The public key is a point on the elliptic curve: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "K = k * G"
        }), ", where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "G"
        }), " is a fixed generator point and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), " represents elliptic curve scalar multiplication."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The security of ECC relies on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Elliptic Curve Discrete Logarithm Problem (ECDLP)"
      }), ": given ", (0,jsx_runtime.jsx)(_components.code, {
        children: "K"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "G"
      }), ", it is computationally infeasible to find ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), " such that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "K = k * G"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECC at 256 bits provides equivalent security to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RSA with 3072-bit keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Symmetric encryption with 128-bit keys"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This smaller key size makes ECC ideal for blockchain, where storage and bandwidth efficiency matter."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "digital-signatures",
      children: "Digital Signatures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A digital signature (e.g., ECDSA — Elliptic Curve Digital Signature Algorithm) provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication:"
        }), " Proves the transaction came from the owner of the private key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-repudiation:"
        }), " The signer cannot deny signing the transaction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrity:"
        }), " Proves the transaction was not altered after signing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ECDSA signing process:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash the transaction data."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generate a random nonce ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute the curve point ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(x1, y1) = k * G"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "r = x1 mod n"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s = k^(-1) * (hash + r * privateKey) mod n"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The signature is the pair ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(r, s)"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verification uses the public key to confirm the signature was created by the corresponding private key."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "signature-scheme-comparison",
      children: "Signature Scheme Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scheme"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sig Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Batch Verification"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used By"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA (secp256k1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64-72 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, widely deployed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin, Ethereum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schnorr (secp256k1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature aggregation (MuSig)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin Taproot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very compact, efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum 2.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EdDSA (Ed25519)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, constant-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana, Cardano"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Schnorr signatures"
      }), " were introduced to Bitcoin via the Taproot upgrade (2021). Their key advantage is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "signature aggregation"
      }), " — multiple signatures can be combined into one, reducing transaction size and improving privacy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BLS signatures"
      }), " (Boneh-Lynn-Shacham) are used in Ethereum 2.0 for the beacon chain. They allow aggregation of thousands of validator signatures into a single 48-byte signature, enabling efficient consensus with 100,000+ validators."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "merkle-trees",
      children: "Merkle Trees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Merkle Tree is a binary tree of hashes. Each leaf node is the hash of a transaction, and each non-leaf node is the hash of its children concatenated. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Merkle Root"
      }), " summarizes all transactions in a block into a single hash."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    Root[\"Merkle Root<br/>H(H12 + H34)\"]\n    H12[\"H12<br/>H(H1 + H2)\"]\n    H34[\"H34<br/>H(H3 + H4)\"]\n    H1[\"H1 = H(Tx1)\"]\n    H2[\"H2 = H(Tx2)\"]\n    H3[\"H3 = H(Tx3)\"]\n    H4[\"H4 = H(Tx4)\"]\n    \n    H12 --> Root\n    H34 --> Root\n    H1 --> H12\n    H2 --> H12\n    H3 --> H34\n    H4 --> H34\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This allows for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SPV (Simplified Payment Verification)"
      }), " — a light client can prove a transaction is included in a block by providing only ", (0,jsx_runtime.jsx)(_components.code, {
        children: "log2(n)"
      }), " hashes (a Merkle proof), rather than downloading all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " transactions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant Wallet as SPV Wallet\n    participant Node as Full Node\n    \n    Wallet->>Node: \"Is Tx3 in Block #800,000?\"\n    Node->>Node: Builds Merkle Proof\n    Node->>Wallet: Returns H3, H4, H12, Merkle Root\n    Wallet->>Wallet: Computes H34 = H(H3 + H4)\n    Wallet->>Wallet: Computes Root = H(H12 + H34)\n    Wallet->>Wallet: Compares computed Root with block header Root\n    Wallet->>Wallet: If match ? Tx3 is confirmed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "merkle-proof-verification",
      children: "Merkle Proof Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface MerkleProof {\n    leafHash: string;\n    merkleRoot: string;\n    siblings: string[];\n    positions: boolean[]; // true = right sibling, false = left sibling\n}\n\nfunction verifyMerkleProof(proof: MerkleProof): boolean {\n    let currentHash = proof.leafHash;\n    \n    for (let i = 0; i < proof.siblings.length; i++) {\n        const sibling = proof.siblings[i];\n        const isRightSibling = proof.positions[i];\n        \n        if (isRightSibling) {\n            // Current hash is left, sibling is right\n            currentHash = hashPair(currentHash, sibling);\n        } else {\n            // Sibling is left, current hash is right\n            currentHash = hashPair(sibling, currentHash);\n        }\n    }\n    \n    return currentHash === proof.merkleRoot;\n}\n\nfunction hashPair(left: string, right: string): string {\n    // In reality: SHA-256(concat(hexToBytes(left), hexToBytes(right)))\n    return `H(${left}+${right})`;\n}\n\n// Example: Verifying Tx3 is in block with Merkle root R\nconst proof: MerkleProof = {\n    leafHash: \"H3\",\n    merkleRoot: \"R\",\n    siblings: [\"H4\", \"H12\"],\n    positions: [true, true], // H3 is left of H4, H12 is left of root\n};\n\nconsole.log(verifyMerkleProof(proof)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Cryptographic hash functions are the glue that makes blockchain tamper-evident — any change to any transaction propagates up the Merkle tree to change the Merkle root, which changes the block hash, breaking the chain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-hashing-with-sha-256",
      children: "Example 1: Hashing with SHA-256"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Input: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Blockchain"
      }), "\nOutput: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ef775988943d8315185d11019672d4b971552a926d5c644d673f8502f6764585"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Input: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "blockchain"
      }), "\nOutput: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "6175e119424619cd30a383d09a06709d43d31ac9979c3d0c2e3995f745d4704e"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note how changing the first letter to lowercase completely changes the hash (avalanche effect)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-constructing-a-merkle-root-for-6-transactions",
      children: "Example 2: Constructing a Merkle Root for 6 Transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For an odd number of leaves, the last leaf is duplicated:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Transactions: [Tx1, Tx2, Tx3, Tx4, Tx5, Tx6]\n\nLevel 0 (Leaves):      H1    H2    H3    H4    H5    H6\nLevel 1:              H12          H34        H55 (H5+H5)\nLevel 2:            H1234                    H5555\nLevel 3 (Root):                H_root = H(H1234 + H5555)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-ecdsa-signing-and-verification",
      children: "Example 3: ECDSA Signing and Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Conceptual representation (not actual secp256k1 implementation)\ninterface Signature {\n    r: bigint;\n    s: bigint;\n}\n\nfunction signMessage(\n    privateKey: bigint,\n    message: string\n): Signature {\n    const hash = sha256(message);\n    const k = generateRandomNonce(); // Must be unique per signature!\n    const r = computeRFromNonce(k);\n    const s = (modInverse(k, n) * (hash + r * privateKey)) % n;\n    return { r, s };\n}\n\nfunction verifySignature(\n    publicKey: Point,\n    message: string,\n    signature: Signature\n): boolean {\n    const hash = sha256(message);\n    const w = modInverse(signature.s, n);\n    const u1 = (hash * w) % n;\n    const u2 = (signature.r * w) % n;\n    const point = u1.multiply(G).add(u2.multiply(publicKey));\n    return point.x === signature.r;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " A SHA-256 hash collision would be catastrophic for blockchain — it would allow an attacker to create a different input with the same hash, breaking the chain's integrity. This is why SHA-256's collision resistance is constantly monitored by the cryptographic community."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Never share your private key with anyone — it is the sole proof of ownership of blockchain assets. Hardware wallets keep private keys offline and are the gold standard for security. For ECDSA specifically, never reuse a nonce ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k"
        }), " — it leaks the private key."]
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
            children: "Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-way function producing fixed-size output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Irreversible, deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block linking, Merkle trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-way encoding with decryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversible with key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data privacy (not used in Bitcoin core)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proves authenticity of a message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binds identity to data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived from private key, shared openly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot derive private key from it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address generation, signature verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secret number controlling ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must never be shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signing transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merkle Proof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path of hashes from leaf to root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logarithmic proof size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPV wallets, light clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elliptic Curve Digital Signature Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common blockchain signature scheme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin, Ethereum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schnorr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternative signature scheme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables signature aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitcoin Taproot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential hash application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Links blocks together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blockchain data structure"
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
              children: "Hash Properties"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic, Preimage resistant, Collision resistant, Avalanche effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256 is the blockchain standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Pair"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private key ? Public key ? Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each transformation is one-way"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signature Scheme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA (Bitcoin), secp256k1 curve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schnorr signatures (Taproot) are newer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Merkle Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf = tx hash, Root = Merkle root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proof requires only log2(n) hashes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ECC Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit ECC ˜ 3072-bit RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller keys, faster operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SHA-256"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit output, 64 rounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Part of SHA-2 family"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Block Cipher"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES is used in some L2 protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not typically used in L1"
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
            children: "SHA-256 Hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction IDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State root computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Channel data hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision resistance studies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA Signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract function calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity certificates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-quantum crypto research"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merkle Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTXO set verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State tree (storage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "World state hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merkle tree variants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPV Proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Light wallet verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event log proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-knowledge proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Derivation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HD wallet paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract address derivation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSP certificates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BIP32/39 improvements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schnorr Signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic swaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-sig contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregate signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MuSig research"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLS Signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus finality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator set aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threshold signatures"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which property of hash functions prevents an attacker from finding two different inputs that produce the same hash?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Preimage resistance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Collision resistance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Determinism"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Avalanche effect"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Collision resistance.** Collision resistance guarantees it is computationally infeasible to find two different inputs that hash to the same output. This prevents attackers from substituting one transaction for another while maintaining the same hash.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does a Merkle tree enable Simplified Payment Verification (SPV)?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) By storing all transactions in a single hash"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) By providing a logarithmic-sized proof that a transaction is included in a block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) By encrypting the transaction data"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) By removing old transactions"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) By providing a logarithmic-sized proof that a transaction is included in a block.** An SPV wallet only needs to download block headers and a Merkle proof (log2(n) hashes) to verify a transaction, instead of downloading all transactions.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In ECDSA, what information is required to verify a digital signature?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The private key and the message"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The public key, the message, and the signature"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Only the signature"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The private key and the signature"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) The public key, the message, and the signature.** Anyone can verify a signature using the signer's public key, the original message, and the signature itself. The private key is never needed for verification.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What makes the Merkle-Damgård construction important for SHA-256?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It makes SHA-256 quantum-resistant"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It allows hashing arbitrary-length inputs using a fixed-size compression function"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It makes SHA-256 reversible"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It eliminates the need for padding"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) It allows hashing arbitrary-length inputs using a fixed-size compression function.** The Merkle-Damgård construction pads the input to a multiple of the block size and processes it through iterative applications of the compression function.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the key advantage of Schnorr signatures over ECDSA?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are harder to forge"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) They support signature aggregation (multiple signatures into one)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) They use longer keys"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) They are older and more tested"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) They support signature aggregation.** Schnorr signatures allow multiple signatures from different participants to be combined into a single signature, reducing transaction size and improving privacy. This was a key feature of the Bitcoin Taproot upgrade.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-digital-signature-with-ecdsa",
      children: "TypeScript: Digital Signature with ECDSA"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createSign, createVerify, generateKeyPairSync } from \"node:crypto\";\n\nclass Wallet {\n  public publicKey: string;\n  private privateKey: string;\n\n  constructor() {\n    const { publicKey, privateKey } = generateKeyPairSync(\"ec\", {\n      namedCurve: \"prime256v1\",\n      publicKeyEncoding: { type: \"spki\", format: \"pem\" },\n      privateKeyEncoding: { type: \"pkcs8\", format: \"pem\" },\n    });\n    this.publicKey = publicKey;\n    this.privateKey = privateKey;\n  }\n\n  sign(data: string): string {\n    const sign = createSign(\"sha256\");\n    sign.update(data);\n    return sign.sign(this.privateKey, \"hex\");\n  }\n\n  static verify(data: string, signature: string, publicKey: string): boolean {\n    const verify = createVerify(\"sha256\");\n    verify.update(data);\n    return verify.verify(publicKey, signature, \"hex\");\n  }\n}\n\ninterface Transaction {\n  from: string;\n  to: string;\n  amount: number;\n  signature: string;\n}\n\nfunction createTransaction(from: Wallet, toPubKey: string, amount: number): Transaction {\n  const data = `${from.publicKey}${toPubKey}${amount}`;\n  return { from: from.publicKey, to: toPubKey, amount, signature: from.sign(data) };\n}\n\nfunction verifyTransaction(tx: Transaction): boolean {\n  const data = `${tx.from}${tx.to}${tx.amount}`;\n  return Wallet.verify(data, tx.signature, tx.from);\n}\n\n// const alice = new Wallet(), bob = new Wallet();\n// const tx = createTransaction(alice, bob.publicKey, 10);\n// console.log(verifyTransaction(tx)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "merkle-tree-verification-process",
      children: "Merkle Tree Verification Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Merkle proof allows a light client to verify that a transaction belongs in a block by reconstructing the Merkle root from the leaf upward using only ~log2(n) sibling hashes instead of downloading all transactions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Proof[\"Proof Data\"]\n        L[\"H3=H(Tx3)\"]; S1[\"H4\"]; S2[\"H12\"]; MR[\"Root\"]\n    end\n    subgraph Verify[\"Verification\"]\n        C1[\"H34=H(H3+H4)\"]; C2[\"Root'=H(H12+H34)\"]; C3[\"Root'==Root?\"]\n    end\n    subgraph Result[\"Result\"]\n        V1[\"? Confirmed\"]; V2[\"? Rejected\"]\n    end\n    L --> C1\n    S1 --> C1\n    C1 --> C2\n    S2 --> C2\n    C2 --> C3\n    MR --> C3\n    C3 -->|\"Yes\"| V1\n    C3 -->|\"No\"| V2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "digital-signature-sign-and-verify-flow",
      children: "Digital Signature Sign and Verify Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Elliptic curve digital signatures bind a signer's public key to a message. The private key produces the signature; the public key verifies it — without the private key ever being transmitted."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Signer[\"Signer (Alice)\"]\n        direction TB\n        A1[\"Message M\"] --> A2[\"Hash h=H(M)\"] --> A3[\"Pick nonce k\"]\n        A3 --> A4[\"R=k×G\"] --> A5[\"s=k?¹(h+r·sk)\"] --> A6[\"Sig (r,s)\"]\n    end\n    subgraph Verifier[\"Verifier (Bob)\"]\n        direction TB\n        B1[\"Message M\"] --> B2[\"Hash h=H(M)\"] --> B3[\"w=s?¹\"]\n        B3 --> B4[\"u1=h·w\"] --> B5[\"u2=r·w\"]\n        B5 --> B6[\"P=u1·G+u2·PK\"] --> B7[\"Accept P.x=r?\"]\n    end\n    AliceSK[\"Private Key\"] --> A5\n    AlicePK[\"Public Key\"] --> B6\n    Signer -->|\"(M,r,s)\"| Verifier\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This flow ensures the private key never leaves the signer's device, yet any network participant can independently verify the signature without trusting a third party."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-hd-wallet-path-derivation",
      children: "TypeScript: HD Wallet Path Derivation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createHash, createHmac } from \"node:crypto\";\n\nconst sha256 = (d: string): string => createHash(\"sha256\").update(d).digest(\"hex\");\nconst hmacSHA512 = (key: string, data: string): string =>\n  createHmac(\"sha512\", key).update(data, \"hex\").digest(\"hex\");\n\ninterface ExtendedKey {\n  key: string; chainCode: string; depth: number; index: number;\n}\n\nclass HDDerivator {\n  static master(seed: string): ExtendedKey {\n    const hash = hmacSHA512(\"Bitcoin seed\", seed);\n    return { key: hash.slice(0, 64), chainCode: hash.slice(64), depth: 0, index: 0 };\n  }\n\n  static cKD(parent: ExtendedKey, index: number): ExtendedKey {\n    const data = `0x00${parent.key}${index.toString(16).padStart(8, \"0\")}`;\n    const hash = hmacSHA512(parent.chainCode, data);\n    return { key: hash.slice(0, 64), chainCode: hash.slice(64), depth: parent.depth + 1, index };\n  }\n\n  static derivePath(master: ExtendedKey, path: string): ExtendedKey {\n    const parts = path.split(\"/\").filter(p => !p.includes(\"m\"));\n    let key = master;\n    for (const part of parts) {\n      const hardened = part.includes(\"'\");\n      const index = parseInt(part.replace(\"'\", \"\")) + (hardened ? 2147483648 : 0);\n      key = this.cKD(key, index);\n    }\n    return key;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-signature-aggregation-with-bls-style-logic",
      children: "TypeScript: Signature Aggregation with BLS-Style Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createHash } from \"node:crypto\";\n\nconst sha256 = (d: string): string => createHash(\"sha256\").update(d).digest(\"hex\");\n\nclass SignatureAggregator {\n  static aggregate(signatures: string[]): string {\n    if (signatures.length === 0) return \"\";\n    let agg = signatures[0];\n    for (let i = 1; i < signatures.length; i++) agg = sha256(agg + signatures[i]);\n    return agg;\n  }\n\n  static verifyAggregate(aggregate: string, message: string, pubKeys: string[]): boolean {\n    const expected = pubKeys.reduce((acc, pk) => sha256(acc + sha256(message + pk)), \"\");\n    return aggregate === expected;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-merkle-proof-verifier",
      children: "TypeScript: Merkle Proof Verifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createHash } from \"node:crypto\";\n\nconst sha256 = (d: string): string => createHash(\"sha256\").update(d).digest(\"hex\");\n\nfunction verifyMerkleProof(\n  leaf: string,\n  proof: { hash: string; isLeft: boolean }[],\n  root: string\n): boolean {\n  let current = leaf;\n  for (const p of proof) {\n    current = p.isLeft ? sha256(p.hash + current) : sha256(current + p.hash);\n  }\n  return current === root;\n}\n\nfunction generateMerkleProof(\n  transactions: string[],\n  targetIndex: number\n): { hash: string; isLeft: boolean }[] {\n  if (transactions.length === 0) return [];\n  let level = transactions.map(t => sha256(t));\n  const proof: { hash: string; isLeft: boolean }[] = [];\n  let idx = targetIndex;\n  while (level.length > 1) {\n    const next: string[] = [];\n    for (let i = 0; i < level.length; i += 2) {\n      if (i + 1 < level.length) {\n        if (i === idx || i + 1 === idx) {\n          proof.push({ hash: level[i === idx ? i + 1 : i], isLeft: i === idx });\n        }\n        next.push(sha256(level[i] + level[i + 1]));\n      } else {\n        next.push(level[i]);\n      }\n    }\n    idx = Math.floor(idx / 2);\n    level = next;\n  }\n  return proof;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === SHA-256 Wrapper ===\nfunction sha256Hex(data: string): string {\n    const h = 0;\n    let hash = 0;\n    for (let i = 0; i < data.length; i++) hash = ((hash << 5) - hash) + data.charCodeAt(i);\n    const hex = Math.abs(hash).toString(16).padStart(8, '0');\n    return hex + hex.split('').reverse().join('');\n}\n\n// === ECDSA Signature Wrapper (simulated) ===\nclass ECDSA {\n    static keyPair(seed: string): { priv: string; pub: string } {\n        let priv = 0;\n        for (let i = 0; i < seed.length; i++) priv = ((priv << 5) - priv) + seed.charCodeAt(i);\n        priv = Math.abs(priv) % 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2Fn;\n        return { priv: priv.toString(16).padStart(64, '0'), pub: this.privToPub(priv) };\n    }\n    private static privToPub(priv: bigint): string {\n        const Gx = 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798n;\n        return `04${(Gx * priv % 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2Fn).toString(16).padStart(64, '0')}`;\n    }\n    static sign(msg: string, privKey: string): string {\n        let h = 0;\n        for (let i = 0; i < msg.length; i++) h = ((h << 5) - h) + msg.charCodeAt(i);\n        return Math.abs(h).toString(16).padStart(64, '0');\n    }\n    static verify(msg: string, sig: string, pubKey: string): boolean {\n        const expected = this.sign(msg, '');\n        return sig.length === 128;\n    }\n}\n\n// === HD Wallet Path Derivation ===\nclass HDWallet {\n    private master: bigint;\n    constructor(seed: string) {\n        let h = BigInt(0);\n        for (let i = 0; i < seed.length; i++) h = (h << 8n) + BigInt(seed.charCodeAt(i));\n        this.master = h;\n    }\n    derive(path: string): string {\n        const indices = path.replace('m/', '').split('/').map(Number);\n        let key = this.master;\n        for (const idx of indices) key = (key * BigInt(idx + 1)) % 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2Fn;\n        return key.toString(16).padStart(64, '0');\n    }\n    static pathToString(path: string[]): string {\n        const purpose = path[2] ?? \"0'\", coin = path[3] ?? \"0'\", account = path[4] ?? \"0'\", change = path[5] ?? \"0\", idx = path[6] ?? \"0\";\n        return `m/${purpose}/${coin}/${account}/${change}/${idx}`;\n    }\n}\n\n// === Merkle Tree ===\nclass MerkleTree {\n    private leaves: string[];\n    private root: string;\n    constructor(data: string[]) { this.leaves = data.map(d => sha256Hex(d)); this.root = this.build(this.leaves); }\n    private build(nodes: string[]): string {\n        if (nodes.length === 1) return nodes[0];\n        const parents: string[] = [];\n        for (let i = 0; i < nodes.length; i += 2) {\n            const left = nodes[i], right = i + 1 < nodes.length ? nodes[i + 1] : nodes[i];\n            parents.push(sha256Hex(left + right));\n        }\n        return this.build(parents);\n    }\n    getRoot(): string { return this.root; }\n    verify(leaf: string, proof: string[]): boolean {\n        let hash = sha256Hex(leaf);\n        for (const p of proof) hash = sha256Hex(hash + p);\n        return hash === this.root;\n    }\n}\n\n// === Base58Check Encode ===\nconst BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';\nfunction base58Encode(hex: string): string {\n    let n = BigInt('0x' + hex);\n    if (n === 0n) return '';\n    let result = '';\n    while (n > 0n) { result = BASE58[Number(n % 58n)] + result; n /= 58n; }\n    return result;\n}\n\n// === Bloom Filter ===\nclass BloomFilter {\n    private bits: boolean[];\n    constructor(private size: number, private hashCount: number) { this.bits = new Array(size).fill(false); }\n    private hash(item: string, seed: number): number {\n        let h = seed;\n        for (let i = 0; i < item.length; i++) h = (h * 31 + item.charCodeAt(i)) % this.size;\n        return h;\n    }\n    add(item: string): void { for (let i = 0; i < this.hashCount; i++) this.bits[this.hash(item, i)] = true; }\n    contains(item: string): boolean {\n        for (let i = 0; i < this.hashCount; i++) if (!this.bits[this.hash(item, i)]) return false;\n        return true;\n    }\n}\n\n// === Demo ===\nconst kp = ECDSA.keyPair('my-secret-seed');\nconsole.log(`ECDSA KeyPair: priv=${kp.priv.slice(0, 16)}..., pub=${kp.pub.slice(0, 16)}...`);\n\nconst sig = ECDSA.sign('hello blockchain', kp.priv);\nconsole.log(`Signature: ${sig.slice(0, 16)}...`);\nconsole.log(`Verify: ${ECDSA.verify('hello blockchain', sig, kp.pub)}`);\n\nconst hd = new HDWallet('abandon baby cabbage');\nconsole.log(`HD derive m/44'/0'/0'/0/0: ${hd.derive(\"m/44'/0'/0'/0/0\").slice(0, 16)}...`);\n\nconst mt = new MerkleTree(['tx1', 'tx2', 'tx3', 'tx4']);\nconsole.log(`Merkle root: ${mt.getRoot().slice(0, 16)}...`);\n\nconst bf = new BloomFilter(256, 3);\nbf.add('tx1'); bf.add('tx2');\nconsole.log(`Bloom contains tx1: ${bf.contains('tx1')}, tx3: ${bf.contains('tx3')}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// cryptography\n// distributed-ledger-crypto implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'cryptography', data: { topic: 'distributed-ledger-crypto' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cryptographic hash functions are the \"glue\" that keeps the blockchain immutable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public key cryptography enables secure ownership without revealing secrets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Digital signatures ensure that only the rightful owner can authorize a transaction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merkle Trees provide an efficient way to verify transaction inclusion in a block."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cryptography replaces the need for a central trusted authority with mathematical certainty."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ECC provides strong security with smaller key sizes than RSA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SHA-256 uses the Merkle-Damgård construction to process arbitrary-length inputs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different signature schemes (ECDSA, Schnorr, BLS) offer different trade-offs between size, speed, and aggregation capability."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always use a hardware wallet to keep private keys offline and secure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SPV wallets are the practical way to interact with blockchains from mobile devices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never reuse an ECDSA nonce — doing so reveals the private key."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For multi-sig or threshold applications, prefer Schnorr or BLS signatures for efficiency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Merkle proofs rather than trusting full nodes with transaction inclusion."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define \"collision resistance\" in the context of SHA-256."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can't we derive a private key from a public key?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the benefit of using a Merkle Tree instead of a simple list of hashes?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between encryption and hashing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the birthday paradox and how does it affect hash function security?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate the Merkle Root for three transactions (A, B, C). Note: For odd numbers, the last leaf is often duplicated."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrate how a \"man-in-the-middle\" attack is prevented by digital signatures in a P2P network."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If an attacker finds a way to reverse SHA-256, what specific parts of the Bitcoin protocol would fail?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the proof size (in hashes) needed to prove transaction inclusion in a block of 1,000 transactions using a Merkle tree versus using a simple concatenation of all hashes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research the \"Short Signature\" problem and explain why Bitcoin uses SECP256K1 specifically for its elliptic curve cryptography."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the computational overhead of verifying a BLS signature aggregate from 10,000 Ethereum validators versus verifying each signature individually. Why does this matter for the Ethereum beacon chain?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BLS aggregation reduces 10,000 individual signature verifications (10,000 pairings) to a single aggregated verification (3 pairings + 1 exponentiation), which is essential for beacon chain scalability."
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