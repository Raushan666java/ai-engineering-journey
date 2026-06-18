# Chapter 5: Ethereum and Smart Contracts

> **Previous:** [Chapter 4: The Bitcoin Network](./04-bitcoin.md) | **Next:** [Chapter 6: Decentralized Applications (DApps)](./06-dapps.md)

---

## Learning Objectives

- Compare the Ethereum Account model with the Bitcoin UTXO model
- Define "Smart Contracts" and their execution environment (EVM)
- Understand the role of Gas, Gas Price, and Gas Limit in preventing spam
- Explain the difference between Externally Owned Accounts (EOA) and Contract Accounts
- Describe the state transition function of the Ethereum blockchain

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Account Model | EOA (users) vs Contract (code) accounts | Key distinction from Bitcoin's UTXO model |
| EVM | Sandboxed, deterministic runtime | Every node runs every transaction — expensive but trustless |
| Smart Contracts | Self-executing immutable code | Deploy once, runs forever as programmed |
| Gas | Computational cost measured per opcode | Prevents infinite loops, funds network security |
| State Transition | (S, Tx) → S' | Deterministic state changes across all nodes |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Account Model] --> B[EVM Architecture]
    B --> C[Smart Contracts]
    C --> D[Gas Economics]
    D --> E[State Transitions]
    E --> F[Ethereum Roadmap]
```

---

## Theory

### The Account Model
Unlike Bitcoin, Ethereum uses an **Account-based model** (similar to a bank account).
- **EOA (Externally Owned Account):** Controlled by private keys; can send transactions and hold Ether.
- **Contract Account:** Controlled by code; has its own storage and logic.
The "Global State" of Ethereum is a mapping of addresses to account states (Balance, Nonce, Code, Storage).

### The Ethereum Virtual Machine (EVM)
The EVM is a sandboxed runtime environment for executing smart contract code. It is **Turing complete**, meaning it can perform any computation given enough resources. Every node in the network runs the EVM to verify the state transitions.

### Smart Contracts
A smart contract is a self-executing program stored on the blockchain. Once deployed, it is immutable and acts exactly as programmed without the need for an intermediary.

![Ethereum and EVM](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/blockchain/ch05-ethereum.png)

### Gas and Economic Security
To prevent infinite loops and resource abuse (The Halting Problem), Ethereum introduces **Gas**.
- Every operation (addition, storage, etc.) costs a fixed amount of Gas.
- **Gas Price:** What you are willing to pay per unit of gas (in Gwei).
- **Gas Limit:** Maximum gas you allow the transaction to consume.
- Total Fee = $GasUsed \times GasPrice$.

---

## Examples

### Example 1: A Simple "Store Value" Contract
```solidity
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public storedData;

    function set(uint256 x) public {
        storedData = x;
    }
}
```
- **Deployment:** Alice sends a transaction with the contract's bytecode.
- **Execution:** Bob calls `set(42)`. He pays for the gas required to update the `storedData` variable in Ethereum's global storage.

### Example 2: Out of Gas Error
Alice sends a transaction to a complex contract with a Gas Limit of 21,000.
1. The transaction starts.
2. The EVM executes the first few steps, consuming 21,000 gas.
3. The execution is still not finished.
4. **Result:** The transaction fails. The state changes are reverted, but the 21,000 gas is **not refunded** because the miner already performed the work.

> **One-Sentence Takeaway:** Ethereum's gas mechanism solves the halting problem for a Turing-complete blockchain by charging per-operation, ensuring infinite loops cost an attacker real money rather than halting the network.

> **Pro Tip:** When deploying a smart contract, the gas cost scales with storage writes (SSTORE), not instruction count. Writing to a storage slot from zero costs ~20,000 gas, while writing from non-zero costs ~5,000 gas. Optimize by minimizing storage writes.

> **Warning:** Smart contracts are immutable after deployment. If a bug is discovered, funds are at risk until a new contract is deployed and users migrate. Always audit contracts and include upgrade patterns (proxy contracts) for production systems.

---

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| EOA | Controlled by private key | Can initiate transactions | User wallets |
| Contract Account | Controlled by contract code | Has storage and logic | DApps, DeFi protocols |
| UTXO Model (Bitcoin) | State = set of unspent outputs | No code execution | Simple payments |
| Account Model (Ethereum) | State = address → balance mapping | Supports arbitrary computation | Smart contracts, DeFi |
| Gas | Computation cost unit | Prevents DoS, funds network | All EVM operations |

## Quick Reference

| Category | Key Concepts | Notes |
|----------|-------------|-------|
| **Account Types** | EOA (externally owned), Contract | EOA txs are signed; Contract txs are triggered internally |
| **EVM Ops** | ADD (3 gas), SSTORE (20K/5K), BALANCE (700) | Gas costs vary by operation complexity |
| **Denominations** | 1 ETH = 10⁹ Gwei = 10¹⁸ Wei | Gas price typically quoted in Gwei |
| **Contract Lifecycle** | Deploy → Interact → Selfdestruct | No upgrade by default — use proxy pattern |
| **State Transition** | σ[t+1] = Υ(σ[t], T) | Deterministic across all nodes |

## Cross-Application Matrix

| Technique | DeFi | Smart Contracts | Enterprise Blockchain | Research |
|-----------|------|-----------------|----------------------|----------|
| Account Model | Balance tracking | Contract state | Identity registry | Account abstraction |
| EVM | Token standards (ERC-20) | Contract runtime | Permissioned EVMs | EVM optimization |
| Gas Economics | Swap pricing | Compute costs | Private chain pricing | EIP-1559 fee market |
| Smart Contracts | Lending protocols | Automated logic | Supply chain rules | Formal verification |
| State Transition | Flash loans | Cross-contract calls | Multi-chain state | Parallel EVM |

## Chapter Quiz

1. Why do Ethereum transactions cost more gas when writing to a storage slot for the first time (vs updating)?
   - A) It's a bug in the EVM
   - B) Writing from zero to non-zero is a cold storage access requiring more computation
   - C) It's randomly determined each block
   - D) Gas cost is the same regardless

<details>
<summary>Answer</summary>
**B) Writing from zero to non-zero is a cold storage access requiring more computation.** SSTORE from zero costs ~20,000 gas vs ~5,000 for updating existing storage. This incentivizes users to clear unused storage (gas refund).
</details>

2. What happens to the state changes of an Ethereum transaction that runs out of gas?
   - A) Partial state changes remain
   - B) All state changes are reverted, but gas is not refunded
   - C) The transaction succeeds partially
   - D) Both state and gas are refunded

<details>
<summary>Answer</summary>
**B) All state changes are reverted, but gas is not refunded.** The miner performed computational work, so gas is consumed even though the transaction ultimately failed. This prevents DoS attacks where attackers revert cheap transactions.
</details>

3. What is the critical security difference between an EOA and a Contract Account?
   - A) EOAs can hold ETH, contracts cannot
   - B) Contract accounts can be programmed to execute multi-step operations atomically; EOAs cannot
   - C) EOAs have higher gas limits
   - D) Contract accounts cannot send transactions

<details>
<summary>Answer</summary>
**B) Contract accounts can be programmed to execute multi-step operations atomically.** This enables composable DeFi operations (flash loans, multi-hop swaps) that execute as atomic units — either all steps succeed or none do.
</details>

## Summary

## Summary

- Ethereum is a "World Computer" that extends blockchain from payments to general computation.
- Accounts (EOAs and Contracts) are the primary units of state.
- The EVM provides a consistent, deterministic environment for smart contract execution.
- Gas is the fundamental mechanism for resource allocation and network security.
- Smart contracts enable decentralized, trustless logic on a global scale.

---

## Exercises

### Review Questions
1. What is the difference between an EOA and a Contract Account?
2. Why is Turing completeness both a benefit and a risk for Ethereum?
3. Explain the relationship between Gwei and Ether.
4. What happens to the "Nonce" of an account after a transaction is executed?

### Application Problems
1. Calculate the total fee in ETH for a transaction that uses 100,000 gas with a gas price of 50 Gwei.
2. Compare the storage requirements of the UTXO model versus the Account model for a network with 1 million users.
3. Explain why "Gas Price" fluctuates based on network demand.

### Challenge Problem
1. Discuss the "Reentrancy" vulnerability at a high level and explain how it relates to the EVM's execution flow.
