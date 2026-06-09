# Chapter 2: Cryptography for Blockchain

## Learning Objectives

After completing this chapter, the student will be able to:

1. Describe the properties of cryptographic hash functions and explain why SHA-256, Keccak-256, and RIPEMD-160 are suitable for blockchain applications.
2. Construct and verify Merkle proofs of inclusion.
3. Generate and verify ECDSA signatures over the secp256k1 curve.
4. Explain the wallet address derivation pipeline from private key to address.
5. Describe the BIP32, BIP39, and BIP44 standards for hierarchical deterministic wallets.

## Theory

### 2.1 Cryptographic Hash Functions

A cryptographic hash function \(H: \{0,1\}^* \to \{0,1\}^n\) maps an arbitrary-length input to a fixed-length output called the digest or hash. For blockchain applications, the function must satisfy the following properties.

**Preimage Resistance (One-Wayness).** Given \(y = H(x)\), it is computationally infeasible to find any \(x'\) such that \(H(x') = y\). This prevents an adversary from recovering the input from its hash. Formally, for any probabilistic polynomial-time algorithm \(\mathcal{A}\),

\[
\Pr[\mathcal{A}(1^\lambda, H, y) = x' \mid H(x') = y] \leq \text{negl}(\lambda)
\]

where \(\lambda\) is the security parameter.

**Second-Preimage Resistance.** Given \(x\), it is computationally infeasible to find \(x' \neq x\) such that \(H(x') = H(x)\).

**Collision Resistance.** It is computationally infeasible to find any pair \((x, x')\) with \(x \neq x'\) such that \(H(x) = H(x')\). Collision resistance implies second-preimage resistance. The birthday bound states that after approximately \(2^{n/2}\) queries, a collision is found with probability \(1/2\).

**Avalanche Effect.** A single-bit change in the input changes approximately half the output bits on average. This ensures that similar inputs produce uncorrelated digests.

#### SHA-256

SHA-256 (Secure Hash Algorithm, 256-bit output) is defined in FIPS PUB 180-4. It processes messages in 512-bit blocks through 64 rounds of compression. Bitcoin uses double-SHA-256 (Hash256): \(H(x) = \text{SHA-256}(\text{SHA-256}(x))\) to mitigate length-extension attacks.

#### Keccak-256

Keccak-256 is the SHA-3 finalist selected by NIST (FIPS PUB 202). It uses a sponge construction with a 1600-bit state. Ethereum uses Keccak-256 extensively, notably for address computation, transaction hashing, and state trie labels. The Ethereum implementation predates minor parameter changes NIST made during standardization, so Ethereum's Keccak-256 is technically distinct from SHA-3.

#### RIPEMD-160

RIPEMD-160 produces a 160-bit digest. Bitcoin uses RIPEMD-160 (wrapped in a SHA-256 hash) to produce the 160-bit portion of a pay-to-public-key-hash (P2PKH) address. The shorter digest yields shorter addresses at 160 bits of collision resistance, which is considered sufficient for a 128-bit security level.

### 2.2 Merkle Trees

A Merkle tree is a binary tree in which each leaf node contains the hash of a data block (a transaction) and each internal node contains the hash of its concatenated children.

**Structure.** Given transactions \(T_1, T_2, \dots, T_n\), define leaf hashes:

\[
L_i = H(T_i)
\]

For internal nodes at level \(j\):

\[
N_{j,k} = H(N_{j-1,2k} \parallel N_{j-1,2k+1})
\]

where \(\parallel\) denotes concatenation. The root \(R = N_{\lceil \log_2 n \rceil, 0}\) is the Merkle root, stored in the block header.

**Merkle Proof of Inclusion.** To prove that transaction \(T_i\) is in the tree, the prover supplies the sibling hashes along the path from \(L_i\) to the root. The verifier recomputes the root by hashing upward and checks against the stored root. The proof size is \(\lceil \log_2 n \rceil\) hashes.

**Formal Definition — Merkle Proof.** Let \(\Pi_i = \{h_1, h_2, \dots, h_{\ell}\}\) be the ordered set of sibling hashes on the path from leaf \(i\) to the root. The verifier computes:

\[
r_0 = H(T_i)
\]
\[
r_j = \begin{cases}
H(r_{j-1} \parallel h_j) & \text{if } h_j \text{ is the right sibling} \\
H(h_j \parallel r_{j-1}) & \text{if } h_j \text{ is the left sibling}
\end{cases}
\]

for \(j = 1, \dots, \ell\). Accept if \(r_\ell = R\).

### 2.3 Digital Signatures

Digital signatures provide authentication, non-repudiation, and integrity. A signature scheme is a triple of probabilistic polynomial-time algorithms: (KeyGen, Sign, Verify).

#### ECDSA

The Elliptic Curve Digital Signature Algorithm (ECDSA) is instantiated over the secp256k1 curve in both Bitcoin and Ethereum.

**secp256k1 Parameters.** The curve is defined over \(\mathbb{F}_p\) where

\[
p = 2^{256} - 2^{32} - 2^9 - 2^8 - 2^7 - 2^6 - 2^4 - 1
\]

The base point \(G\) has prime order:

\[
n = \text{FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE BAAEDCE6 AF48A03B BFD25E8C D0364141}
\]

**Key Generation.** Choose private key \(d \in_R [1, n-1]\). Compute public key \(Q = dG\) via elliptic curve scalar multiplication.

**Signing (message \(m\)).**
1. Compute \(e = H(m)\).
2. Choose \(k \in_R [1, n-1]\) (ephemeral nonce — must be unique per signature).
3. Compute \(R = kG\). Let \(r = R_x \mod n\); if \(r = 0\), retry with new \(k\).
4. Compute \(s = k^{-1}(e + dr) \mod n\); if \(s = 0\), retry.
5. Output \((r, s)\).

**Verification (signature \((r, s)\), message \(m\), public key \(Q\)).**
1. Check \(r, s \in [1, n-1]\).
2. Compute \(e = H(m)\).
3. Compute \(u_1 = es^{-1} \mod n\), \(u_2 = rs^{-1} \mod n\).
4. Compute \(R' = u_1 G + u_2 Q\).
5. Accept if \(R'_x \equiv r \pmod{n}\).

**Signature Structure.** An ECDSA signature is encoded as an ASN.1 DER sequence or as a fixed-size \((r, s)\) pair (raw format). Ethereum additionally encodes the recovery ID \(v \in \{27, 28\}\) to enable public-key recovery from the signature alone.

**Public Key Recovery.** Given \((r, s, v)\), the verifier can recover the public key without prior knowledge. This is essential for Ethereum transactions: the sender's address is derived from the recovered public key rather than being explicitly included, saving 32 bytes per transaction.

#### Schnorr Signatures

The BIP-340 Schnorr signature standard was activated on Bitcoin in November 2021 via the Taproot soft fork. Schnorr offers:

- **Linearity:** multiple signatures can be aggregated into a single signature (multi-signature efficiency).
- **Provable security:** Schnorr has a security reduction to the discrete-log problem in the random oracle model.
- **Smaller size:** 64 bytes vs ECDSA's 70–72 bytes (DER).

A Schnorr signature \((R, s)\) satisfies \(sG = R + H(R \parallel Q \parallel m)Q\) and is verified by a single linear equation.

### 2.4 Wallet Address Derivation

**Bitcoin Address (P2PKH).**
1. Compute \(Q = dG\) (public key, 65 bytes: 0x04 + x + y).
2. Compute \(h_1 = \text{SHA-256}(Q)\).
3. Compute \(h_2 = \text{RIPEMD-160}(h_1)\).
4. Prepend version byte (0x00 for mainnet) \(\rightarrow V\).
5. Compute checksum \(c = \text{SHA-256}(\text{SHA-256}(V))_{0:4}\).
6. Encode \(V \parallel c\) in Base58Check.

**Ethereum Address.**
1. Compute \(Q = dG\) (uncompressed public key, 65 bytes).
2. Compute \(h = \text{Keccak-256}(Q_{1:})\) (hash of x and y, dropping the 0x04 prefix).
3. Take the last 20 bytes: \(h_{-20:}\).
4. Format as 0x-prefixed hex: 0x...

### 2.5 Hierarchical Deterministic Wallets (BIP32/39/44)

**BIP32 — Hierarchical Deterministic Wallets.** A single master seed generates an entire tree of key pairs. Each node in the tree can produce child keys:

- **Normal derivation:** \(C_{child} = C_{parent} + H(C_{parent} \parallel i)\) (non-hardened, allows public derivation without private key).
- **Hardened derivation:** \(C_{child} = C_{parent} + H(P_{parent} \parallel i)\) (requires the parent private key).

The extended public key (xpub) can derive child public keys without the private key, enabling watch-only wallets and audit functionality.

**BIP39 — Mnemonic Phrases.** A 128–256 bit entropy source is mapped to 12–24 words from a 2048-word dictionary via:

1. Compute checksum: \(c = \text{SHA-256}(entropy)_{0:n/32}\) bits.
2. Concatenate: \(entropy \parallel c\).
3. Split into 11-bit groups; each group indexes a word in the dictionary.

The mnemonic phrase is human-readable, can be written on paper, and is convertible back to the 512-bit master seed via PBKDF2 with 2048 rounds.

**BIP44 — Purpose Hierarchy.** BIP44 standardizes the key path:

\[
m / 44' / coin' / account' / change / address_index
\]

where:
- \(44'\) = BIP44 purpose (hardened)
- \(coin'\) = 0' for Bitcoin, 60' for Ethereum
- \(account'\) = user-defined account number
- \(change\) = 0 for external (receiving), 1 for internal (change)
- \(address\_index\) = sequential address counter

## Examples

### Example 2.1: Merkle Proof in Bitcoin

Consider a block with four transactions \(T_1, T_2, T_3, T_4\). The Merkle tree:

```
         R = H(N1 || N2)
        /                \
   N1 = H(L1 || L2)    N2 = H(L3 || L4)
      /      \            /       \
   L1 = H(T1) L2 = H(T2) L3 = H(T3) L4 = H(T4)
```

To prove \(T_2\) is in the block, the prover supplies \(\{L_1, N_2\}\). The verifier computes:

1. \(L_2 = H(T_2)\)
2. \(N'_1 = H(L_1 \parallel L_2)\)
3. \(R' = H(N'_1 \parallel N_2)\)
4. Check \(R' = R\).

Total proof size: 2 hashes (64 bytes). For a block with \(n\) transactions, the proof is \(\lceil \log_2 n \rceil\) hashes.

### Example 2.2: Ethereum Address Derivation

Private key \(d\): 0xb5d1874341cd1f3f8b5e1f8b2a9a1c3d...

1. Public key \(Q = dG\): 0x0473a5e3c9b5c0e2a8d4f1a6b3c7d9e0...
2. Keccak-256 hash: 0x2a5c3f8e1d9b4a7c6f3e0d2b1c8a9f4e5d6c7b8a9f0e1d2c3b4a5f6e7d8c9b0
3. Address (last 20 bytes): 0x2a5c3f8e1d9b4a7c6f3e0d2b1c8a9f4e5d6c7b8a

### Example 2.3: BIP39 Mnemonic and BIP44 Path

Entropy: 128 bits → 12-word mnemonic:

```
tray ugly balance hill weather industry lamp
lamp cradle toast donkey fantasy
```

Master seed (via PBKDF2): 64-byte binary.

Ethereum account path: \(m/44'/60'/0'/0/0\) yields the first receiving address.

## Summary

Cryptography is the foundation of blockchain security. Hash functions provide data integrity and efficient proofs of inclusion via Merkle trees. ECDSA (and Schnorr) signatures authenticate transactions and enable public-key recovery. Hierarchical deterministic wallets (BIP32/39/44) allow secure key management with human-readable mnemonics. Together, these primitives make decentralized, trustless consensus possible.

## Exercises

### Review Questions

1. Define preimage resistance. Why is it essential for blockchain transactions?
2. How many hashes are needed in a Merkle proof for a block of 1,024 transactions? Derive the formula.
3. Why must the nonce \(k\) in ECDSA never be reused? What are the consequences of nonce reuse?
4. Explain the difference between hardened and normal key derivation in BIP32. When would a wallet use each?
5. What is the purpose of the checksum in a Base58Check-encoded Bitcoin address?

### Application Problems

6. Given a private key \(d\) and a Schnorr signature scheme, derive the equation that the verifier checks. Show that a valid signature satisfies the equation.
7. Your wallet generated a 12-word BIP39 mnemonic. Calculate the total entropy (in bits) and explain why 12 words provides approximately 128 bits of security even though the dictionary has only 2,048 words.
8. An attacker recovers two ECDSA signatures that share the same \(k\). Show how the attacker extracts the private key \(d\).

### Challenge Problem

9. **(Merkle Mountain Range).** A Merkle Mountain Range (MMR) is an append-only Merkle tree that supports efficient proofs of inclusion for the latest state without requiring a full rebuild. Design an MMR and prove that:
   - The number of peaks is at most \(\lceil \log_2 n \rceil\).
   - A proof of inclusion for any element is \(O(\log n)\) hashes.
   - The root hash is computed from the peaks.
   
   Implement your design in pseudocode.
