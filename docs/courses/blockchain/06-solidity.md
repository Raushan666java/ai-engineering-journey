# Chapter 6: Smart Contract Development

---

## Learning Objectives

- Identify the syntax and structure of the Solidity programming language
- Understand the concept of "State Variables" vs. "Local Variables"
- Explain function visibility (public, private, external, internal) and modifiers
- Describe common security pitfalls and best practices in contract design
- Understand the compilation and deployment lifecycle

---

## Theory

### Solidity Overview
Solidity is a high-level, object-oriented language for writing smart contracts. It is influenced by C++, Python, and JavaScript.

### Data Types and Storage
- **Value Types:** `uint`, `int`, `bool`, `address`.
- **Reference Types:** `string`, `struct`, `mapping`, `array`.
- **Storage:** Data that is permanently stored on the blockchain (Expensive).
- **Memory:** Temporary data used during execution (Cheaper).
- **Stack:** Local variables (Cheapest).

### Functions and Control
- **Visibility:** Defines who can call the function.
- **View/Pure:** Functions that do not modify state (`view`) or do not even read state (`pure`).
- **Payable:** Functions that can receive Ether.
- **Modifiers:** Reusable code blocks that run before/after a function (e.g., `onlyOwner`).

### Security Patterns
Contracts handle money, making them high-value targets.
- **Check-Effects-Interactions:** Always update internal state before calling external contracts.
- **Pull over Push:** Let users "withdraw" funds instead of "sending" them automatically.

---

## Examples

### Example 1: A "Voting" Contract Structure
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleVoting {
    mapping(address => bool) public hasVoted;
    uint256 public voteCount;

    function vote() public {
        require(!hasVoted[msg.sender], "Already voted.");
        hasVoted[msg.sender] = true;
        voteCount++;
    }
}
```
- **State Variables:** `hasVoted` and `voteCount`.
- **Logic:** The `require` statement acts as a guard. If it fails, the transaction reverts.

### Example 2: Access Control Modifier
```solidity
contract Guarded {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _; // This is where the function body is inserted
    }

    function restrictedAction() public onlyOwner {
        // Logic only the owner can trigger
    }
}
```
The `onlyOwner` modifier ensures that only the account that deployed the contract can call `restrictedAction`.

---

## Summary

- Solidity is the most widely used language for EVM-compatible smart contracts.
- Efficient use of `storage` vs. `memory` is critical for gas optimization.
- Function modifiers and visibility levels provide robust control over contract behavior.
- Security must be designed into the contract from the beginning using established patterns.
- Tools like Hardhat and Foundry are used for compiling, testing, and deploying contracts.

---

## Exercises

### Review Questions
1. What is the purpose of the `mapping` data type?
2. Explain the difference between `external` and `public` visibility.
3. Why is it important to use `view` or `pure` when possible?
4. What does the `msg.sender` global variable represent?

### Application Problems
1. Write a function `add(uint a, uint b)` that returns the sum but fails if the result exceeds $2^{256}-1$.
2. Design a `mapping` that stores the balance of different tokens for different users.
3. Create a modifier `costs(uint amount)` that requires the caller to send at least `amount` Wei.

### Challenge Problem
1. Analyze the "DAO Hack" and explain why updating the state *after* an external call led to a catastrophic failure.
