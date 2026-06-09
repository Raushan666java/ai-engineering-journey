# Chapter 12: Scalability

## Learning Objectives

After completing this chapter, the student will be able to:

1. Distinguish on-chain scaling (sharding) from off-chain scaling (layer 2) approaches.
2. Explain the architecture and security model of state channels (Lightning Network, Raiden).
3. Describe Plasma's construction and its limitations.
4. Analyze Optimistic rollups: fraud proofs, challenge periods, and the security-efficiency trade-off.
5. Explain zero-knowledge rollups: zk-SNARKs, zk-STARKs, proof generation, and on-chain verification.
6. Compare sidechains to rollups along dimensions of security, finality, and trust assumptions.

## Theory

### 12.1 The Scalability Problem

A blockchain's throughput is fundamentally limited by the requirement that every full node processes every transaction. Bitcoin processes ~7 transactions per second (tx/s); Ethereum processes ~15 tx/s. Visa processes ~24,000 tx/s. Scaling blockchain to global adoption requires increasing throughput by three orders of magnitude without sacrificing security or decentralization.

The scalability trilemma (Vitalik Buterin) posits that blockchain systems must trade off among three properties:

- **Decentralization:** A large number of independent nodes validate.
- **Security:** The system is secure against Byzantine adversaries.
- **Scalability:** The system processes high transaction throughput.

No system achieves all three simultaneously.

### 12.2 On-Chain Scaling — Sharding

Sharding partitions the blockchain state into multiple parallel segments (shards). Each shard processes its own transactions independently. The total throughput is proportional to the number of shards.

**Ethereum Sharding (Pre-Merge Roadmap).** Originally, Ethereum 2.0 planned for 64 execution shards, each with a subset of validators. Cross-shard communication would require a beacon chain coordination mechanism.

**Data Shards vs Execution Shards.** Proto-danksharding (EIP-4844) introduced blob-carrying transactions: blocks carry large data blobs (125 kB each) that are committed to via a KZG polynomial commitment but not executed by the EVM. Rollups use these blobs for data availability. This is data sharding without execution sharding:

- **Data shard:** Provides high-bandwidth, low-cost data availability for layer 2.
- **Execution shard:** Processes transactions on the shard's local state.

Full execution sharding was deprioritized in favor of rollup-centric scaling.

### 12.3 Layer 2 — Off-Chain Scaling

Layer-2 (L2) solutions process transactions off the Ethereum mainnet (L1) and periodically commit the resulting state to L1. This achieves higher throughput because the L2 does not require every node to validate every transaction.

#### State Channels

State channels allow participants to conduct unlimited off-chain transactions while submitting only two on-chain transactions (open and close).

**Lightning Network (Bitcoin).** Two parties open a channel by committing funds to a 2-of-2 multi-signature address. They exchange off-chain transactions (channel updates) that adjust the balance distribution. Either party can close the channel by broadcasting the latest state.

- **HTLC (Hash Time-Locked Contract):** Enables conditional payments across multiple channels. A payment is routed through intermediate nodes; each hop uses an HTLC with a hashlock (cryptographic secret) and a timelock (expiry).
- **Atomicity:** The payment either reaches the recipient or returns to the sender. No hop can steal funds.
- **Limitations:** Requires participants to be online to respond to challenges. Low capital efficiency (funds are locked in channels). Not suitable for complex state.

**Raiden Network (Ethereum).** Similar to Lightning Network but uses the Ethereum account model. Supports token transfers and some smart contract interactions.

#### Plasma

Plasma (Plasma MVP, Plasma Cash) creates child chains that periodically commit Merkle roots to the main chain. Users maintain their own data ("massively stateful clients").

**Plasma Construction.**

1. **Root chain:** Ethereum mainnet (handles disputes and final settlement).
2. **Child chain:** A separate blockchain with its own block producers.
3. **Block commitment:** Child chain operators submit Merkle roots to a smart contract on L1.
4. **Exit mechanism:** Users submit a withdrawal request, wait through a challenge period (e.g., 7 days), and can exit funds if no challenge is submitted.

**Plasma Limitations.**

- **Mass exit problem:** If the child chain operator becomes malicious, all users must exit simultaneously, potentially overwhelming the L1's capacity.
- **Data unavailability:** The child chain could withhold block data, preventing users from computing Merkle proofs for exits.
- **Limited expressiveness:** Plasma can handle payments but struggles with arbitrary smart contract state.

Plasma has been largely superseded by rollups.

#### Optimistic Rollups

Optimistic rollups assume transactions are valid by default. They execute transactions off-chain, compress the data, and submit it to L1. A challenge period (typically 7 days) allows anyone to submit a fraud proof if an invalid state transition is detected.

**Arbitrum.** Developed by Offchain Labs. Uses a multi-round interactive fraud proof:
1. An asserter claims a state root.
2. A challenger disputes the claim.
3. An interactive bisection protocol narrows the dispute to a single EVM instruction step.
4. The L1 verifies the disputed step (handling verification cost).

**Optimism.** Uses a single-round fraud proof (OVM 2.0 / Bedrock):
1. Sequencer submits transaction data and state roots.
2. Watchers monitor for invalid state transitions.
3. A watcher submits a fraud proof transaction, which re-executes the disputed transaction on L1.
4. If the fraud proof succeeds, the invalid state is reverted and the sequencer is slashed.

**Key Properties.**

| Property | Description |
|----------|-------------|
| Security | Inherits L1 security (fraud proofs ensure correctness) |
| Finality | ~7 days (challenge period) for economic finality |
| Throughput | 10–20x L1 (limited by L1 data availability) |
| EVM compatibility | Full (Arbitrum, Optimism) |
| Deposit/withdraw | ~1 week (optimistic withdrawal delay) |

**Optimistic vs ZK: Core Difference.** Optimistic rollups assume validity with fraud-based challenge. ZK rollups prove validity cryptographically. Optimistic rollups are simpler but have a 7-day withdrawal delay; ZK rollups offer instant finality but require complex proof generation.

#### Zero-Knowledge Rollups

ZK rollups generate a validity proof (a zero-knowledge proof) that every transaction in the batch is valid. The proof is verified on L1, which costs a fixed amount of gas regardless of the number of transactions in the batch.

**zk-SNARKs (Succinct Non-Interactive Arguments of Knowledge).**

- **Setup:** A one-time trusted setup ceremony generates a proving key and a verification key.
- **Prover:** Given a computation (execution trace of N transactions), the prover generates a short proof (~200 bytes).
- **Verifier:** The on-chain verifier checks the proof in ~2ms.

**Gro16 (Groth16).** The most widely used SNARK construction. Proof size: 3 group elements (~128 bytes). Verification cost: ~200,000 gas.

**zk-STARKs (Scalable Transparent Arguments of Knowledge).**

- **Transparency:** No trusted setup required (uses public random hash functions).
- **Scalability:** Proof generation and verification are quasi-linear in computation size.
- **Proof size:** ~100–200 kB (larger than SNARKs).

**StarkNet.** A ZK-rollup using STARK proofs. Supports general-purpose computation (Cairo language).

**zkSync.** A ZK-rollup using SNARK proofs. zkSync Era is EVM-compatible (via LLVM-based compiler for Solidity).

**Scroll.** An EVM-equivalent ZK-rollup. Uses a custom zkEVM circuit that proves EVM execution traces.

**Proof Generation Cost.** For a ZK rollup with 1,000 transactions:

\[
\text{cost} \approx 10^6 \text{ arithmetic constraints} \times 10^{-6} \text{ BTC/constraint} \approx 1 \text{ BTC}
\]

As of 2025, proof generation costs have dropped by ~100x since 2022 due to hardware acceleration (GPU/FPGA).

**Comparison.**

| Dimension | zk-SNARKs | zk-STARKs |
|-----------|-----------|-----------|
| Trusted setup | Required | Not required |
| Proof size | ~200 bytes | ~100–200 kB |
| Verification time | ~2ms | ~10ms |
| Prover time | O(n log n) | O(n) |
| Post-quantum secure | No (elliptic curve) | Yes (hash-based) |

### 12.4 Sidechains

A sidechain is an independent blockchain with its own consensus rules, validators, and state. A two-way peg transfers assets between the sidechain and the main chain.

**Polygon PoS.** The most prominent Ethereum sidechain. Uses a PoS validator set independent of Ethereum's:

1. **Deposit:** User locks tokens in an Ethereum smart contract.
2. **Mint:** Polygon validators verify the lock event and mint equivalent tokens on Polygon.
3. **Transfer:** User transacts on Polygon (low fees, ~2-second finality).
4. **Withdraw:** User burns tokens on Polygon; validators submit a proof to Ethereum; Ethereum unlocks the original tokens.

**Security Difference from Rollups.** Sidechains have their own security model:

- If < 1/3 of validators are malicious, the sidechain is safe.
- If > 1/3 are malicious, sidechain funds can be stolen.
- Rollups inherit L1 security: even if all L2 operators are malicious, funds cannot be stolen (fraud proof or validity proof protects them).

**xDai (now Gnosis Chain).** A sidechain using DAI as the native currency with a single-block finality via a PoS consensus (xDAI STAKE validators).

### 12.5 Comparison Summary

| Solution | Type | TPS | Finality | Security | Trust Assumption |
|----------|------|-----|----------|----------|-----------------|
| Lightning | State channel | 1M+ | Instant (channel) | L1-secured | Channel peer must be online |
| Plasma | Child chain | ~1,000 | 7 days | L1-secured | Data availability assumption |
| Arbitrum | Optimistic rollup | ~40,000 | ~7 days | L1-secured | At least one honest watcher |
| zkSync | ZK rollup | ~20,000 | ~5 min (batch) | L1-secured | Proof system soundness |
| Polygon PoS | Sidechain | ~7,000 | ~2 sec | Independent | 2/3 honest validators |

## Examples

### Example 12.1: Optimism Deposit and Withdrawal

**Deposit:** User sends ETH to Optimism's L1 bridge contract. The Optimism sequencer processes the deposit transaction and credits the user.

**Withdrawal:**

1. User initiates withdrawal on L2 (burns L2 tokens).
2. Transaction data is committed to L1 via a state root update.
3. User submits a withdrawal request on L1 bridge.
4. Challenge period of 7 days begins.
5. Anyone can submit a fraud proof if the withdrawal is invalid.
6. After 7 days, user can claim funds on L1.

Total time to withdraw: ~7 days (for ETH, can be faster via third-party bridges that front liquidity).

### Example 12.2: ZK Rollup Proof

A ZK rollup with 100 transfers:

1. Rollup operator collects 100 transfer transactions.
2. Operator generates a single zk-SNARK proof that:
   - Each transaction has a valid signature.
   - State transitions are consistent (no double-spend).
   - The new state root is valid.
3. Operator submits to L1: `(newStateRoot, proof, compressedData)`.
4. L1 verifier contract checks the proof (~200,000 gas).
5. Batch is finalized.

Gas cost per transaction: ~200,000 / 100 = 2,000 gas per tx (vs ~21,000 for a simple L1 transfer).

## Summary

Scalability solutions span on-chain (sharding) and off-chain (layer 2) approaches. State channels offer unlimited off-chain transactions but require participants to be online. Plasma introduced child chains with fraud proofs but suffers from data availability and mass-exit problems. Optimistic rollups offer EVM compatibility with a 7-day challenge period. ZK rollups provide instant finality through cryptographic proofs but require complex proof generation. Sidechains offer high throughput with independent security but weaker guarantees than L1-backed rollups. The rollup-centric roadmap positions ZK rollups as the ultimate scaling solution, with Optimistic rollups as a near-term bridge.

## Exercises

### Review Questions

1. State the scalability trilemma. Is it a theorem or a heuristic? What evidence supports it?
2. Explain how a Lightning Network HTLC ensures atomic payments across multiple hops.
3. What is the mass-exit problem in Plasma? Why does it not apply to rollups?
4. Compare the trust assumptions of an Optimistic rollup and a ZK rollup. Which is stronger?
5. Why does a sidechain have weaker security guarantees than a rollup? Under what conditions can a sidechain user lose funds?

### Application Problems

6. Compute the gas savings of a ZK rollup that batches 1,000 ETH transfers versus 1,000 individual L1 transfers. Assume the ZK proof consumes 200,000 gas and each transfer in calldata costs 16 gas per byte. Each transfer compresses to 12 bytes. The L1 transfer baseline is 21,000 gas per transfer.
7. Design a fraud proof for an Optimistic rollup that proves an invalid state transition in an ERC-20 transfer. Show the data that the challenger submits and the L1 verification logic.
8. In a state channel, Alice and Bob have a channel with 10 ETH each. After 15 off-chain transactions, Alice's balance is 15 ETH, Bob's is 5 ETH. Bob tries to close the channel with an old state (Alice 10, Bob 10). Describe how Alice proves fraud on-chain.

### Challenge Problem

9. **(Blob Data Availability Sampling).** EIP-4844 introduces blob-carrying transactions. Design a data availability sampling (DAS) scheme where light clients can verify that a blob was published without downloading the entire blob. Your scheme should:
   - Use KZG polynomial commitments (each blob is a polynomial evaluation).
   - Allow a light client to make \(q\) random queries to the network.
   - Guarantee that if the blob is unavailable at more than \(\epsilon\) fraction, the client detects it with probability \(1 - (1 - \epsilon)^q\).
   - Prove the soundness condition: for any adversary that withholds data, an honest full node can reconstruct the blob from \(k\) shares with \(k < n\) (erasure coding).
   
   Compute \(q\) for a 125 kB blob with \(\epsilon = 0.5\) and a 99.9% detection probability.
