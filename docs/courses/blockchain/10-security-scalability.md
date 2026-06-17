# Chapter 10: Security and Scalability

---

## Learning Objectives

- Identify common blockchain vulnerabilities (51% Attack, Sybil Attack, Long Range Attack)
- Explain Layer 2 scaling solutions (State Channels, Sidechains, Rollups)
- Understand the concept of "Sharding" and its role in Ethereum 2.0
- Describe the risks of Zero-Knowledge Proofs (ZKP) in privacy-preserving blockchains
- Analyze the impact of Quantum Computing on current cryptographic standards

---

## Theory

### The Scalability Bottleneck
Public blockchains face the "Trilemma": they can only optimize two out of three: **Decentralization, Security, Scalability**. Most chains struggle with throughput (Transactions Per Second - TPS) because every node must process every transaction.

![Scaling and Security](../assets/images/diagrams/blockchain/ch10-scaling.png)

### Scaling Solutions
1. **On-Chain (Layer 1):**
   - **Sharding:** Splitting the database into multiple segments (shards) so nodes only process a subset of transactions.
2. **Off-Chain (Layer 2):**
   - **State Channels (e.g., Lightning Network):** Opening a private channel for multiple transactions and only settling the final state on-chain.
   - **Rollups (Optimistic vs. ZK):** Bundling hundreds of transactions into a single batch and submitting a summary/proof to Layer 1.

### Blockchain Security
- **51% Attack:** An entity gains majority control of consensus and can double-spend or censor transactions.
- **Sybil Attack:** An attacker creates a large number of pseudonymous identities to gain disproportionate influence.
- **Smart Contract Bugs:** Logical errors (e.g., Reentrancy, Arithmetic Overflow) can lead to total fund loss.

### Zero-Knowledge Proofs (ZKP)
ZKP allows one party (the prover) to prove to another (the verifier) that a statement is true without revealing any information beyond the validity of the statement. This is used for privacy (Zcash) and scalability (ZK-Rollups).

---

## Examples

### Example 1: Lightning Network Payment
Alice and Bob open a channel with 0.1 BTC each.
1. Alice sends Bob 0.01 BTC. (Balance: A: 0.09, B: 0.11)
2. Bob sends Alice 0.02 BTC. (Balance: A: 0.11, B: 0.09)
3. They close the channel.
Only **one** transaction is recorded on the main Bitcoin blockchain, but thousands of micro-payments could have happened off-chain.

### Example 2: ZK-Rollup Proof
A sequencer collects 1,000 transactions. Instead of sending all 1,000 to Ethereum, it generates a **Validity Proof** (SNARK/STARK). Ethereum only verifies the proof, which is much cheaper and faster than verifying 1,000 individual signatures.

---

## Summary

- Scalability is the primary hurdle for mainstream blockchain adoption.
- Layer 2 solutions move the computation off-chain while inheriting the security of Layer 1.
- Sharding increases throughput by distributing the workload among nodes.
- Security remains a moving target, with risks evolving from basic consensus attacks to complex smart contract exploits.
- ZKPs represent the frontier of both privacy and scaling technology.

---

## Exercises

### Review Questions
1. Define the "Blockchain Trilemma."
2. What is the difference between an Optimistic Rollup and a ZK-Rollup?
3. Explain the "Data Availability" problem.
4. How does Sharding improve TPS?

### Application Problems
1. If a blockchain has 10 shards and each shard can process 15 TPS, what is the total theoretical TPS?
2. Discuss the security trade-off of using a Sidechain versus a Rollup.
3. Analyze how a "Front-running" attack works in a decentralized exchange.

### Challenge Problem
1. Evaluate the threat of Shor's Algorithm (Quantum Computing) to ECDSA and research "Post-Quantum Cryptography" (PQC) candidates for blockchain.
