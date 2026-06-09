# Chapter 5: Ethereum

## Learning Objectives

After completing this chapter, the student will be able to:

1. Differentiate between externally owned accounts (EOA) and contract accounts, and describe the Ethereum state.
2. Analyze Ethereum transaction structure, gas mechanics, and EIP-1559 fee model.
3. Explain the Ethereum Virtual Machine (EVM) architecture, execution model, and opcode system.
4. Deploy a smart contract and interpret its ABI and bytecode.
5. Describe the Patricia Merkle Trie and its role in state storage.
6. Summarize the Ethereum 2.0 upgrade: Beacon Chain, sharding, and PoS transition.

## Theory

### 5.1 Ethereum Overview

Launched in July 2015 by Vitalik Buterin and the Ethereum Foundation, Ethereum extends the blockchain concept from a simple ledger to a globally replicated state machine. The core innovation is the Ethereum Virtual Machine (EVM), a Turing-complete runtime that executes smart contracts — code that runs deterministically across all nodes.

### 5.2 Account Model

Ethereum uses an account-based model rather than Bitcoin's UTXO model. The global state is a mapping from addresses to account states.

**Externally Owned Account (EOA).**
- Controlled by a private key.
- Can initiate transactions.
- State: nonce, balance.

**Contract Account.**
- Controlled by its contract code.
- Cannot initiate transactions on its own (only responds to messages).
- State: nonce, balance, storageRoot, codeHash.

**Account State.** Formally, each account is a tuple:

\[
A = \langle \text{nonce}, \text{balance}, \text{storageRoot}, \text{codeHash} \rangle
\]

- **nonce:** A counter equal to the number of transactions sent from an EOA or the number of contract creations from a contract account.
- **balance:** The account's Ether balance in wei (\(1 \text{ ETH} = 10^{18} \text{ wei}\)).
- **storageRoot:** The root hash of the Merkle Patricia Trie encoding the account's persistent storage (empty for EOAs).
- **codeHash:** The hash of the account's EVM bytecode (empty hash for EOAs).

### 5.3 Transactions

An Ethereum transaction is a cryptographically signed instruction from an EOA. Transactions trigger state transitions.

**Transaction Fields.**

| Field | Type | Description |
|-------|------|-------------|
| nonce | uint64 | Transaction count from sender |
| gasPrice | uint256 | Price per gas (pre-EIP-1559) |
| gasLimit | uint64 | Max gas units this transaction may consume |
| to | address | Recipient (empty for contract creation) |
| value | uint256 | Ether value to transfer (in wei) |
| data | bytes | Input data (calldata) for contract call or init code for creation |
| v, r, s | uint256 | ECDSA signature components |

**Gas.** Gas is the unit of computational work. Each EVM operation has a fixed gas cost. The total gas consumed by a transaction is the sum of its operations.

- **gasUsed:** Actual gas consumed by execution.
- **gasPrice:** Price per unit of gas the user is willing to pay.
- **Transaction fee = gasUsed × gasPrice.**

**Gas Limit.** The maximum gas a user is willing to spend. If the gas used exceeds gasLimit, the transaction reverts (with state rolled back), but the gas is still consumed (as payment for computational work).

**EIP-1559 (London Hard Fork, August 2021).** EIP-1559 restructured the fee market:

- **Base Fee:** A protocol-determined per-block fee, burned (destroyed). Adjusts up to 12.5% per block based on block fullness. Target: 50% of gas limit.
- **Priority Fee (Tip):** An optional user-determined tip to miners, not burned.
- **Max Fee:** User specifies the maximum total fee per gas: `maxFeePerGas = baseFee + maxPriorityFee`.

**Transaction Types.**

| Type | EIP | Description |
|------|-----|-------------|
| Legacy (0x00) | — | Pre-EIP-1559 format with gasPrice field |
| EIP-2930 (0x01) | EIP-2930 | Adds an access list for gas savings |
| EIP-1559 (0x02) | EIP-1559 | Post-London format with baseFee, priorityFee |

### 5.4 Ethereum Virtual Machine (EVM)

The EVM is a stack-based virtual machine with 256-bit words. It executes bytecode deterministically: given the same input (state + transaction), every node produces the same output.

**Architecture.**

- **Stack:** 1024-element max, 256-bit words. Most operations consume and produce values on the stack.
- **Memory:** Linear byte array, volatile, cleared between external calls. Word-addressable (32-byte words).
- **Storage:** Persistent key-value store (256-bit → 256-bit) specific to each contract account. Storage is the most expensive resource (SSTORE costs 20,000–29,000 gas for a cold write).
- **Calldata:** Read-only bytes containing the transaction input data.
- **Program Counter (PC):** Points to the current opcode.

**Execution Model.**

1. Load bytecode into memory.
2. Set PC = 0.
3. While PC < bytecode.length:
   a. Read opcode at PC.
   b. Execute opcode (may push/pop stack, read/write memory/storage).
   c. Increment PC.
4. Continue until STOP, RETURN, REVERT, or INVALID instruction.

**Opcodes and Gas Costs.** The EVM has approximately 140 opcodes, each with a defined gas cost:

| Opcode | Gas | Description |
|--------|-----|-------------|
| STOP | 0 | Halts execution |
| ADD | 3 | Add two stack values |
| SUB | 3 | Subtract |
| MUL | 5 | Multiply |
| DIV | 5 | Division |
| SHA3 | 30 + 6/word | Keccak-256 hash |
| BALANCE | 700 | Get account balance |
| SLOAD | 2100 | Load from storage |
| SSTORE | 20000/29000 | Store to storage |
| CALL | 700 + value | Call another contract |
| RETURN | 0 | Return from execution |

**Smart Contract Bytecode.** A compiled Solidity contract produces EVM bytecode:

```
608060405260043610... (hex-encoded bytecode)
```

The bytecode is deployed by a contract creation transaction. The deployment cost is:

\[
\text{cost} = 32000 + 200 \times \text{bytecode\_length} + \text{runtime\_cost}
\]

**Application Binary Interface (ABI).** The ABI is a JSON specification of a contract's functions, events, and their encodings. It enables external callers to encode calls and decode responses.

```json
[
  {
    "name": "transfer",
    "type": "function",
    "inputs": [
      {"name": "to", "type": "address"},
      {"name": "value", "type": "uint256"}
    ],
    "outputs": [{"name": "", "type": "bool"}],
    "stateMutability": "nonpayable"
  }
]
```

Function calls encode as: `0x<4-byte-selector><32-byte-arg0><32-byte-arg1>...`

The selector is the first 4 bytes of `keccak256("functionName(type1,type2,...)")`.

### 5.5 Ethereum State — Patricia Merkle Trie

Ethereum uses a Modified Merkle Patricia Trie (MPT) to encode the global state. The trie is a combination of a radix trie and a Merkle tree.

**Node Types.**

- **Leaf Node:** `[encodedPath, value]` — contains a full key suffix and value.
- **Extension Node:** `[encodedPath, key]` — contains a partial key and reference to next node.
- **Branch Node:** `[node0, node1, ..., node15, value]` — 17 elements, one for each hex nibble plus an optional terminal value.

**State Trie.** A single MPT maps addresses (Keccak-256 hashed) to account state RLP encodings. The root hash (stateRoot) is stored in the block header.

**Storage Trie.** Each contract account has its own MPT mapping 256-bit storage keys to 256-bit values. The storageRoot is part of the account state.

**Transaction Trie and Receipt Trie.** Two additional MPTs per block: one for transactions, one for transaction receipts (logs, gas used, status).

### 5.6 Block Structure

An Ethereum block header contains:

| Field | Size | Description |
|-------|------|-------------|
| parentHash | 32 bytes | Hash of parent block |
| uncleHash | 32 bytes | Hash of uncle list |
| coinbase | 20 bytes | Beneficiary address (miner) |
| stateRoot | 32 bytes | Root of state trie |
| transactionsRoot | 32 bytes | Root of transaction trie |
| receiptsRoot | 32 bytes | Root of receipt trie |
| logsBloom | 256 bytes | Bloom filter for event logs |
| difficulty | 256 bits | Block difficulty (pre-merge) |
| number | 64 bits | Block height |
| gasLimit | 64 bits | Per-block gas limit |
| gasUsed | 64 bits | Total gas consumed |
| timestamp | 64 bits | Block timestamp |
| extraData | ≤32 bytes | Optional extra data |
| mixHash | 32 bytes | PoW nonce combo (pre-merge) |
| nonce | 8 bytes | PoW nonce (pre-merge) |
| baseFee | 256 bits | EIP-1559 base fee |

### 5.7 Ethereum 2.0 (The Merge and Beyond)

**The Merge (September 2022).** Ethereum transitioned from PoW to PoS. The Beacon Chain (launched December 2020) became the consensus layer. The existing execution layer (mainnet) became a shard attached to the Beacon Chain.

**Beacon Chain.** The PoS consensus layer with:

- **Epochs and Slots:** Time is divided into slots (12 seconds) and epochs (32 slots, 6.4 minutes). One validator is randomly selected per slot to propose a block.
- **Committees:** Validators are randomly assigned to committees that attest to blocks.
- **Finality:** Using Casper FFG, checkpoints are finalized after two-thirds of validators attest.

**Sharding.** Ethereum's roadmap includes 64 shards. Shards are parallel chains that share the Beacon Chain as a coordination layer. Each shard processes its own transactions, allowing the network to scale horizontally. Proto-danksharding (EIP-4844) introduced blob-carrying transactions for rollup data availability without execution shards.

## Examples

### Example 5.1: EOA State Transition

Before transaction:
- Alice (EOA): nonce = 5, balance = 10 ETH
- Bob (EOA): nonce = 0, balance = 2 ETH

Transaction: Alice → Bob, value = 1 ETH, gasPrice = 20 Gwei, gasLimit = 21000

After transaction:
- Alice: nonce = 6, balance = 10 - 1 - (21000 × 20 × 10⁻⁹) = 8.99958 ETH
- Bob: nonce = 0, balance = 3 ETH

### Example 5.2: EIP-1559 Fee Calculation

Block base fee: 50 Gwei. User settings:
- maxPriorityFee: 2 Gwei
- maxFeePerGas: 100 Gwei

Effective tip to miner: min(2, 100 - 50) = 2 Gwei
Effective fee per gas: 50 + 2 = 52 Gwei
Total fee (gas used = 21000): 21000 × 52 × 10⁻⁹ = 0.001092 ETH

The base fee (50 × 21000 = 0.00105 ETH) is burned.

### Example 5.3: Function Selector

Function: `transfer(address,uint256)`
Selector: `keccak256("transfer(address,uint256)")[0:4]` = `0xa9059cbb`

Encoding a call to transfer(0xAbc..., 1000):
`0xa9059cbb` + `0000000000000000000000000abc...` + `00000000000000000000000000000000000000000000000000000000000003e8`

## Summary

Ethereum generalizes blockchain from a ledger to a globally replicated computer. Its account model, gas metering, EVM, and Patricia Merkle Trie work together to provide a secure, deterministic, and programmable state machine. The transition to proof-of-stake (the Merge) reduced energy consumption by 99.95%, and ongoing upgrades (sharding, danksharding) aim to improve scalability while preserving decentralization.

## Exercises

### Review Questions

1. Compare and contrast the Ethereum account model with Bitcoin's UTXO model. What are the trade-offs?
2. Explain why gas is necessary. What prevents an attacker from consuming infinite computational resources?
3. How does EIP-1559 improve the user experience of fee estimation? What economic effect does burning the base fee have?
4. Describe the role of the Patricia Merkle Trie in Ethereum's state management. Why is a trie used instead of a simple Merkle tree?
5. What changed during the Merge? What components remained unchanged?

### Application Problems

6. A transaction calls a contract with `gasLimit = 100000`. The contract execution uses 64000 gas. The EIP-1559 parameters are `maxFeePerGas = 150 Gwei`, `maxPriorityFee = 3 Gwei`, `baseFee = 120 Gwei`. Compute the total fee, the amount burned, and the miner tip.
7. Derive the contract address for a deployment from address `0xAbc...` with nonce 0. Show the formula and compute the address.
8. A contract has storage slot `keccak256("myValue")`. Write the SSTORE operation sequence that stores the value `42` and compute the total gas cost.

### Challenge Problem

9. **(Efficient State Proofs).** Design a system that allows a light client to obtain a proof of its Ether balance without downloading the full state trie. Your proof should be \(O(\log n)\) in size. Extend the design to support proving multiple account balances simultaneously for a constant-factor overhead.
