# Chapter 3: Consensus Algorithms

## Learning Objectives

After completing this chapter, the student will be able to:

1. Explain the consensus problem in distributed systems and the Byzantine generals problem.
2. Describe the proof-of-work mechanism, including mining, difficulty adjustment, and fork resolution.
3. Contrast proof-of-stake with proof-of-work, including validator selection, slashing, and finality.
4. Analyze the security properties of Nakamoto consensus against Byzantine adversaries.
5. Compare PBFT, Tendermint, HotStuff, and Raft across dimensions of safety, liveness, and performance.

## Theory

### 3.1 The Consensus Problem

A set of \(n\) distributed nodes must agree on a sequence of values (transactions, blocks) despite node failures and potentially malicious behavior. The Byzantine generals problem (Lamport, Shostak, Pease, 1982) formalizes the challenge: \(n\) generals, some traitors, must agree on a common plan of attack.

A consensus protocol satisfies:

- **Safety (Agreement):** No two honest nodes decide on different values.
- **Liveness (Termination):** All honest nodes eventually decide on a value.
- **Validity:** The decided value was proposed by an honest node.

In the FLP impossibility result (Fischer, Lynch, Paterson, 1985), no deterministic asynchronous protocol can guarantee consensus with even a single crash failure. Practical protocols therefore rely on synchrony assumptions or randomization.

### 3.2 Proof of Work (PoW)

PoW is the consensus mechanism introduced by Bitcoin. Nodes (miners) compete to find a nonce such that the block header hash is below a target value.

**Hashcash.** The underlying mechanism was originally proposed by Adam Back (2002) as an anti-spam measure. A valid proof requires finding a value whose hash begins with a specified number of leading zero bits.

**Mining.** Given block header \(h\) and target \(T\), find nonce \(n\) such that:

\[
\text{SHA-256}(\text{SHA-256}(h \parallel n)) < T
\]

The expected number of hash attempts is \(\frac{2^{256}}{\text{target}}\). The process is probabilistic: each attempt is an independent Bernoulli trial with success probability \(p \approx T / 2^{256}\).

**Difficulty Adjustment.** Bitcoin adjusts the target every 2016 blocks (approximately 2 weeks) to maintain a 10-minute average inter-block time:

\[
\text{new\_target} = \text{old\_target} \times \frac{\text{actual\_time}}{2 \text{weeks}}
\]

If blocks are mined faster than 10 minutes on average, the difficulty increases.

**Fork Resolution — Longest Chain Rule.** When two valid blocks are mined concurrently, nodes temporarily build on whichever block they received first. The fork is resolved when a subsequent block extends one branch, making it strictly longer. Nodes reorganize their chain to follow the one with the most cumulative work.

**Orphan Blocks.** Blocks that are not included in the canonical chain are called orphans or stale blocks. Miners waste their effort on these blocks; they receive no block reward.

**51% Attack.** An adversary controlling more than 50% of the network's hash rate can:
- Outpace honest miners and produce the longest chain (rewriting history up to the point of the honest chain).
- Censor transactions by refusing to include them.
- Double-spend coins by spending them on one fork and mining an alternative fork without that transaction.

The adversary cannot, however, create coins out of nothing, forge signatures, or reverse transactions that have sufficient confirmations.

**Hash Rate.** The total computational power of the network, measured in hashes per second (H/s). As of 2025, Bitcoin's hash rate exceeds 500 EH/s (\(5 \times 10^{20}\) H/s).

### 3.3 Proof of Stake (PoS)

In PoS, validators (not miners) propose and vote on blocks. A validator's influence is proportional to its economic stake in the network.

**Validator Selection.** The protocol pseudo-randomly selects a validator to propose the next block. Selection probability is weighted by stake:

\[
\Pr(\text{validator}_i \text{ selected}) = \frac{s_i}{\sum_j s_j}
\]

where \(s_i\) is the amount staked by validator \(i\).

**Casper FFG (Friendly Finality Gadget).** Buterin and Griffith (2018) introduced Casper, a PoS finality overlay. Validators vote on checkpoints. If \(2/3\) of validators vote for the same pair \((h_{source}, h_{target})\), the checkpoint is finalized. Casper introduces two slashing conditions:

1. **Double Vote:** A validator must not publish two distinct votes for the same target height.
2. **Surround Vote:** A validator must not vote on a pair \((s_1, t_1)\) that surrounds another pair \((s_2, t_2)\) where \(s_1 < s_2 < t_2 < t_1\).

Violating either condition results in the validator's entire stake being slashed (destroyed).

**Slashing Conditions (Formal).** Let \(v_i^t\) be the vote of validator \(i\) at height \(t\). The two rules:

\[
\neg \exists t, v_i^t.s = s_1 \land v_i^t.t = t_1 \land v_i^{t'}.s = s_2 \land v_i^{t'}.t = t_2 \land (t_1 = t_2)
\]
\[
\neg \exists v_i, v_j : s_i < s_j < t_j < t_i
\]

**Delegation and Staking Pools.** Not all token holders wish to run validator infrastructure. Delegation allows token holders to delegate their stake to a validator, sharing rewards proportionally. Staking pools (e.g., Lido, Rocket Pool) aggregate delegations to reach the minimum stake threshold.

### 3.4 Delegated Proof of Stake (DPoS)

DPoS (used by EOS, Tron, BitShares) introduces representative democracy. Token holders vote for a fixed number of delegates (block producers). The elected delegates take turns producing blocks. DPoS achieves high throughput (thousands of TPS) at the cost of reduced decentralization.

### 3.5 Practical Byzantine Fault Tolerance (PBFT)

PBFT (Castro & Liskov, 1999) provides Byzantine fault tolerance in partially synchronous networks with \(n \geq 3f + 1\) validators.

**Protocol Phases.** For a client requesting operation \(o\):

1. **Pre-Prepare:** Primary node \(p\) assigns sequence number \(s\) and broadcasts \(\langle \text{PRE-PREPARE}, o, s, p \rangle\).
2. **Prepare:** Each replica \(i\) broadcasts \(\langle \text{PREPARE}, o, s, i \rangle\) upon receiving the pre-prepare. A replica accepts after collecting \(2f + 1\) matching PREPARE messages.
3. **Commit:** Each replica broadcasts \(\langle \text{COMMIT}, o, s, i \rangle\) and accepts after collecting \(2f + 1\) matching COMMIT messages.

**View Change.** If the primary fails (no progress within a timeout), replicas trigger a view change to elect a new primary.

PBFT achieves eventual finality: once a block is committed, it is irreversible. Communication complexity is \(O(n^2)\), limiting PBFT to dozens of nodes.

### 3.6 Tendermint

Tendermint (Kwon, 2014) combines a PBFT-like consensus protocol with a BFT-SMR (state machine replication) engine. It underlies the Cosmos ecosystem.

**Rounds.** Each round in Tendermint has three steps:

1. **Propose:** The proposer (selected round-robin weighted by voting power) broadcasts a block.
2. **Pre-Vote:** Validators broadcast their pre-vote for the block.
3. **Pre-Commit:** Validators broadcast pre-commit after receiving \(2/3+\) pre-votes.

If \(2/3+\) pre-commits are received, the block is committed. Otherwise, the round times out and a new round begins with a new proposer.

### 3.7 HotStuff

HotStuff (Yin et al., 2019) improves on PBFT with linear communication complexity \(O(n)\) via a pipelined three-phase protocol. It is the consensus engine used by Facebook's Libra (now Diem) and the Sui blockchain. HotStuff introduces a leader-rotate mechanism with threshold signatures for efficient view changes.

### 3.8 Raft

Raft (Ongaro & Ousterhout, 2014) is a crash-fault-tolerant (CFT) consensus protocol, not Byzantine-fault-tolerant. It assumes nodes fail only by stopping, not by sending malicious messages. Raft is used in permissioned blockchain settings where participants are trusted.

**Leader Election.** Nodes are in one of three states: follower, candidate, or leader. A leader is elected by majority vote after a timeout. The leader replicates log entries to followers.

### 3.9 Nakamoto Consensus

Nakamoto consensus is the term for the combination of PoW and the longest-chain fork-choice rule. Key properties:

- **Probabilistic finality:** A block is never definitively final; rather, the probability of reversal decreases exponentially with the number of confirmations. After \(k\) confirmations, the probability of reversal under a \(q\)-adversary is approximately \((q/p)^k\) where \(p = 1 - q\).
- **Scalability vs. security trade-off:** increasing block size or decreasing block interval increases throughput but increases the fork rate and reduces security.

### 3.10 Comparison

| Property | PoW | PoS | PBFT | Tendermint | Raft |
|----------|-----|-----|------|------------|------|
| Fault tolerance | < 50% hash rate | < 33% stake | < 33% nodes | < 33% validators | < 50% (crash) |
| Finality | Probabilistic | Probabilistic / finality gadget | Immediate | Immediate | Immediate |
| Energy | Very high | Low | Low | Low | Low |
| Throughput | Low (~7 tx/s) | Medium | Medium | Medium | High |
| Communication | Gossip (O(n)) | Gossip (O(n)) | O(n²) | O(n²) | O(n) |
| Decentralization | High | High | Low (≤100 nodes) | Medium | Low |
| Node admission | Permissionless | Permissionless | Permissioned | Permissionless/ed | Permissioned |

## Examples

### Example 3.1: Bitcoin Difficulty Calculation

Current target: \(T = 0x00000000FFFF0000000000000000000000000000000000000000000000000000\)

The target in compact form (bits): 0x1d00ffff. The expected number of hashes per block:

\[
\frac{2^{256}}{T} \approx 4.3 \times 10^{12} \text{ hashes}
\]

At 500 EH/s, the network finds a block roughly every:

\[
\frac{4.3 \times 10^{12}}{500 \times 10^{18}} \approx 600 \text{ seconds} = 10 \text{ minutes}
\]

### Example 3.2: PoS Slashing

Validator Alice votes for checkpoint (100, 200) and later votes for checkpoint (100, 200) again with a different target hash. This is a double vote. Alice's entire 32 ETH stake is slashed. The slashed amount is partially burned and partially distributed to whistleblowers.

### Example 3.3: PBFT Message Complexity

With \(n = 4\) replicas (\(f = 1\)), PBFT requires each node to receive \(3f + 1 = 4\) Prepare messages. The primary sends \(n - 1 = 3\) pre-prepare messages. Total messages per consensus round: \(3n + 2(n-1) = 20\) messages.

## Summary

Consensus is the core innovation that makes decentralized ledgers possible. PoW provides security through computational work but consumes vast energy. PoS replaces work with economic stake, dramatically reducing energy costs while maintaining security through cryptoeconomic incentives. Classical BFT protocols (PBFT, Tendermint, HotStuff) offer immediate finality and high throughput but scale to smaller validator sets. The choice of consensus mechanism fundamentally shapes a blockchain's security, decentralization, and performance characteristics.

## Exercises

### Review Questions

1. State the FLP impossibility result. How do practical consensus protocols circumvent it?
2. Explain why a 51% attacker cannot reverse a transaction with 100 confirmations instantly. What resources would it require?
3. What are the two slashing conditions in Casper FFG? Why is each necessary?
4. Compare the communication complexity of PBFT and HotStuff. Why does HotStuff scale better?
5. What does "probabilistic finality" mean? Contrast with "economic finality" in PoS.

### Application Problems

6. Suppose the Bitcoin difficulty is \(D\). Derive the formula for the expected time to find a block given hash rate \(H\). If the hash rate doubles, how does the difficulty adjust?
7. In Tendermint, a validator with 10% of voting power is offline for 100 rounds. Estimate the probability that this validator is selected as proposer at least once during this period.
8. An adversary controls 30% of the hash rate. Compute the probability that the adversary can produce a chain of length \(k\) that overtakes an honest chain of length \(k\) if both start from the same block. Assume the honest chain leads by \(z\) blocks.

### Challenge Problem

9. **(Safety-Liveness Trade-off in PoW).** Prove that in Nakamoto consensus, reducing the block interval from 10 minutes to 10 seconds while keeping the block size constant increases the stale block rate. Derive the relationship between block interval \(\tau\), network propagation delay \(\delta\), stale rate \(p_{stale}\), and security threshold (adversarial fraction). Show that for small \(\tau/\delta\), the effective security threshold drops below 50%.
