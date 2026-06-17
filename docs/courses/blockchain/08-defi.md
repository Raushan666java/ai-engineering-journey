# Chapter 8: Decentralized Finance (DeFi)

---

## Learning Objectives

- Explain the core components of the DeFi ecosystem
- Understand the mechanics of Automated Market Makers (AMM) like Uniswap
- Describe the role of Stablecoins (Fiat-backed vs. Algorithmic)
- Analyze the concepts of Yield Farming and Liquidity Provision
- Identify the risks associated with DeFi, including "Impermanent Loss" and "Flash Loan" attacks

---

## Theory

### What is DeFi?
DeFi is an ecosystem of financial applications built on top of blockchain networks. It aims to recreate traditional financial services (Lending, Borrowing, Trading, Insurance) in a decentralized, permissionless, and transparent manner.

![DeFi Ecosystem](../assets/images/diagrams/blockchain/ch08-defi.png)

### Automated Market Makers (AMM)
AMMs replace traditional order books. Instead of matching buyers and sellers, users trade against a **Liquidity Pool**.
- **Constant Product Formula:** $x \times y = k$.
- $x$ and $y$ are the quantities of two tokens in the pool.
- $k$ must remain constant. If you buy $x$, its price increases because its quantity in the pool decreases.

### Stablecoins
Stablecoins provide a price-stable asset in a volatile market.
1. **Fiat-Backed (e.g., USDC, USDT):** Centralized companies hold USD in a bank for every token issued.
2. **Crypto-Collateralized (e.g., DAI):** Over-collateralized by other crypto assets.
3. **Algorithmic:** Use supply/demand mechanisms to maintain a peg (High risk).

### Yield and Liquidity
- **Liquidity Providers (LPs):** Users who add funds to a pool. They earn a share of the transaction fees.
- **Yield Farming:** The process of moving assets across different protocols to maximize returns.

---

## Examples

### Example 1: Trading on Uniswap
A pool has 10 ETH and 10,000 USDC. $k = 10 \times 10,000 = 100,000$.
Alice wants to sell 1 ETH.
1. New ETH quantity = 11.
2. New USDC quantity = $100,000 / 11 \approx 9,090.9$.
3. Alice receives $10,000 - 9,090.9 = 909.1$ USDC.
The price of ETH "slipped" during the trade.

### Example 2: Collateralized Debt Position (CDP)
1. Alice locks 1 ETH (Price: $2,000) as collateral in a protocol like MakerDAO.
2. The protocol requires a 150% collateral ratio.
3. Alice can borrow a maximum of $2,000 / 1.5 = 1,333$ DAI.
4. If the price of ETH drops to $1,500, Alice's position is **Liquidated** to ensure the protocol remains solvent.

---

## Summary

- DeFi provides financial services without intermediaries through smart contracts.
- AMMs enable permissionless trading through liquidity pools and mathematical formulas.
- Stablecoins are the "Liquidity" of the DeFi ecosystem, bridging the gap with fiat.
- LPs earn fees but face the risk of Impermanent Loss when token prices diverge.
- DeFi protocols are "Composable" (Money Legos), allowing complex financial structures to be built.

---

## Exercises

### Review Questions
1. Explain the constant product formula ($x \times y = k$).
2. What is "Impermanent Loss"?
3. Define "Over-collateralization".
4. How do decentralized Oracles (like Chainlink) help DeFi protocols?

### Application Problems
1. If an ETH/USDC pool has 100 ETH and 200,000 USDC, calculate the price of 1 ETH.
2. A protocol has a 120% collateral requirement. If you have $500 worth of collateral, how much can you borrow?
3. Discuss the impact of a "Flash Loan" where an attacker borrows $100M, manipulates a price, and repays the loan in a single transaction.

### Challenge Problem
1. Evaluate the sustainability of high-yield farming protocols (APY > 1000%) and identify the characteristics of a "Ponzi" structure in DeFi.
