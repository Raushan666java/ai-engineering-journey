# Blockchain Technology — Comprehensive Textbook

## Course Description

This textbook provides a rigorous, end-to-end treatment of blockchain technology — from the cryptographic primitives that underpin distributed ledgers to the full-stack architecture of decentralized applications, enterprise frameworks, and the emerging Web3 ecosystem. Each chapter builds systematically on the previous one, equipping the reader with both theoretical depth and practical engineering competence.

## Prerequisites

- Discrete mathematics and elementary probability
- Basic familiarity with data structures (hash tables, trees, linked lists)
- Programming experience in at least one general-purpose language (JavaScript/TypeScript recommended for smart contract chapters)

## Chapter Outline

| # | Title | Topics |
|---|-------|--------|
| 1 | **Introduction to Blockchain** | History, Bitcoin whitepaper, block structure, consensus, key properties, types, blockchain vs database, limitations, evolution 1.0/2.0/3.0 |
| 2 | **Cryptography for Blockchain** | Hash functions (SHA-256, Keccak-256, RIPEMD-160), Merkle trees, ECDSA, Schnorr signatures, wallet derivation, BIP32/39/44 |
| 3 | **Consensus Algorithms** | PoW, PoS (Casper), DPoS, PBFT, Raft, Tendermint, HotStuff, Nakamoto consensus, comparison |
| 4 | **Bitcoin** | UTXO model, script language, block structure, mining, halving, mempool, fee market, wallet types |
| 5 | **Ethereum** | Account model, transactions, gas and EIP-1559, EVM, smart contracts, Patricia Merkle Trie, Eth2 |
| 6 | **Solidity Programming** | Language syntax, data types, storage locations, functions, modifiers, events, inheritance, error handling |
| 7 | **DApp Development** | Web3 stack, ethers.js, web3.js, MetaMask, Hardhat, Truffle, testing, DApp architecture |
| 8 | **DeFi & Tokens** | ERC-20, ERC-721, ERC-1155, DEX (Uniswap AMM), lending, stablecoins, oracles, flash loans |
| 9 | **NFTs** | ERC-721 deep dive, metadata, IPFS, minting, royalties (EIP-2981), marketplaces, generative art |
| 10 | **Hyperledger & Enterprise** | Hyperledger Fabric architecture, chaincode, permissioned vs permissionless, R3 Corda, Quorum |
| 11 | **Blockchain Security** | Smart contract vulnerabilities, security patterns, audit process, real-world hacks |
| 12 | **Scalability** | Sharding, layer 2, state channels, Plasma, Optimistic rollups, ZK rollups, sidechains |
| 13 | **Web3 & Future** | DAOs, decentralized identity, decentralized storage, regulation, CBDCs, interoperability, quantum resistance |

## How to Use This Textbook

Each chapter follows a consistent structure:

- **Learning Objectives** — what the reader will be able to do after studying the chapter
- **Theory** — formal definitions, mechanisms, and conceptual exposition
- **Examples** — code listings, transaction walkthroughs, and worked scenarios
- **Summary** — concise restatement of key takeaways
- **Exercises** — three tiers: review questions, application problems, and a challenge problem

Code examples assume Solidity ^0.8.x and ethers.js v6 unless otherwise noted. All cryptographic hash functions are referenced by their full specification (e.g., SHA-256 per FIPS 180-4).

## Recommended Reading

- Nakamoto, S. (2008). *Bitcoin: A Peer-to-Peer Electronic Cash System*
- Wood, G. (2014). *Ethereum: A Secure Decentralised Generalised Transaction Ledger* (Yellow Paper)
- Antonopoulos, A. M. (2017). *Mastering Bitcoin* (2nd ed.). O'Reilly Media.
- Antonopoulos, A. M. & Wood, G. (2018). *Mastering Ethereum*. O'Reilly Media.
- Buterin, V. (2013). *Ethereum Whitepaper*
