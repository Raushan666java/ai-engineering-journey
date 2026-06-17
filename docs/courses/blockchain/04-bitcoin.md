# Chapter 4: The Bitcoin Network

---

## Learning Objectives

- Describe the architecture of the Bitcoin network and the role of different node types
- Understand the UTXO (Unspent Transaction Output) model vs. Account model
- Explain the life cycle of a Bitcoin transaction from broadcast to confirmation
- Analyze the Bitcoin script language and its limited expressiveness
- Understand the concept of "Mining" and the halving mechanism

---

## Theory

### The UTXO Model
Bitcoin does not use "accounts" or "balances" in the way a bank does. Instead, it tracks **UTXOs**.
- Every transaction consumes one or more existing UTXOs as **Inputs**.
- Every transaction creates one or more new UTXOs as **Outputs**.
- Your "balance" is simply the sum of all UTXOs associated with your addresses.

### Transaction Structure
A Bitcoin transaction consists of:
1. **Metadata:** Version, Locktime.
2. **Inputs:** References to previous UTXOs and a `scriptSig` (unlocking script).
3. **Outputs:** Value (in Satoshis) and a `scriptPubKey` (locking script).

![Bitcoin UTXO Model](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/blockchain/ch04-bitcoin.png)

### Bitcoin Script
Bitcoin uses a stack-based, non-Turing complete language called **Script**. It is intentionally limited to prevent infinite loops (denial of service). Most transactions use **P2PKH (Pay-to-Public-Key-Hash)** scripts.

### The Mining Ecosystem
Miners play two roles:
1. **Security:** Providing hash rate to secure the history.
2. **Issuance:** Releasing new BTC into circulation via the **Coinbase Transaction**.
The **Halving** occurs every 210,000 blocks (roughly 4 years), cutting the block reward in half to enforce scarcity (21 million total supply).

---

## Examples

### Example 1: UTXO Consolidation
Alice has three UTXOs:
- UTXO A: 0.5 BTC
- UTXO B: 1.2 BTC
- UTXO C: 0.3 BTC
Alice wants to buy a motorcycle for 1.8 BTC.
- **Input:** Alice provides A, B, and C (Total 2.0 BTC).
- **Output 1:** 1.8 BTC to the Dealer.
- **Output 2 (Change):** 0.19 BTC back to Alice.
- **Fee:** 0.01 BTC remains unallocated; it is collected by the miner.

### Example 2: P2PKH Script Execution
Locking Script (`scriptPubKey`): `OP_DUP OP_HASH160 <PubKHash> OP_EQUALVERIFY OP_CHECKSIG`
Unlocking Script (`scriptSig`): `<Signature> <PublicKey>`
1. `<Signature>` and `<PublicKey>` are pushed to the stack.
2. `OP_DUP` duplicates `<PublicKey>`.
3. `OP_HASH160` hashes it.
4. `OP_EQUALVERIFY` checks if it matches `<PubKHash>`.
5. `OP_CHECKSIG` verifies `<Signature>` using `<PublicKey>`.
If the result is `True`, the transaction is valid.

---

## Summary

- Bitcoin is a P2P electronic cash system based on the UTXO model.
- Transactions are valid only if they correctly "unlock" previous outputs.
- Bitcoin Script allows for basic conditional payments without the complexity of a full VM.
- Mining ensures network security and regulates the supply of BTC.
- Hardcoded scarcity (21M limit) and the halving mechanism are central to Bitcoin's value proposition.

---

## Exercises

### Review Questions
1. What is a "Coinbase Transaction"?
2. Why does Bitcoin use a stack-based language?
3. Explain why there are no "balances" stored on the Bitcoin blockchain.
4. What happens to the remaining value in a transaction if the sum of inputs exceeds the sum of outputs?

### Application Problems
1. Design a 2-of-3 Multisig script structure at a high level.
2. If Alice sends 1 BTC to Bob, but Bob never spends it, what happens to that UTXO in the long term?
3. Calculate the total number of Bitcoins that will ever be mined, assuming a starting reward of 50 BTC and halving every 210,000 blocks.

### Challenge Problem
1. Analyze the "Stacking" attack in Script and explain how `OP_RETURN` is used to store arbitrary data without bloating the UTXO set.
