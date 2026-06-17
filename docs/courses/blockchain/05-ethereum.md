# Chapter 5: Ethereum and Smart Contracts

---

## Learning Objectives

- Compare the Ethereum Account model with the Bitcoin UTXO model
- Define "Smart Contracts" and their execution environment (EVM)
- Understand the role of Gas, Gas Price, and Gas Limit in preventing spam
- Explain the difference between Externally Owned Accounts (EOA) and Contract Accounts
- Describe the state transition function of the Ethereum blockchain

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

![Ethereum and EVM](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/blockchain/ch05-ethereum.png)

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

---

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
