# Chapter 13: Web3 & Future

## Learning Objectives

After completing this chapter, the student will be able to:

1. Articulate the Web3 vision: decentralized web, sovereign identity, and data ownership.
2. Design and deploy a DAO with token-based or quadratic voting governance.
3. Explain the W3C DID standard and verifiable credentials.
4. Compare decentralized storage systems (IPFS, Filecoin, Arweave, Storj).
5. Analyze the regulatory landscape for cryptocurrencies, DeFi, and CBDCs.
6. Describe blockchain interoperability protocols (bridges, IBC, Polkadot, Cosmos, Chainlink CCIP).
7. Evaluate the impact of quantum computing on blockchain cryptography and proposed countermeasures.

## Theory

### 13.1 The Web3 Vision

The term Web3, coined by Gavin Wood (Ethereum co-founder, Polkadot founder), describes a decentralized internet stack where users — not corporations — own their data, identity, and assets.

**Evolution of the Web.**

| Era | Name | Characteristic | Control |
|-----|------|---------------|---------|
| Web 1.0 | Static Web | Read-only, HTML pages | Content publishers |
| Web 2.0 | Social Web | Read-write, user-generated content, platforms | Centralized platforms |
| Web 3.0 | Decentralized Web | Read-write-own, blockchain-based, trustless | Users |

**Core Principles.**

- **Sovereign identity:** Users control their digital identity via DIDs and private keys, not email/password logins.
- **Data ownership:** Personal data is stored in user-controlled data stores, not corporate databases.
- **Tokenization:** Any asset (art, real estate, reputation) can be tokenized and traded permissionlessly.
- **Censorship resistance:** No single entity can block transactions, freeze assets, or remove content.
- **Composability:** Protocols and applications can be combined programmatically (money legos).

### 13.2 DAOs — Decentralized Autonomous Organizations

A DAO is an organization governed by smart contracts. Members vote on proposals (funding, protocol upgrades, treasury allocation) according to rules encoded in the contracts.

**Governance Mechanisms.**

| Mechanism | Description | Example |
|-----------|-------------|---------|
| Token-based voting | Voting weight proportional to token holdings | Compound, Uniswap |
| Quadratic voting | Cost of votes grows quadratically: cost = n² | Gitcoin Grants |
| Conviction voting | Vote weight increases over time the longer it's committed | 1Hive Gardens |
| Delegation | Token holders delegate voting power to representatives | MakerDAO |

**Quadratic Voting Formula.** The cost to cast \(n\) votes on a single issue:

\[
\text{cost} = n^2 \times \text{base\_cost}
\]

This amplifies the influence of small voters and requires large voters to pay disproportionately for influence.

**Tooling.**

- **Snapshot:** Off-chain voting (gasless; votes signed off-chain and aggregated).
- **Aragon:** Framework for DAO creation with token voting, fundraising, and finance modules.
- **DAOhaus:** No-code DAO creation on Moloch v2 contracts.
- **Moloch:** Minimal DAO framework with ragequit (members can leave with a proportional share of treasury).

**Ragequit.** A key innovation from Moloch DAO. If a member disagrees with a proposal, they can exit (ragequit) and burn their shares in exchange for a proportional share of the treasury. This protects minority stakeholders from majority decisions.

**Treasury Management.** DAOs hold treasury assets (ETH, stablecoins, tokens) that require active management. Multi-signature wallets (Gnosis Safe) with signers elected by the DAO provide operational security.

### 13.3 Decentralized Identity

**DID (Decentralized Identifier, W3C Standard).** A DID is a globally unique identifier that does not require a central registry:

```
did:ethr:0xb0c...3a1
did:key:z6Mk...9zX
```

**DID Document.** A JSON-LD document containing:
- Verification methods (public keys)
- Service endpoints
- Authentication and authorization relationships

```json
{
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:ethr:0xb0c...3a1",
    "verificationMethod": [{
        "id": "#key-1",
        "type": "EcdsaSecp256k1VerificationKey2019",
        "controller": "did:ethr:0xb0c...3a1",
        "publicKeyHex": "04..."
    }],
    "authentication": ["#key-1"]
}
```

**Verifiable Credentials (VCs).** A VC is a tamper-evident statement from an issuer about a subject. The issuer signs the credential; the holder stores it in a wallet; the verifier checks the signature:

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "id": "urn:uuid:123abc",
    "type": ["VerifiableCredential", "UniversityDegreeCredential"],
    "issuer": "did:example:issuer123",
    "issuanceDate": "2024-01-01",
    "credentialSubject": {
        "id": "did:example:subject456",
        "degree": { "type": "BSc Computer Science" }
    },
    "proof": { ... }
}
```

**ENS (Ethereum Name Service).** ENS maps human-readable names (.eth domains) to Ethereum addresses, content hashes, and metadata. ENS is governed by a DAO (ENS DAO) and uses an on-chain registry:

```solidity
function resolver(bytes32 node) external view returns (address);
function owner(bytes32 node) external view returns (address);
```

### 13.4 Decentralized Storage

**IPFS (InterPlanetary File System).** Content-addressed, peer-to-peer storage. Files are identified by their cryptographic hash (CID). Nodes cache and share content. IPFS alone provides no persistence guarantees.

**Filecoin.** Adds an incentive layer to IPFS. Storage providers commit to storing data and submit proofs (proof-of-replication, proof-of-spacetime) to the Filecoin blockchain. Clients pay in FIL tokens.

**Arweave.** A permanent storage network with a one-time fee. Uses a novel block structure (blockweave) and the Succinct Proofs of Random Access (SPoRA) consensus. The endowment model ensures data persists for at least 200 years.

**Storj.** Encrypted, decentralized object storage with a satellite-node architecture. Clients upload encrypted files, which are sharded across storage nodes. Payments are in STORJ tokens.

**Comparison.**

| Platform | Persistence | Cost Model | Encryption | Throughput |
|----------|-------------|------------|------------|------------|
| IPFS (alone) | Best-effort | Free (pinning services charge) | No (user-managed) | Variable |
| Filecoin | Incentivized | Storage deal per GB/month | No (user-managed) | Moderate |
| Arweave | Permanent (200yr) | One-time fee per block (~$5/MB) | No (user-managed) | Low |
| Storj | Guaranteed | ~$4/TB/month | Built-in | High |

### 13.5 Crypto Regulation

Regulatory frameworks vary significantly across jurisdictions:

**United States.**
- SEC treats many tokens as securities under the Howey Test.
- CFTC regulates Bitcoin and Ethereum as commodities.
- FinCEN enforces AML/KYC requirements on exchanges and custodial wallets.
- State-level regulation: NY BitLicense, Wyoming DAO LLC law.

**European Union.**
- MiCA (Markets in Crypto-Assets Regulation), effective 2024.
- Three-tier classification: Asset-Referenced Tokens (ART), Electronic Money Tokens (EMT), and Utility Tokens.
- Stablecoin issuers must hold reserves at a 1:1 ratio.

**Asia.**
- Singapore: Payment Services Act; licenses for DPT (Digital Payment Token) services.
- Japan: Cryptocurrency is legal property under the Payment Services Act; exchanges must register with FSA.
- China: Total ban on cryptocurrency trading and mining (2021); actively developing digital yuan (e-CNY).
- South Korea: Real-name accounts required; FIU registration for exchanges.

**CBDCs (Central Bank Digital Currencies).** Central banks worldwide are exploring digital fiat currencies:

| Country | CBDC Name | Status | Technology |
|---------|-----------|--------|------------|
| China | e-CNY | Launched (pilot) | Centralized |
| Nigeria | eNaira | Launched | Centralized (Hyperledger Fabric) |
| Bahamas | Sand Dollar | Launched | Centralized |
| EU | Digital Euro | In development | TBD |
| US | FedNow | Real-time payments (not blockchain) | Centralized |
| India | Digital Rupee | Pilot | Centralized |

### 13.6 Blockchain Interoperability

Interoperability enables value and data transfer across distinct blockchain networks.

**Bridges.** A bridge locks assets on the source chain and mints equivalent assets on the destination chain.

- **Trusted bridge (Wrapped BTC):** A custodian holds BTC and mints WBTC on Ethereum. Trust assumption: custodian is honest.
- **Light-client bridge:** The destination chain runs a light client of the source chain, verifying consensus proofs. Trust-minimized but complex.
- **Liquidity network bridge:** Uses liquidity providers on both chains to facilitate swaps (e.g., cBridge, Hop Protocol).

**Bridge Security.** Bridges are the most attacked category in DeFi (Ronin: $620M, Wormhole: $326M, Nomad: $190M). Attacks exploit:
- Validator key compromise (Ronin).
- Smart contract vulnerabilities (Wormhole).
- Signature verification bugs (Nomad).

**IBC (Inter-Blockchain Communication, Cosmos).** IBC is a standardized protocol for communication between independent blockchains (zones) connected via the Cosmos Hub:

1. **Connection handshake:** Two chains establish a connection via a four-way handshake.
2. **Channel creation:** A unidirectional channel is opened for packet transport.
3. **Packet relaying:** Relayers move packets between chains, with light-client verification on both sides.
4. **Acknowledgment:** The destination chain sends an acknowledgment back; the source chain releases locked funds.

**Polkadot.** Uses a relay chain architecture:
- **Relay chain:** The main chain providing security, consensus, and cross-chain communication.
- **Parachains:** Independent blockchains that connect to the relay chain.
- **XCMP (Cross-Chain Message Passing):** Parachain-to-parachain communication via the relay chain's consensus.

**Cosmos.** Uses a hub-and-zone architecture:
- **Hub:** A blockchain that connects multiple zones via IBC.
- **Zone:** An independent blockchain with its own validators.
- **IBC:** Standardized communication protocol (Tendermint-based light clients).

**Chainlink CCIP (Cross-Chain Interoperability Protocol).** A messaging protocol that connects multiple chains via a decentralized oracle network. CCIP includes:
- **Active Risk Management (ARM):** A separate network of nodes that monitors for anomalous activity and can pause message delivery.
- **Programmable token transfers:** Transfer tokens AND call a function on the target chain in a single transaction.

### 13.7 Quantum Resistance

Quantum computers threaten blockchain cryptography:

- **Shor's algorithm:** Factors integers and computes discrete logs in polynomial time. Breaks ECDSA (secp256k1) and RSA.
- **Grover's algorithm:** Provides quadratic speedup for unstructured search. Reduces the effective security of SHA-256 from 256 bits to 128 bits.

**Timeline.** A fault-tolerant quantum computer capable of breaking ECDSA requires approximately 10 million physical qubits (current state-of-the-art: ~1,000 logical qubits). Most estimates place this threat at 10–20 years.

**Post-Quantum Cryptography.**
- **Lattice-based (CRYSTALS-Kyber, Dilithium):** Key exchange and signatures based on the Learning With Errors (LWE) problem.
- **Hash-based (XMSS, SPHINCS+):** Signatures based on hash function security (minimal assumptions).
- **Code-based (Classic McEliece):** Encryption based on syndrome decoding.

**Blockchain Adaptation Strategy.**

1. **Hybrid addresses:** Transition to addresses derived from both ECDSA and post-quantum public keys.
2. **Quantum-resistant signatures:** Upgrade signature schemes to Dilithium or SPHINCS+.
3. **Quantum-resistant hash functions:** Replace SHA-256/Keccak-256 with wider-output hash functions (SHAKE-512) to maintain security against Grover's algorithm.

### 13.8 Enterprise Adoption Trends

Enterprise blockchain adoption in 2025–2026 focuses on:

- **Supply chain traceability:** Provenance tracking for food safety, conflict minerals, and carbon credits.
- **Tokenized assets:** Real estate tokenization, private credit, and security token offerings (STOs).
- **Central bank digital currencies:** Wholesale CBDCs for interbank settlement; retail CBDCs for digital cash.
- **Decentralized identity:** Verifiable credentials for employee onboarding, academic credentials, and KYC.
- **Sustainability:** Blockchain-based carbon credit registries and renewable energy certificate trading.

## Examples

### Example 13.1: DAO Proposal

A Uniswap DAO proposal to deploy on a new L2:

1. **Temperature check:** Off-chain poll on the governance forum.
2. **Snapshot vote:** Off-chain vote with UNI tokens.
3. **On-chain proposal:** If the Snapshot vote passes, anyone can submit an on-chain proposal via the Governor contract.
4. **Voting period:** 3 days for UNI holders to vote.
5. **Timelock:** 2-day delay before execution.
6. **Execution:** The timelock contract calls the L2 bridge contract to deploy.

### Example 13.2: IBC Packet Flow

Chain A (Cosmos Zone) → Chain B (Cosmos Zone) sending 100 ATOM:

1. **Packet commitment:** Chain A escrows 100 ATOM, creates an IBC packet with the denomination, amount, and Chain B recipient.
2. **Relay:** A relayer observes the commitment on Chain A, constructs a proof (Merkle proof of the packet commitment), and submits it to Chain B.
3. **Verification:** Chain B's light client verifies Chain A's consensus proof and the Merkle proof. Chain B mints 100 ATOM (represented as ibc/...).
4. **Acknowledgment:** Chain B sends an ack packet; Chain A marks the escrow as completed.

## Summary

Web3 envisions a decentralized internet where users own their data, identity, and assets. DAOs provide on-chain governance with token-based, quadratic, or conviction voting mechanisms. Decentralized identity standards (DIDs, VCs, ENS) give users portable, self-sovereign credentials. Decentralized storage systems (IPFS, Filecoin, Arweave) offer varying trade-offs between persistence, cost, and throughput. Crypto regulation is diverging across jurisdictions, with MiCA (EU) providing the most comprehensive framework. Interoperability protocols (IBC, Polkadot XCMP, Chainlink CCIP) are connecting previously isolated blockchain ecosystems. Quantum resistance remains a long-term concern; lattice-based cryptographic standards (CRYSTALS-Kyber, Dilithium) are being standardized as post-quantum replacements.

## Exercises

### Review Questions

1. State the three eras of the web. How does Web3 differ from Web 2.0 in terms of data ownership?
2. What problem does the ragequit mechanism solve in DAO governance? Why is it considered a minority protection?
3. Describe the W3C Verifiable Credentials data model. Who are the three parties in a VC exchange?
4. Compare Arweave's permanent storage model with Filecoin's incentivized model. What trade-offs exist?
5. Why are blockchain bridges frequently targeted by attackers? What security improvements do IBC and CCIP introduce?

### Application Problems

6. Design a DAO for a community-controlled protocol treasury. Specify:
   - The quorum requirement (minimum voting participation).
   - The proposal threshold (minimum tokens to create a proposal).
   - The voting period and timelock duration.
   - A quadratic voting cost function.
   - The ragequit mechanism.
   
   Explain how each parameter affects security and participation.

7. Create a DID document for an Ethereum account and include:
   - The `did:ethr` method.
   - Two verification methods (secp256k1 and Ed25519).
   - A service endpoint for a decentralized exchange.
   - A `capabilityDelegation` relationship.

8. A user wants to store 1 GB of personal files permanently. Compare the cost and trust assumptions of storing on Arweave, Filecoin, IPFS (with Pinata), and Storj. Which would you recommend and why?

### Challenge Problem

9. **(Cross-Chain Atomic Swap via HTLC).** Design a protocol for atomic swap of 10 ETH on Ethereum for 1,000 MATIC on Polygon using Hash Time-Locked Contracts. Your protocol must:
   - Use no third-party intermediary.
   - Guarantee atomicity: either both transfers succeed or both fail.
   - Complete within 24 hours.
   - Handle the case where one chain finalizes faster than the other.
   
   Provide:
   - The smart contract logic for Ethereum (solidity).
   - The smart contract logic for Polygon (solidity).
   - The off-chain coordinator algorithm.
   - A proof that the protocol satisfies atomicity under the assumption that both blockchains are live and the hash function is collision-resistant.
   
   Discuss how this design generalizes to an automated market maker for cross-chain swaps.
