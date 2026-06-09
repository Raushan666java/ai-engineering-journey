# Chapter 7: DApp Development

## Learning Objectives

After completing this chapter, the student will be able to:

1. Describe the Web3 development stack and the role of each component.
2. Connect to Ethereum nodes using ethers.js and interact with smart contracts.
3. Integrate MetaMask into a web application using the EIP-1193 provider.
4. Deploy and manage smart contracts using Hardhat.
5. Write and run automated tests for smart contracts using Mocha, Chai, and Hardhat.
6. Architect a full-stack DApp with a React frontend, ethers.js, and deployed contracts.

## Theory

### 7.1 The Web3 Development Stack

A decentralized application (DApp) has three architectural layers:

1. **Smart Contracts:** Deployed on-chain business logic (Solidity, Vyper).
2. **Blockchain Node:** An Ethereum client that exposes JSON-RPC endpoints (Geth, Erigon, Infura, Alchemy).
3. **Frontend:** A web or mobile application that connects to the node via a provider library (ethers.js, web3.js).

Unlike traditional web applications, the backend logic (smart contracts) runs on a decentralized virtual machine. The frontend connects to the blockchain rather than a centralized API server.

### 7.2 Provider and Signer

**Provider.** An abstraction of a connection to the Ethereum network. Providers are read-only — they can query state but cannot send transactions:

```javascript
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_API_KEY");
const blockNumber = await provider.getBlockNumber();
const balance = await provider.getBalance("0x...");
```

Common providers:
- `JsonRpcProvider` — connects to any JSON-RPC endpoint.
- `WebSocketProvider` — subscribes to events via WebSocket.
- `AlchemyProvider` / `InfuraProvider` — convenience wrappers.

**Signer.** An abstraction that can sign transactions. A Signer can send transactions because it has access to a private key (or a wallet interface):

```javascript
const privateKey = "0x...";
const signer = new ethers.Wallet(privateKey, provider);

const tx = await signer.sendTransaction({
    to: "0x...",
    value: ethers.parseEther("1.0")
});
```

**Contract Object.** A Contract combines a Provider or Signer with an ABI and address:

```javascript
const abi = [ /* ... */ ];
const address = "0x...";
const contract = new ethers.Contract(address, abi, signer);

// Read (using provider - no gas)
const totalSupply = await contract.totalSupply();

// Write (using signer - costs gas)
const tx = await contract.transfer("0x...", ethers.parseEther("10"));
await tx.wait();
```

### 7.3 ethers.js

**BigNumber and Units.** All numeric values are represented as `bigint` (natively in modern JavaScript or via BigNumber in ethers v5):

```javascript
const amount = ethers.parseEther("1.0");     // 1000000000000000000n
const formatted = ethers.formatEther(amount); // "1.0"

const gwei = ethers.parseUnits("20", "gwei"); // 20000000000n
```

**Reading State.**

```javascript
const provider = new ethers.InfuraProvider("mainnet", API_KEY);
const balance = await provider.getBalance("vitalik.eth");
console.log(`Balance: ${ethers.formatEther(balance)} ETH`);
```

**Sending Transactions.**

```javascript
const tx = await contract.transfer(to, amount, {
    gasLimit: 100000,
    maxFeePerGas: ethers.parseUnits("100", "gwei"),
    maxPriorityFeePerGas: ethers.parseUnits("2", "gwei")
});
const receipt = await tx.wait();
console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
```

**Event Filtering.**

```javascript
const filter = contract.filters.Transfer(fromAddress, null); // all transfers FROM fromAddress
const events = await contract.queryFilter(filter, -1000);    // last 1000 blocks

// Real-time subscription
contract.on("Transfer", (from, to, value, event) => {
    console.log(`Transfer: ${from} -> ${to}: ${ethers.formatEther(value)} ETH`);
});
```

### 7.4 web3.js

web3.js (v4) is an alternative library with a similar API but different design philosophy:

```javascript
const { Web3 } = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_API_KEY");

const balance = await web3.eth.getBalance("0x...");
const contract = new web3.eth.Contract(abi, address);
const totalSupply = await contract.methods.totalSupply().call();
```

Key differences from ethers.js:
- web3.js wraps values in its own type objects (not `bigint`).
- Transaction receipt format differs.
- Event handling uses `events` instead of `filters`.

### 7.5 Connecting to MetaMask

MetaMask injects an Ethereum provider into the browser (`window.ethereum`). The standard for this injection is EIP-1193.

**Connection Request.**

```javascript
// Request account access (EIP-1102)
const accounts = await window.ethereum.request({
    method: "eth_requestAccounts"
});
const account = accounts[0];

// Create ethers provider from MetaMask
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
const balance = await provider.getBalance(account);
```

**EIP-1193 Provider Interface.** The injected provider must implement:

```typescript
interface EIP1193Provider {
    request(args: { method: string; params?: unknown[] }): Promise<unknown>;
    on(event: string, listener: (...args: any[]) => void): void;
    removeListener(event: string, listener: (...args: any[]) => void): void;
}
```

Common events:

```javascript
window.ethereum.on("accountsChanged", (accounts) => {
    // Reload UI when account changes
});

window.ethereum.on("chainChanged", (chainId) => {
    // Reload on network change
    window.location.reload();
});
```

### 7.6 Deployment Tools

**Truffle.** The first mainstream Ethereum development framework:

```javascript
// truffle-config.js
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        }
    },
    compilers: {
        solc: { version: "0.8.19" }
    }
};
```

```javascript
// migrations/2_deploy_contracts.js
const MyContract = artifacts.require("MyContract");
module.exports = function(deployer) {
    deployer.deploy(MyContract, "arg1", "arg2");
};
```

**Hardhat (Recommended).** Hardhat is the current industry standard. It includes a built-in Ethereum network (Hardhat Network), a task runner, console.log debugging, and extensive plugin support.

```javascript
// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.19",
    networks: {
        hardhat: {},
        sepolia: {
            url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts: [process.env.PRIVATE_KEY]
        }
    }
};
```

**Deployment Script.**

```javascript
// scripts/deploy.js
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying with account:", deployer.address);

    const MyContract = await ethers.getContractFactory("MyContract");
    const contract = await MyContract.deploy("constructorArg");
    await contract.waitForDeployment();

    console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
```

**Hardhat Console.log.** Hardhat Network supports `console.log` in Solidity:

```solidity
import "hardhat/console.sol";

contract Counter {
    uint256 public count;

    function increment() external {
        count += 1;
        console.log("Count incremented to:", count);
    }
}
```

### 7.7 Testing

Hardhat uses Mocha (test framework) and Chai (assertion library). The `@nomicfoundation/hardhat-toolbox` plugin includes Chai matchers for Ethereum-specific assertions.

```javascript
const { expect } = require("chai");

describe("Token", function () {
    let token;
    let owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("Token");
        token = await Token.deploy("MyToken", "MTK", 18, ethers.parseEther("1000"));
        await token.waitForDeployment();
    });

    it("should transfer tokens correctly", async function () {
        const amount = ethers.parseEther("100");
        await token.connect(owner).transfer(addr1.address, amount);

        expect(await token.balanceOf(addr1.address)).to.equal(amount);
        expect(await token.balanceOf(owner.address)).to.equal(ethers.parseEther("900"));
    });

    it("should revert when transferring more than balance", async function () {
        const amount = ethers.parseEther("2000");
        await expect(
            token.connect(owner).transfer(addr1.address, amount)
        ).to.be.revertedWith("insufficient balance");
    });
});
```

**Test Coverage.** Hardhat coverage (solidity-coverage plugin):

```bash
npx hardhat coverage
```

### 7.8 DApp Architecture

A typical DApp architecture:

```
User Browser
  ├── MetaMask (wallet / signer)
  └── React App
      ├── ethers.js (Provider + Signer + Contract)
      └── IPFS Client (optional, for decentralized storage)
              │
      JSON-RPC │
              ▼
      Ethereum Node (Infura / Alchemy / local Hardhat)
              │
              ▼
      Smart Contracts (on-chain)
```

**State Management Considerations.**
- On-chain reads are slow (~200ms RTT); cache frequently-read data.
- Use React Context or Zustand for wallet state.
- Listen for `accountsChanged` and `chainChanged` for reactive UI.
- Handle transaction lifecycle: pending → confirmed → failed.

## Examples

### Example 7.1: Complete React Component

```jsx
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import MyContract from "./artifacts/MyContract.json";

function DApp() {
    const [provider, setProvider] = useState(null);
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState("0");

    async function connectWallet() {
        if (!window.ethereum) return alert("Install MetaMask");
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        setProvider(provider);

        const balance = await provider.getBalance(accounts[0]);
        setBalance(ethers.formatEther(balance));
    }

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            {account && <p>Account: {account}</p>}
            {account && <p>Balance: {balance} ETH</p>}
        </div>
    );
}
```

### Example 7.2: Hardhat Test with Events

```javascript
it("should emit Transfer event", async function () {
    const amount = ethers.parseEther("50");
    await expect(token.connect(owner).transfer(addr1.address, amount))
        .to.emit(token, "Transfer")
        .withArgs(owner.address, addr1.address, amount);
});
```

## Summary

DApp development requires understanding the three-tier architecture: smart contracts (on-chain logic), providers/signers (blockchain connection), and frontend (user interface). ethers.js is the recommended JavaScript library for interacting with Ethereum, offering Provider (read-only), Signer (transaction-capable), and Contract (ABI-bound) abstractions. Hardhat is the dominant development framework, providing a local network, debugging via console.log, and integrated testing with Mocha/Chai. MetaMask injects an EIP-1193 provider into the browser, enabling user-controlled wallet interactions.

## Exercises

### Review Questions

1. What are the three layers of a DApp? How does this differ from a traditional web application?
2. Explain the difference between a Provider and a Signer in ethers.js.
3. What is the purpose of the ABI? How is it generated?
4. Describe the EIP-1193 provider interface. What methods must it implement?
5. Why is `window.ethereum.on("accountsChanged")` necessary for a responsive DApp?

### Application Problems

6. Write a Hardhat deployment script that:
   - Deploys a `Token` contract with configurable name, symbol, and supply.
   - Transfers 100 tokens to the deployer's address.
   - Verifies the contract on Etherscan.
7. Create an ethers.js script that monitors the latest 100 blocks for `Transfer` events from a specific address and logs the total transferred value.
8. Implement a React hook `useContract` that accepts a contract address and ABI, returns the contract instance connected to MetaMask signer, and handles account/chain changes.

### Challenge Problem

9. **(Gas-Optimized Batch Transfer).** Build a full-stack DApp that allows an owner to batch-transfer tokens to multiple addresses in a single transaction. The smart contract should implement a `batchTransfer(address[] calldata recipients, uint256[] calldata amounts)` function that reverts if array lengths do not match. The frontend should:
   - Allow the user to upload a CSV of addresses and amounts.
   - Estimate gas for the batch transfer.
   - Show a progress indicator during transaction confirmation.
   - Display per-recipient status after confirmation.
   
   Measure gas savings compared to individual transfers.
