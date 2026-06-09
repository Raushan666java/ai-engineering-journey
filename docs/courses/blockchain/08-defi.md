# Chapter 8: DeFi & Tokens

## Learning Objectives

After completing this chapter, the student will be able to:

1. Implement and deploy ERC-20, ERC-721, and ERC-1155 token contracts.
2. Explain the Uniswap constant product AMM formula and compute swap quantities.
3. Describe the mechanisms of decentralized lending protocols (Aave, Compound).
4. Distinguish among algorithmic, collateralized, and fiat-backed stablecoins.
5. Integrate Chainlink oracles for price feeds and randomness.
6. Construct and execute flash loan attacks and explain their economic security implications.

## Theory

### 8.1 Token Standards

**ERC-20 — Fungible Tokens.** The ERC-20 standard defines a common interface for fungible (interchangeable) tokens. Any ERC-20 token can be managed by the same wallets and exchanges.

Required interface:

```solidity
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}
```

Optional metadata: `name()`, `symbol()`, `decimals()`.

The `decimals` field (conventionally 18) indicates the number of decimal places. A balance of `10^18` units represents 1 token.

**ERC-721 — Non-Fungible Tokens.** ERC-721 defines unique, non-interchangeable tokens. Each token has a distinct `tokenId`.

Core interface:

```solidity
interface IERC721 {
    function balanceOf(address owner) external view returns (uint256);
    function ownerOf(uint256 tokenId) external view returns (address);
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function approve(address approved, uint256 tokenId) external;
    function setApprovalForAll(address operator, bool approved) external;
    function getApproved(uint256 tokenId) external view returns (address);
    function isApprovedForAll(address owner, address operator) external view returns (bool);
}
```

**ERC-1155 — Multi-Token Standard.** ERC-1155 combines ERC-20 and ERC-721 in a single contract. A single contract can manage fungible tokens, semi-fungible tokens, and non-fungible tokens simultaneously. Batch operations reduce gas costs:

```solidity
function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids) external view returns (uint256[] memory);
function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external;
```

### 8.2 Decentralized Exchanges (DEX)

**Uniswap — Automated Market Maker (AMM).** Uniswap introduced the constant product formula for decentralized trading.

**Constant Product Formula.** For a pair of tokens X and Y in a liquidity pool:

\[
x \cdot y = k
\]

where \(x\) is the reserve of token X, \(y\) is the reserve of token Y, and \(k\) is a constant. This formula ensures that the product of reserves remains invariant across trades (ignoring fees).

**Swap Calculation.** To buy \(\Delta y\) units of token Y, a trader must deposit \(\Delta x\) units of token X such that:

\[
(x + \Delta x)(y - \Delta y) = k
\]

Solving for \(\Delta x\):

\[
\Delta x = \frac{x \cdot \Delta y}{y - \Delta y}
\]

The price impact increases with trade size relative to pool depth. A trade of size equal to the pool reserves moves the price by 2x.

**Liquidity Pools.** Liquidity providers (LPs) deposit equal values of both tokens into a pool:

\[
\text{deposit}_x \cdot \text{deposit}_y = k
\]

LPs receive liquidity tokens representing their share of the pool. They earn fees (0.3% per trade on Uniswap v2) proportional to their share.

**Impermanent Loss.** LP returns are subject to impermanent loss: the divergence between holding tokens in a pool versus holding them separately. If the price ratio changes, LPs suffer a loss relative to the hold strategy:

\[
IL = \frac{2\sqrt{r}}{1 + r} - 1
\]

where \(r\) is the ratio of the new price to the original price. For a 2x price change, IL ≈ 5.7%.

### 8.3 Lending Protocols

**Aave and Compound.** Users deposit assets into liquidity pools and earn interest. Borrowers collateralize their deposits to borrow other assets.

**Key Parameters.**

| Parameter | Description |
|-----------|-------------|
| Loan-to-Value (LTV) | Max borrow amount as % of collateral (e.g., 75% for ETH) |
| Liquidation Threshold | Collateral value below which liquidation is triggered |
| Liquidation Bonus | Bonus for liquidators (e.g., 5% discount on seized collateral) |

**Interest Rate Model.** Rates adjust based on utilization:

\[
U = \frac{\text{total\_borrows}}{\text{total\_supplies}}
\]

When utilization exceeds a target (e.g., 80%), rates increase sharply to incentivize new deposits and discourage borrowing.

**Flash Loans.** A flash loan is an uncollateralized loan that must be repaid within the same transaction:

1. Borrow \(B\) assets from the pool.
2. Execute arbitrary logic (arbitrage, collateral swap, liquidation).
3. Repay \(B + \text{fee}\) (typically 0.09%).

If repayment fails, the entire transaction reverts — as if the loan never happened.

### 8.4 Stablecoins

A stablecoin maintains a peg to a reference asset (usually USD).

**Fiat-Collateralized (USDC, USDT).** Each token is backed by an equivalent fiat reserve held by a centralized custodian. The peg is maintained by off-chain redemption (1 USDC → $1).

**Crypto-Collateralized (DAI).** DAI is issued by the MakerDAO protocol. Users deposit ETH (or other approved collateral) into a vault and mint DAI against it:

- Collateralization ratio must exceed 150%.
- If the ratio falls below the liquidation threshold, the vault is liquidated.
- The Stability Fee (variable) is the annual cost of maintaining a vault.

**Algorithmic (UST, Frax).** No collateral. The peg is maintained by algorithmic expansion/contraction of supply. TerraUSD (UST) collapsed to $0.05 in May 2022, demonstrating the fragility of pure algorithmic designs.

### 8.5 Yield Farming and Staking

**Yield Farming.** The practice of depositing tokens into DeFi protocols to earn yield, often denominated in the protocol's governance token. Yield can come from:

- Trading fees (liquidity provision)
- Borrowing fees (lending)
- Protocol token emissions (liquidity mining)

**Staking.** Locking tokens in a protocol to secure the network (PoS) or to earn rewards. Liquid staking (Lido, Rocket Pool) issues a derivative token (stETH) representing the staked position, allowing the user to simultaneously earn staking rewards and use the derivative in DeFi.

### 8.6 Oracles — Chainlink

Blockchains are deterministic closed systems. They cannot natively access external data. Oracles bridge this gap.

**Data Feeds.** Chainlink's decentralized oracle network aggregates off-chain data (asset prices, weather, sports results) and writes them on-chain:

```solidity
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumer {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(0x5f4eC3D...); // ETH/USD on mainnet
    }

    function getLatestPrice() external view returns (int256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return price; // scaled to 8 decimals
    }
}
```

**VRF (Verifiable Random Function).** Chainlink VRF provides tamper-proof randomness for on-chain applications:

```solidity
function requestRandomness() external returns (bytes32 requestId) {
    requestId = COORDINATOR.requestRandomWords(
        keyHash, subscriptionId, requestConfirmations, callbackGasLimit, numWords
    );
}

function fulfillRandomWords(bytes32 requestId, uint256[] memory randomWords) internal override {
    // Use randomWords[0] for your application
}
```

## Examples

### Example 8.1: Uniswap Swap

ETH/DAI pool: reserves are 10,000 ETH and 3,000,000 DAI. A trader wants to buy 100 ETH. How much DAI must they deposit?

- \(x = 3,000,000\) DAI (reserve)
- \(y = 10,000\) ETH (reserve)
- \(\Delta y = 100\) ETH

Using \( (x + \Delta x)(y - \Delta y) = k \):

\[
\Delta x = \frac{3,000,000 \times 100}{10,000 - 100} = 30,303.03 \text{ DAI}
\]

Price per ETH: 303.03 DAI (with 0.3% fee: ~1% slippage from mid-market).

### Example 8.2: Flash Loan Arbitrage

DAI price on Uniswap: 1.001 DAI/USDC. DAI price on Sushiswap: 0.999 DAI/USDC. A flash loan of 1M DAI:

1. Borrow 1M DAI (flash loan).
2. Buy USDC on Uniswap: 1M DAI → 999,000 USDC.
3. Sell USDC on Sushiswap: 999,000 USDC → 1,001,000 DAI.
4. Repay flash loan: 1,000,900 DAI (1M + 0.09% fee).
5. Profit: 100 DAI.

### Example 8.3: DAI Vault

User deposits 10 ETH at $2,000/ETH → $20,000 collateral. Max DAI mintable: $20,000 × 66.67% = $13,333.

If ETH drops to $1,500, collateral = $15,000. The vault is now at 112.5% collateral ratio, below the liquidation threshold. A liquidator can repay part of the DAI debt and seize ETH at a discount.

## Summary

DeFi replicates traditional financial primitives — trading, lending, borrowing — through smart contracts. ERC-20 tokens provide a standard interface for fungible assets; ERC-721 does the same for NFTs. Uniswap's AMM enables permissionless trading with the constant product formula. Lending protocols use overcollateralization, dynamic interest rates, and liquidation mechanisms. Stablecoins maintain price pegs through various designs (fiat-backed, crypto-backed, algorithmic). Chainlink oracles bring external data on-chain, enabling DeFi protocols to respond to real-world conditions. Flash loans demonstrate the composability of DeFi: uncollateralized loans within a single atomic transaction.

## Exercises

### Review Questions

1. Describe the three required functions and two required events in the ERC-20 standard.
2. Derive the formula for the output amount when swapping token A for token B in a Uniswap v2 pool.
3. Explain the concept of impermanent loss. Would an LP ever prefer the pool over holding?
4. What conditions must a flash loan meet for the transaction to succeed? Why are flash loans considered safe for lenders?
5. Compare the three types of stablecoins. What are the risks of each?

### Application Problems

6. A Uniswap pool has 500 ETH and 1,000,000 USDC. Compute:
   - The amount of USDC needed to buy 10 ETH.
   - The new price of ETH after the swap.
   - The LP's impermanent loss if the ETH price then doubles.
7. Design a contract `Maximizer` that automatically deposits DAI into Aave, borrows ETH against it, and deposits the ETH into a staking pool. Compute the annualized yield given realistic interest rates.
8. Write a Chainlink consumer that requests randomness and mints a random NFT from a set of 1,000 possible token URIs. Ensure that each URI is used at most once.

### Challenge Problem

9. **(Constant Product AMM with Dynamic Fees).** Extend the Uniswap v2 constant product formula to incorporate dynamic fees based on volatility. The fee \(f\) should increase when recent trades have high price impact:
   - Track a rolling volatility metric \(\sigma\) from the last \(N\) trades.
   - Set \(f = f_{\min} + (f_{\max} - f_{\min}) \cdot \min(1, \sigma / \sigma_{\text{target}})\).
   - Implement the modified swap function.
   
   Prove that the modified system is still path-independent (swap(A→B→A) returns the same amount regardless of intermediate state changes) and analyze whether LP returns improve under high-volatility conditions.
