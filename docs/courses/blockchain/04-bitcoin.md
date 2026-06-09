# Chapter 4: Bitcoin

## Learning Objectives

After completing this chapter, the student will be able to:

1. Describe the Bitcoin UTXO model and explain how transactions consume and create unspent outputs.
2. Analyze Bitcoin's scripting language, including locking and unlocking scripts for P2PKH and P2SH.
3. Decode a Bitcoin block header and interpret each field.
4. Explain the mining process, block reward structure, and halving schedule.
5. Describe the mempool, fee market mechanics, and transaction selection policies.
6. Distinguish among full nodes, SPV clients, hardware wallets, and hot/cold wallets.

## Theory

### 4.1 The UTXO Model

Bitcoin does not use account balances. Instead, the state of the system is the set of Unspent Transaction Outputs (UTXOs). Each UTXO is an indivisible coin of a specific value, associated with a locking script that defines the conditions for spending it.

**Transaction Structure.** A Bitcoin transaction tx is a tuple:

\[
\text{tx} = \langle \text{version}, \text{inputs}, \text{outputs}, \text{locktime} \rangle
\]

- **version:** indicates which set of consensus rules to apply.
- **inputs:** list of references to previous UTXOs, each accompanied by an unlocking script (scriptSig) that satisfies the prior locking script.
- **outputs:** list of new UTXOs, each with a value (in satoshis, where 1 BTC = \(10^8\) satoshis) and a locking script (scriptPubKey).
- **locktime:** the earliest time (block height or Unix timestamp) at which the transaction can be included in a block.

**Transaction Lifecycle.**

1. **Creation:** The sender constructs a transaction that references one or more existing UTXOs as inputs and creates new UTXOs as outputs.
2. **Signing:** The sender signs each input with the private key corresponding to the referenced UTXO's public key.
3. **Broadcast:** The transaction is propagated through the peer-to-peer network.
4. **Validation:** Each node validates the transaction: signatures are correct, inputs are unspent, and no value is created out of thin air.
5. **Inclusion:** A miner includes the transaction in a candidate block.
6. **Confirmation:** The block is mined and added to the chain. Each subsequent block adds a confirmation.

**Conservation of Value.** For a valid transaction:

\[
\sum \text{input values} = \sum \text{output values} + \text{fee}
\]

The fee is the difference between the sum of inputs and the sum of outputs. Miners collect fees as an incentive.

### 4.2 Bitcoin Script

Bitcoin Script is a stack-based, non-Turing-complete scripting language. It intentionally lacks loops to prevent infinite execution (denial-of-service attacks). Evaluation proceeds from left to right, pushing and popping values on a stack.

**Locking Script (scriptPubKey).** Placed on an output. It specifies the conditions for spending. Example for P2PKH:

```
OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
```

**Unlocking Script (scriptSig).** Placed on an input. It supplies the data that satisfies the locking script. Example for P2PKH:

```
<sig> <pubKey>
```

**Validation.** The concatenation scriptSig + scriptPubKey is executed. If it returns true (non-zero stack top), the input is valid.

**P2PKH (Pay-to-Public-Key-Hash).**
- **Locking:** `OP_DUP OP_HASH160 <hash160(pubKey)> OP_EQUALVERIFY OP_CHECKSIG`
- **Unlocking:** `<sig> <pubKey>`
- **Address:** Base58Check(0x00 + hash160(pubKey) + checksum)

**P2SH (Pay-to-Script-Hash).**
- **Locking:** `OP_HASH160 <hash160(redeemScript)> OP_EQUAL`
- **Unlocking:** `<sig1> ... <sigN> <redeemScript>`
- **Address:** Base58Check(0x05 + hash160(redeemScript) + checksum)
- Used for multi-signature and SegWit addresses.

**OP_RETURN.** Used to embed arbitrary data (up to 80 bytes) in a transaction. The output is provably unspendable, allowing nodes to prune it from the UTXO set. Commonly used for application data (e.g., Omni Layer, timestamping, notarization).

### 4.3 Block Structure

A Bitcoin block has two sections:

**Block Header (80 bytes).**

| Field | Size | Description |
|-------|------|-------------|
| version | 4 bytes | Protocol version (currently 0x20000000 for BIP-341) |
| prev_block | 32 bytes | SHA-256(SHA-256(previous block header)) |
| merkle_root | 32 bytes | SHA-256(SHA-256(Merkle tree root of transactions)) |
| timestamp | 4 bytes | Unix timestamp (seconds since 1970-01-01) |
| bits | 4 bytes | Encoded difficulty target |
| nonce | 4 bytes | Counter in proof-of-work search |

The block header alone (without transactions) uniquely identifies a block. Light clients (SPV) download only headers.

**Block Body.** Contains the transaction counter (varint) followed by the list of transactions. The coinbase transaction (first transaction) is created by the miner. It has no inputs (or a dummy input) and creates new BTC as the block reward.

### 4.4 Mining Process

**Candidate Block Construction.** The miner:
1. Collects transactions from the mempool into a candidate block template.
2. Computes the Merkle root from the selected transactions.
3. Sets the version, previous hash, timestamp, and bits.
4. Begins iterating the nonce (and after exhaustion, the extra-nonce in the coinbase transaction) until a valid header hash is found.

**Block Reward.** The coinbase transaction creates new bitcoins equal to:

\[
R = R_0 \times 2^{-\lfloor h/210000 \rfloor}
\]

where \(R_0 = 50\) BTC (initial reward) and \(h\) is the block height. The reward halves every 210,000 blocks (approximately 4 years).

**Halving Schedule.**

| Halving | Block Height | Reward | Date |
|---------|-------------|--------|------|
| 0 | Genesis | 50 BTC | 2009 |
| 1 | 210,000 | 25 BTC | 2012 |
| 2 | 420,000 | 12.5 BTC | 2016 |
| 3 | 630,000 | 6.25 BTC | 2020 |
| 4 | 840,000 | 3.125 BTC | 2024 |
| ... | ... | ... | ... |
| 32 | 6,720,000 | 0.0021 BTC | ~2140 |

At block 6,930,000 (approximately 2140), the reward falls below \(10^{-8}\) BTC (1 satoshi), and no more bitcoins will be created. The total supply asymptotically approaches 21,000,000 BTC.

### 4.5 Transaction Fees

If the total value of inputs exceeds the total value of outputs, the difference is the mining fee:

\[
\text{fee} = \sum \text{inputs} - \sum \text{outputs}
\]

Miners select transactions with the highest fee-per-byte (or fee-per-vbyte for SegWit) to maximize revenue. Users set fees to incentivize timely inclusion.

### 4.6 Mempool

The mempool (memory pool) is a local data structure on each node containing unconfirmed transactions. Transactions propagate through the network and enter each node's mempool upon validation. Miners select transactions from their mempool when constructing a candidate block.

**Mempool Policy.** Nodes may set their own policies:
- Minimum relay fee (default: 1 satoshi/vbyte)
- Maximum mempool size (default: 300 MB)
- Orphan transaction pool for transactions whose parent is unknown

**Fee Market.** When demand for block space exceeds capacity, a fee auction emerges. Users pay more for priority inclusion. During high congestion (e.g., 2017 bull run), fees exceeded $50 per transaction.

### 4.7 Wallet Types

**Full Node Wallet.** Downloads and validates every block and transaction. Provides maximum security and trustlessness but requires significant storage (>500 GB) and bandwidth.

**SPV (Simplified Payment Verification) Wallet.** Downloads only block headers (80 bytes each). To verify a transaction, the SPV client requests a Merkle proof from a full node. SPV wallets are lightweight but trust full nodes for transaction data, enabling a form of privacy compromise.

**Hardware Wallet.** A specialized device that stores private keys offline. Signs transactions without exposing the private key to the internet-connected computer. Examples: Ledger, Trezor, Coldcard.

**Hot Wallet.** A wallet whose private keys are stored on an internet-connected device. Convenient for frequent transactions but vulnerable to malware and remote compromise.

**Cold Wallet.** A wallet whose private keys are stored offline. Examples: paper wallet, hardware wallet, air-gapped computer. Used for long-term storage.

## Examples

### Example 4.1: P2PKH Transaction

Input UTXO (previous output): value = 1.0 BTC, scriptPubKey = `OP_DUP OP_HASH160 <a4b5c6...> OP_EQUALVERIFY OP_CHECKSIG`

Spending transaction:

```
Input:
  prev_tx:     a1b2c3... (previous transaction hash)
  output_idx:  0
  scriptSig:   <30450221... (DER signature)> <04a1b2... (public key)>
  sequence:    0xFFFFFFFF

Output 0:
  value:       0.4 BTC
  scriptPubKey: OP_DUP OP_HASH160 <d4e5f6...> OP_EQUALVERIFY OP_CHECKSIG

Output 1:
  value:       0.5999 BTC (change minus fee)
  scriptPubKey: OP_DUP OP_HASH160 <g7h8i9...> OP_EQUALVERIFY OP_CHECKSIG
```

Fee: 1.0 - (0.4 + 0.5999) = 0.0001 BTC (10,000 satoshis).

### Example 4.2: Block Hash Validation

Block 700,000 header (partial):
- Version: 0x20000000
- prev_block: 0x00000000000000000005a2b6...
- merkle_root: 0x12a5a1d0...
- timestamp: 0x614b0c57
- bits: 0x170f3d3c
- nonce: 0x259ce3e7

The hash is SHA-256(SHA-256(header)). The result starts with 18 leading zero bytes, which is below the target implied by the bits field.

## Summary

Bitcoin introduced the UTXO model, a stack-based script language, a PoW-based mining process with scheduled block rewards and halving, and a permissionless peer-to-peer network. Transactions consume and create UTXOs. Security derives from the linked-hash chain, the computational cost of mining, and economic incentives. The system limits throughput (~7 tx/s) by design, prioritizing decentralization and security over performance.

## Exercises

### Review Questions

1. Explain the difference between a UTXO and an account balance. What are the advantages of the UTXO model?
2. Describe the steps a miner takes to construct a candidate block and begin mining.
3. What is the coinbase transaction? How does it differ from regular transactions?
4. Calculate the total BTC supply after halvings 5 through 8. At what block height does the supply reach 99.9% of 21 million?
5. How does the mempool enforce a fee market? What happens when the mempool is empty?

### Application Problems

6. A user creates a transaction spending a 2 BTC UTXO to send 1.5 BTC. The fee is 0.001 BTC. What is the change amount? Construct the transaction outputs.
7. A miner's block reward is 3.125 BTC. The block contains 2,500 transactions with total fees of 0.5 BTC. What is the miner's total revenue for this block? What is the average fee per transaction?
8. Given `bits = 0x1c0fffff`, decode the target. What is the mining difficulty?

### Challenge Problem

9. **(Coin Selection Algorithm).** You have UTXOs with values [0.1, 0.3, 0.5, 0.7, 1.0, 2.0] BTC. Implement a greedy coin-selection algorithm that minimizes the number of inputs while making a payment of 1.2 BTC with a fee of 0.001 BTC. Then implement a privacy-optimized algorithm that avoids linking multiple inputs from the same address. Analyze the trade-offs between the two approaches.
