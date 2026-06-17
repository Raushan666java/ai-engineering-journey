# Chapter 7: Decentralized Applications (dApps)

---

## Learning Objectives

- Define the architecture of a Decentralized Application (dApp)
- Explain the role of a "Provider" and a "Wallet" in the user experience
- Describe the front-end interaction with smart contracts using `ethers.js` or `web3.js`
- Understand decentralized storage solutions like IPFS
- Contrast the dApp architecture with traditional client-server models

---

## Theory

### The dApp Stack
A traditional app uses: `Frontend -> API -> Centralized Database`.
A dApp uses: `Frontend -> Provider/Wallet -> Blockchain (Smart Contracts)`.
Key components:
1. **Frontend:** React, Vue, or Angular.
2. **Wallet (e.g., MetaMask):** Manages private keys and signs transactions.
3. **Provider (e.g., Infura, Alchemy):** An interface to talk to the blockchain nodes.
4. **Decentralized Storage:** Since storing files on a blockchain is too expensive, metadata and assets are stored on systems like **IPFS (InterPlanetary File System)**.

![dApp Architecture](../assets/images/diagrams/blockchain/ch07-dapps.png)

### Web3 Libraries
Libraries like `ethers.js` or `web3.js` allow the frontend to:
- Connect to a wallet.
- Read data from smart contracts (Free).
- Send transactions to smart contracts (Requires Gas).

### Decentralized Identifiers (DID)
In dApps, the user's "Login" is their wallet address. This is the foundation of **Self-Sovereign Identity (SSI)**. The user owns their data and their session.

---

## Examples

### Example 1: Reading Contract State
```javascript
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contractAddress = "0x...";
const abi = [...]; // Contract interface
const contract = new ethers.Contract(contractAddress, abi, provider);

async function getBalance() {
    const balance = await contract.balanceOf("0xAliceAddress");
    console.log("Balance:", ethers.utils.formatEther(balance));
}
```
This example shows how a frontend can fetch a user's token balance without needing a centralized backend.

### Example 2: Uploading to IPFS
1. A user uploads an image.
2. The image is hashed. The hash (CID) looks like `Qm...`.
3. The CID is stored in a smart contract.
4. Anyone with the CID can retrieve the image from the IPFS network.
This ensures that the image is **content-addressed**, meaning the link never changes as long as the content is the same.

---

## Summary

- dApps remove central points of control and failure by utilizing blockchain and P2P storage.
- The wallet is the gateway for user authentication and transaction signing.
- Web3 libraries provide the necessary bridge between standard web technologies and blockchain protocols.
- IPFS is a critical component for storing large-scale data that cannot fit on-chain.
- The shift from Web2 to Web3 is characterized by user ownership of identity and assets.

---

## Exercises

### Review Questions
1. Why is a wallet like MetaMask necessary for a dApp?
2. What is a "JSON-RPC Provider"?
3. Explain "Content Addressing" in the context of IPFS.
4. How does a dApp handle "User Sign-up"?

### Application Problems
1. Diagram the flow of data when a user buys an NFT in a dApp.
2. Compare the cost and performance of storing 1MB of data on Ethereum vs. IPFS.
3. Describe how you would implement "Access Control" in a dApp frontend using a user's wallet address.

### Challenge Problem
1. Evaluate the "User Onboarding" problem in dApps and propose a solution that maintains decentralization while improving UX for non-technical users.
