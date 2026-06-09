# Chapter 10: Hyperledger & Enterprise Blockchain

## Learning Objectives

After completing this chapter, the student will be able to:

1. Describe the Hyperledger family of frameworks and their distinguishing characteristics.
2. Explain Hyperledger Fabric's architecture: ordering service, peers, channels, chaincode, and MSP.
3. Implement a chaincode application in Go for a permissioned blockchain network.
4. Compare Hyperledger Fabric with Ethereum across key enterprise dimensions.
5. Summarize the role of R3 Corda and Quorum in the enterprise blockchain landscape.
6. Identify suitable enterprise use cases for permissioned blockchains.

## Theory

### 10.1 The Hyperledger Family

Hyperledger is an umbrella project hosted by the Linux Foundation, launched in December 2015. It hosts a collection of enterprise-grade distributed ledger frameworks and tools:

| Framework | Focus | Language | Consensus |
|-----------|-------|----------|-----------|
| **Fabric** | Modular, permissioned DLT | Go, Node.js, Java | Pluggable (Raft, PBFT) |
| **Besu** | Ethereum client (permissioned & public) | Java | PoW, PoS, IBFT2, Clique |
| **Sawtooth** | Modular, parallel transaction execution | Python, Go, Rust | PoET, PBFT, Raft |
| **Indy** | Decentralized identity | Python, Rust | RBFT |
| **Iroha** | Simple, mobile-focused DLT | C++, Java | YAC (Yet Another Consensus) |

### 10.2 Hyperledger Fabric Architecture

Fabric is the most widely adopted Hyperledger framework. It is designed for permissioned networks where all participants are identified and authorized.

**Core Components.**

| Component | Role |
|-----------|------|
| **Ordering Service** | Orders transactions into blocks; does not execute transactions |
| **Peers** | Maintain ledger, execute chaincode, endorse transactions |
| **Channels** | Private sub-networks for confidential transactions |
| **Chaincode** | Smart contract logic (Go, Node.js, Java) |
| **MSP (Membership Service Provider)** | Manages identities and access control |
| **CouchDB** | State database for rich queries |

**Transaction Flow.** Fabric's execute-order-validate architecture differs fundamentally from Ethereum's order-execute model:

1. **Propose (Execute).** The client sends a transaction proposal to endorsing peers. Each endorsing peer simulates the chaincode and returns a read-write set (RWS) and endorsement signature.
2. **Order.** The client submits the endorsed RWS to the ordering service. The ordering service places transactions into blocks (no execution). Raft is the default ordering mechanism.
3. **Validate.** Ordering service delivers blocks to all peers. Each peer validates endorsements, checks for read-write conflicts (MVCC), and appends validated blocks to the ledger.
4. **Commit.** The peer commits the block and updates its state database.

This separation of execution and ordering enables Fabric to achieve higher throughput than order-execute architectures.

**Endorsement Policy.** The policy specifies which peers (or organizations) must endorse a transaction:

```
AND('Org1.member', 'Org2.member')              // Both Org1 and Org2
OR('Org1.member', 'Org2.member')               // Either Org1 or Org2
OutOf(2, 'Org1.member', 'Org2.member', 'Org3.member')  // 2 of 3
```

**Channels.** Channels provide private, isolated ledgers. Each channel has its own chaincode instances and membership. Transactions on one channel are invisible to participants on other channels.

**Private Data Collections (PDC).** For cases where only a subset of channel members should see certain data, PDCs store private data in side databases with a hash on the public ledger. The hash provides proof of existence without revealing data.

### 10.3 Chaincode

Chaincode is Fabric's equivalent of a smart contract. It runs in a separate Docker container — isolated from the peer process — and communicates via gRPC.

**Chaincode Lifecycle.**

1. **Package:** Package chaincode source code.
2. **Install:** Install on endorsing peers.
3. **Approve:** Organization-level approval (Fabric 2.x).
4. **Commit:** Commit chaincode definition to the channel.
5. **Invoke:** Call chaincode functions.

**Go Chaincode Example.**

```go
package main

import (
    "encoding/json"
    "fmt"
    "github.com/hyperledger/fabric-contract-api-go/contractapi"
)

type Asset struct {
    ID    string `json:"ID"`
    Owner string `json:"Owner"`
    Value int    `json:"Value"`
}

type AssetContract struct {
    contractapi.Contract
}

func (c *AssetContract) CreateAsset(ctx contractapi.TransactionContextInterface, id, owner string, value int) error {
    existing, err := ctx.GetStub().GetState(id)
    if err != nil { return fmt.Errorf("failed to read: %v", err) }
    if existing != nil { return fmt.Errorf("asset %s already exists", id) }

    asset := Asset{ID: id, Owner: owner, Value: value}
    bytes, _ := json.Marshal(asset)
    return ctx.GetStub().PutState(id, bytes)
}

func (c *AssetContract) TransferAsset(ctx contractapi.TransactionContextInterface, id, newOwner string) error {
    bytes, err := ctx.GetStub().GetState(id)
    if err != nil { return fmt.Errorf("failed to read: %v", err) }
    if bytes == nil { return fmt.Errorf("asset %s not found", id) }

    var asset Asset
    json.Unmarshal(bytes, &asset)
    asset.Owner = newOwner
    newBytes, _ := json.Marshal(asset)
    return ctx.GetStub().PutState(id, newBytes)
}

func main() {
    cc, err := contractapi.NewChaincode(&AssetContract{})
    if err != nil { panic(err.Error()) }
    if err := cc.Start(); err != nil { panic(err.Error()) }
}
```

**Chaincode vs Solidity.**

| Dimension | Solidity (Ethereum) | Chaincode (Fabric) |
|-----------|---------------------|-------------------|
| Language | Solidity | Go, Node.js, Java |
| Execution environment | EVM (sandboxed) | Docker container |
| State model | Account-based | Key-value (JSON) |
| Consensus | Global (PoW/PoS) | Endorsement policy |
| Data privacy | Public by default | Channel / PDC |
| Turing complete | Yes (gas-limited) | Yes |
| Determinism | Intrinsic | Must be ensured by developer |

### 10.4 Membership Service Provider (MSP)

MSP manages identity and access. Each organization deploys its own MSP. Identities are based on X.509 certificates issued by a Certificate Authority (CA).

- **Root CA:** The organization's root of trust.
- **Intermediate CA:** Optional delegation for scalability.
- **Node OU (Organizational Unit):** Used in policies to distinguish admins from peers from clients.

### 10.5 Hyperledger vs Ethereum

| Criterion | Hyperledger Fabric | Ethereum |
|-----------|-------------------|----------|
| Network type | Permissioned | Permissionless (public) |
| Access control | MSP-based | None (public) |
| Consensus | Pluggable (Raft, PBFT) | PoW (legacy), PoS |
| Throughput | >1,000 tx/s | ~15 tx/s |
| Transaction finality | Immediate | Probabilistic |
| Smart contract language | Go, Node.js, Java | Solidity, Vyper |
| Data privacy | Channels, PDCs | Public by default |
| Governance | Consortium | Community |
| Deterministic execution | Developer responsibility | EVM-enforced |

### 10.6 R3 Corda

Corda (developed by R3) is a permissioned DLT platform designed for financial services. Key differences from Fabric:

- **Not a blockchain.** Corda does not batch transactions into blocks. Each transaction is independently signed and notarized.
- **Point-to-point.** Transactions occur between specific parties; not all nodes see all data.
- **States and Contracts.** The Corda model: states (facts) are consumed and created by transactions; contracts validate state transitions.
- **Notary Service.** The notary guarantees uniqueness (prevents double-spend) without seeing transaction details (via confidential identities).

### 10.7 Quorum

Quorum is an enterprise-focused fork of Go Ethereum (geth). Key features:

- **Privacy.** Private transactions via Tessera (enclave) and contract state partitioning.
- **Permissioning.** Node and account whitelisting.
- **Consensus.** Raft-based (immediate finality) or IBFT (Istanbul Byzantine Fault Tolerant).
- **Performance.** Higher throughput than public Ethereum (transaction bundling, no PoW).

### 10.8 Enterprise Use Cases

| Use Case | Why Blockchain | Example |
|----------|---------------|---------|
| Supply chain | Multi-party traceability, provenance | Food safety (IBM Food Trust) |
| Trade finance | Letter of credit, document sharing | We.Trade (Fabric-based) |
| Healthcare | Patient data sharing, consent management | Patientory |
| Identity | Self-sovereign identity, verifiable credentials | Sovrin (Hyperledger Indy) |
| Real estate | Land title registry, escrow | Propy |
| Central bank digital currency | Programmable money, wholesale settlement | Project Jasper, Project Ubin |

## Examples

### Example 10.1: Fabric Network Topology

A consortium of three organizations (Bank, Supplier, Regulator) runs:

- **Orderer:** Raft cluster of 3 orderer nodes (one per org).
- **Peers:** Bank runs 2 peers, Supplier runs 2 peers, Regulator runs 1 peer.
- **Channel:** One channel for trade finance, one channel for regulatory reporting.
- **Chaincode:** `TradeContract` installed on both channels.
- **MSP:** Each org has its own CA and MSP.
- **Endorsement Policy:** `OutOf(2, 'Bank.member', 'Supplier.member')` for trade transactions.

### Example 10.2: Channel and PDC

Channel `TradeChannel` has members: Bank, Supplier, Shipper.

A transaction records a shipment invoice:
- Public data on channel: shipment ID, status, timestamp.
- Private data collection `InvoiceCollection`: members = [Bank, Supplier]; data = invoice amount, payment terms.

The hash of the private data is written to the public ledger, allowing regulators to verify activity without seeing financial details.

## Summary

Enterprise blockchains (Hyperledger Fabric, R3 Corda, Quorum) prioritize permissioned access, performance, data privacy, and governance over the decentralized, trustless properties of public networks. Fabric's execute-order-validate architecture decouples execution from ordering for higher throughput. Channels provide data isolation, and MSPs manage identity-based access control. Enterprise use cases include supply chain, trade finance, healthcare, and identity — scenarios where multiple known parties need a shared, tamper-evident ledger without exposing data to the public.

## Exercises

### Review Questions

1. Explain the execute-order-validate transaction flow in Fabric. How does it differ from Ethereum's approach?
2. What problem do channels solve that public blockchains cannot address?
3. Compare the role of the ordering service in Fabric with the role of miners in Ethereum.
4. What is a Private Data Collection? Why would a project use PDCs instead of a separate channel?
5. List three enterprise blockchain projects. For each, state the industry and the specific problem being solved.

### Application Problems

6. Design a Fabric network for a pharmaceutical supply chain with: manufacturer, distributor, pharmacy, and regulator. Define:
   - Channel structure (how many channels, who is on each).
   - Chaincode functions (at least five).
   - Endorsement policies for each function.
   - MSP structure.
7. Write a chaincode function `queryHistory` that returns the asset transfer history for a given asset ID. Use `GetHistoryForKey` and return a JSON array of transaction records.
8. Compare the privacy guarantees of Fabric channels vs Zcash shielded transactions. Can either provide both privacy and auditability? How?

### Challenge Problem

9. **(Cross-Chain Asset Transfer).** Design a protocol for atomic asset transfer between two independent Hyperledger Fabric networks (Network A: Bank A and Bank B; Network B: Bank B and Bank C). The transfer moves an asset from Bank A to Bank C routed through Bank B. The protocol must:
   - Use Hash Time-Locked Contracts (HTLC).
   - Ensure that either the asset arrives at Bank C or it returns to Bank A.
   - Operate through a relayer node that watches both networks.
   - Complete within 24 hours.
   
   Provide the chaincode logic, the relayer algorithm, and a proof that the protocol guarantees atomicity.
