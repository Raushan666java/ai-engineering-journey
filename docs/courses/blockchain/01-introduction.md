# Chapter 1: Introduction to Blockchain

---

## Learning Objectives

- Define blockchain technology and its core components
- Explain the historical evolution from centralized to decentralized systems
- Distinguish between public, private, and permissioned blockchains
- Identify the "Blockchain Trilemma" and its implications for network design
- Describe the fundamental structure of a block and a chain

---

## Theory

### Conceptual Overview
A blockchain is a distributed, immutable ledger that records transactions across a network of computers. Unlike traditional databases managed by a central authority (e.g., a bank or a government), a blockchain operates on a peer-to-peer (P2P) architecture where every participant (node) maintains a copy of the ledger.

### Centralization vs. Decentralization
Traditional systems rely on trusted intermediaries. In a centralized system, the central node is a single point of failure and control. Decentralization redistributes this authority. In a blockchain, trust is not placed in a single entity but in the protocol, cryptography, and consensus mechanism.

### The Anatomy of a Block
Each block typically consists of:
1. **Header:** Contains metadata (timestamp, version, previous block hash, Merkle root, nonce).
2. **Body:** A list of validated transactions.
The "chain" is formed by each block header including the cryptographic hash of the previous block's header.

![Blockchain Structure](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/blockchain/ch01-blockchain-structure.png)

### Types of Blockchains
1. **Public:** Permissionless (e.g., Bitcoin, Ethereum). Anyone can join and participate in consensus.
2. **Private:** Permissioned. Controlled by a single organization.
3. **Consortium:** Permissioned. Controlled by a group of organizations.

---

## Examples

### Example 1: Visualizing the Chain Linkage
Imagine three blocks: A, B, and C.
- Block A has Hash `0x123`.
- Block B includes `0x123` in its header. Block B's own Hash is `0x456`.
- Block C includes `0x456` in its header.
If an attacker changes a transaction in Block A, its Hash changes to `0x999`. Because Block B expects `0x123`, the link breaks, and all subsequent blocks become invalid. This demonstrates **immutability**.

### Example 2: Simple Transaction Flow
1. **Request:** Alice wants to send 5 BTC to Bob.
2. **Broadcast:** The transaction is broadcast to the P2P network.
3. **Validation:** Nodes verify Alice has sufficient funds using digital signatures.
4. **Verification:** Miners/Validators bundle the transaction into a block.
5. **Commit:** The block is added to the chain, and Bob receives the funds.

---

## Summary

- Blockchain is a decentralized, distributed ledger technology ensuring data integrity without central authority.
- The transition from centralized to decentralized systems reduces single points of failure.
- Blocks are linked via cryptographic hashes, creating an immutable record of history.
- Public blockchains allow open participation, while private and consortium chains restrict access.
- The Blockchain Trilemma suggests a trade-off between security, scalability, and decentralization.

---

## Exercises

### Review Questions
1. What is the primary role of the "Previous Block Hash" in a block header?
2. Explain the difference between a distributed database and a blockchain.
3. Why is immutability considered a "probabilistic" feature in some public blockchains?
4. Define the role of a "node" in a blockchain network.

### Application Problems
1. Compare the trust models of a traditional bank transfer versus a Bitcoin transaction.
2. If a network has 10,000 nodes and 51% are compromised, explain the impact on the ledger's integrity.
3. Design a use case where a private blockchain is superior to a public one.

### Challenge Problem
1. Analyze how the removal of the "timestamp" field in a block header would affect the network's ability to maintain a consistent chronological order of events.
