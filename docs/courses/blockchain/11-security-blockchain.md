# Chapter 11: Blockchain Security

## Learning Objectives

After completing this chapter, the student will be able to:

1. Identify the principal categories of smart contract vulnerabilities and explain their root causes.
2. Implement the checks-effects-interactions pattern and other secure design patterns.
3. Analyze a Solidity contract for security vulnerabilities using manual review and automated tools.
4. Describe the smart contract audit process and interpret audit findings.
5. Explain the technical details of major real-world blockchain hacks (DAO, Parity, Ronin Bridge).
6. Deploy Slither, MythX, and Echidna for automated vulnerability analysis.

## Theory

### 11.1 Smart Contract Vulnerabilities

#### Reentrancy

Reentrancy occurs when a contract calls an external contract, and the external contract calls back (re-enters) the original contract before the first invocation completes. The classic reentrancy attack exploits the gap between the external call and the state update.

**The DAO Hack (June 2016).** The attacker exploited a reentrancy vulnerability in a `withdraw` function:

```solidity
// Vulnerable pattern
function withdraw(uint256 amount) external {
    require(balances[msg.sender] >= amount);
    msg.sender.call{value: amount}("");    // External call BEFORE state update
    balances[msg.sender] -= amount;         // State update after external call
}
```

The attacker's fallback function called `withdraw` again before the balance was updated, draining 3.6 million ETH (approximately $50 million at the time).

**Flash Loan Reentrancy.** Modern reentrancy attacks combine with flash loans to amplify the impact. The attacker borrows a large position (no collateral), manipulates a price oracle, drains a protocol, and repays the flash loan — all within a single transaction.

**Solution: Reentrancy Guard.**

```solidity
contract ReentrancyGuard {
    uint256 private _status = 1;

    modifier nonReentrant() {
        require(_status != 2, "reentrancy");
        _status = 2;
        _;
        _status = 1;
    }
}
```

#### Integer Overflow and Underflow

Prior to Solidity 0.8, arithmetic operations silently wrapped around. An unsigned integer overflow:

```solidity
uint8 x = 255;
x += 1; // x becomes 0 (wraps around)
```

Solidity 0.8+ includes built-in overflow checking; `unchecked` blocks suppress the check for gas optimization:

```solidity
unchecked {
    x++; // no overflow check, cheaper gas
}
```

#### Access Control Issues

Improper or missing access control allows unauthorized actors to call privileged functions.

**Parity Multisig Wallet Freeze (November 2017).** Parity's `WalletLibrary` contract had a `initWallet` function that set the contract owners. The library was invoked by proxy contracts. An attacker called `initWallet` directly on the library contract (which was not supposed to be called directly), set themselves as owner, and called `kill` to destroy the library. The library's code was deleted, freezing 513,874 ETH (≈$150M at the time) in all proxy wallets.

**Solution:** Use OpenZeppelin's `Ownable` and access control contracts:

```solidity
function withdraw() external onlyOwner {
    // ...
}
```

#### Front-Running

In a public mempool, anyone can observe pending transactions. A front-runner sees a profitable trade, submits their own transaction with a higher gas price, and executes the trade first.

**Example:** A user submits a Uniswap buy order (large purchase). A front-runner sees the pending transaction, buys first (driving up the price), then sells into the original buyer's order at the higher price.

**Mitigations:** Commit-reveal schemes, submarine sends (block producer-only visibility), or MEV-aware design.

#### Oracle Manipulation

Flash loans enable price manipulation at scale. An attacker can deposit a large amount into a liquidity pool, changing the spot price long enough to trigger a favorable liquidation or trading condition on a protocol using that pool as a price oracle.

**Example (BZX attack, February 2020):** The attacker took a flash loan of 7,500 ETH, manipulated the Uniswap kyberNetwork price by a single large trade, and exploited bZx's oracle dependency, profiting 1,193 ETH.

**Mitigation:** Use time-weighted average price (TWAP) oracles (Uniswap v3 TWAP) rather than instantaneous spot prices:

```solidity
(uint56 observationCardinality, uint32 secondsAgo, int56 tickCumulative) = 
    pool.observe([secondsAgo]);
```

#### Timestamp Dependency

Miners can manipulate `block.timestamp` within a range of approximately 15 seconds. Contracts that use `block.timestamp` for critical logic (e.g., expiry checks, random generation) are vulnerable.

**Example:** A lottery that uses `keccak256(block.timestamp)` as a random number can be predicted by the miner.

**Mitigation:** Do not use `block.timestamp` for randomness. Use Chainlink VRF.

#### Gas Limit Issues

The EVM has a per-block gas limit (30M gas on Ethereum mainnet). Functions that iterate over unbounded arrays may exceed the gas limit, causing the transaction to revert.

```solidity
// Vulnerable: iterates over unbounded array
function processAll() external {
    for (uint256 i = 0; i < users.length; i++) {
        processUser(users[i]); // may exceed block gas limit
    }
}
```

**Mitigation:** Use pull-over-push patterns or paginated processing.

#### tx.origin vs msg.sender

`tx.origin` is the original account that initiated the transaction. `msg.sender` is the immediate caller. Using `tx.origin` for authorization allows an intermediate contract to impersonate the caller:

```solidity
// Vulnerable
function withdraw() external {
    require(tx.origin == owner); // Attacker can trick owner into calling malicious contract
    payable(owner).transfer(address(this).balance);
}
```

**Mitigation:** Always use `msg.sender` for authorization.

#### delegatecall Abuse

`delegatecall` executes code in the caller's context. Storage layout mismatches between the calling contract and the called library can overwrite critical state variables:

```solidity
// Contract A (proxy)        Contract B (implementation)
// slot 0: address _impl     slot 0: uint256 value  ← MISMATCH!
```

Calling `delegatecall` to B's function that writes to slot 0 will overwrite A's `_impl` pointer, enabling a storage collision attack.

**Parity Wallet Library Suicide.** The `kill` function:

```solidity
function kill() external {
    if (msg.sender == owner) selfdestruct(owner);
}
```

Was called via delegatecall on the library, destroying the library and all proxy contracts that depended on it.

#### Unchecked External Calls

`send` and `transfer` return false on failure without reverting. Ignoring the return value silently swallows failures:

```solidity
msg.sender.send(amount); // returns false if fails, execution continues
```

**Mitigation:** Always check return values. Prefer `call` with `require`:

```solidity
(bool success, ) = msg.sender.call{value: amount}("");
require(success, "transfer failed");
```

### 11.2 Solidity Security Patterns

**Checks-Effects-Interactions.** The foundational security pattern:

```solidity
function withdraw() external {
    // 1. Checks (validation)
    uint256 amount = balances[msg.sender];
    require(amount > 0, "no balance");

    // 2. Effects (state updates)
    balances[msg.sender] = 0;

    // 3. Interactions (external calls)
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "transfer failed");
}
```

**Pull-over-Push.** Instead of pushing funds to users (which may fail), let users withdraw their own funds:

```solidity
mapping(address => uint256) public pendingWithdrawals;

function claim() external {
    uint256 amount = pendingWithdrawals[msg.sender];
    require(amount > 0, "nothing to claim");
    pendingWithdrawals[msg.sender] = 0;
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "transfer failed");
}
```

**Emergency Stop (Circuit Breaker).** Allows pausing contract functionality in case of emergency:

```solidity
contract EmergencyStop {
    bool public paused;

    modifier whenNotPaused() {
        require(!paused, "paused");
        _;
    }

    function pause() external onlyOwner { paused = true; }
    function unpause() external onlyOwner { paused = false; }
}
```

**Rate Limiting.** Limits the rate of operations per user:

```solidity
mapping(address => uint256) public lastAction;

modifier rateLimited(uint256 interval) {
    require(block.timestamp >= lastAction[msg.sender] + interval);
    lastAction[msg.sender] = block.timestamp;
    _;
}
```

### 11.3 Audit Process

A professional smart contract audit follows these phases:

1. **Specification Review.** Review documentation, threat model, and intended behavior.
2. **Manual Code Review.** Line-by-line analysis of each function, state variable, and modifier.
3. **Automated Analysis.** Run static analysis, fuzzing, and symbolic execution tools.
4. **Test Evaluation.** Review test coverage for edge cases and negative scenarios.
5. **Report Generation.** Document findings by severity: Critical, High, Medium, Low, Informational.
6. **Remediation.** Developer fixes identified issues.
7. **Re-audit.** Verify that all findings are properly addressed.

### 11.4 Automated Analysis Tools

**Slither (Static Analysis).** Slither analyzes Solidity source code without execution:

```bash
slither . --detect reentrancy-eth,reentrancy-no-eth,tx-origin,suicidal
```

Detects: reentrancy, tx.origin usage, locked Ether, unused return values, naming conventions.

**MythX (Cloud-based Security Analysis).** MythX performs deep analysis including symbolic execution:

```bash
truffle run mythx --compounds
```

**Echidna (Fuzzing).** Echidna performs property-based fuzzing. The developer defines invariants:

```solidity
function echidna_balance_sum() public view returns (bool) {
    return address(this).balance == totalSupply;
}
```

```bash
echidna-test contract.sol --contract myContract
```

### 11.5 Real-World Hacks

| Hack | Date | Lost | Root Cause |
|------|------|------|------------|
| **DAO** | Jun 2016 | 3.6M ETH ($50M) | Reentrancy |
| **Parity Multisig (freeze)** | Nov 2017 | 513K ETH ($150M) | Access control (initWallet) |
| **Parity Wallet (suicide)** | Jul 2017 | 153K ETH ($30M) | delegatecall storage collision |
| **Mt. Gox** | Feb 2014 | 850K BTC ($460M) | Transaction malleability + theft |
| **Coincheck (NEM)** | Jan 2018 | 523M NEM ($534M) | Hot wallet compromise |
| **Bittrex** | Multiple | Periodic thefts | API key compromise |
| **Ronin Bridge** | Mar 2022 | 173K ETH + 25.5M USDC ($620M) | Compromised validator keys (5/9) |
| **FTX** | Nov 2022 | ~$8B | Off-chain: misappropriated customer funds |

## Examples

### Example 11.1: Reentrancy Attack

Attacker contract:

```solidity
contract Attacker {
    Victim public victim;

    constructor(address _victim) {
        victim = Victim(_victim);
    }

    receive() external payable {
        if (address(victim).balance >= 1 ether) {
            victim.withdraw(1 ether);
        }
    }

    function attack() external payable {
        victim.withdraw(1 ether);
    }
}
```

The victim's `withdraw` sends ETH before updating the balance, enabling the attack loop.

### Example 11.2: Slither Output

```
INFO:Slither:MyContract.sol analyzed (1 contracts)
INFO:Slither:Detectors: 3 findings
HIGH: Reentrancy in MyContract.withdraw(uint256) (MyContract.sol#25-30)
    External call to user in withdraw (line 27)
    State variable balances[msg.sender] updated after call (line 28)
MEDIUM: Use of tx.origin in verifyOwner (MyContract.sol#42)
LOW: Unused return value of transfer (MyContract.sol#55)
```

## Summary

Blockchain security is a multi-layered discipline spanning consensus attacks (51%), smart contract vulnerabilities (reentrancy, access control, oracle manipulation), and operational security (key management, bridge security). The checks-effects-interactions pattern is the single most important defensive pattern for Solidity contracts. Automated tools (Slither, MythX, Echidna) accelerate vulnerability discovery but cannot replace manual review. Formal verification provides the highest assurance but is costly and limited to simple contracts. Real-world losses exceeding $10 billion demonstrate that security must be a first-class concern, not an afterthought.

## Exercises

### Review Questions

1. Describe the reentrancy vulnerability in terms of the order of operations. How does the checks-effects-interactions pattern prevent it?
2. Why was the Parity `initWallet` function callable by anyone? What should the designer have done differently?
3. Explain how a flash loan can be used to manipulate a price oracle. What countermeasures exist?
4. What is the difference between `tx.origin` and `msg.sender`? Give a concrete example of a vulnerability caused by `tx.origin` misuse.
5. List the seven phases of a professional smart contract audit.

### Application Problems

6. Analyze the following contract for vulnerabilities:

```solidity
contract Auction {
    address public highestBidder;
    uint256 public highestBid;

    function bid() external payable {
        require(msg.value > highestBid, "bid too low");
        if (highestBidder != address(0)) {
            payable(highestBidder).transfer(highestBid);
        }
        highestBidder = msg.sender;
        highestBid = msg.value;
    }
}
```

Identify all vulnerabilities and propose fixes.

7. Write a reentrancy guard library that uses the mutex pattern. Explain why a simple boolean flag is insufficient for deeply nested callbacks.
8. Create a list of 10 Solidity compiler warnings/errors that indicate security issues (e.g., "Unused return value", "Use of tx.origin"). For each, state the associated risk class.

### Challenge Problem

9. **(Formal Verification of a Simple AMM).** Using symbolic execution reasoning (not code), prove that the constant product AMM satisfies the following invariants:
   - **Value conservation:** The product of reserves never decreases (ignoring fees).
   - **No arbitrage:** After any sequence of trades that returns to the original price ratio, the LP's asset value is unchanged (ignoring fees).
   - **Liquidity invariance:** The liquidity minted at initialization equals the sum of liquidity burned from all LP tokens (no inflation).
   
   For each invariant, state the assumptions under which it holds and describe a scenario where fees would cause the invariant to be violated.
