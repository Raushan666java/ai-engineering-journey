# Chapter 9: Non-Fungible Tokens (NFTs)

## Learning Objectives

After completing this chapter, the student will be able to:

1. Implement an ERC-721 contract with metadata, minting, and enumeration extensions.
2. Describe the IPFS content-addressed storage system and its role in decentralized data availability.
3. Distinguish between on-chain and off-chain metadata storage approaches.
4. Implement lazy minting, reveal mechanisms, and EIP-2981 royalties.
5. Analyze NFT trait rarity and compute statistical rarity scores.
6. Build a generative art system using on-chain deterministic randomness.

## Theory

### 9.1 NFT Definition

A Non-Fungible Token (NFT) is a unique, indivisible digital asset whose ownership is recorded on a blockchain. Unlike fungible tokens (ERC-20), each NFT has a distinct identifier (tokenId) that cannot be exchanged on a one-to-one basis with any other NFT. The ERC-721 standard, finalized in 2018, formalized NFTs on Ethereum.

### 9.2 ERC-721 Deep Dive

**Core Interface (IERC721).**

```solidity
interface IERC721 {
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    function balanceOf(address owner) external view returns (uint256 balance);
    function ownerOf(uint256 tokenId) external view returns (address owner);
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function approve(address approved, uint256 tokenId) external;
    function setApprovalForAll(address operator, bool approved) external;
    function getApproved(uint256 tokenId) external view returns (address operator);
    function isApprovedForAll(address owner, address operator) external view returns (bool);
}
```

**Safe Transfers.** `safeTransferFrom` checks if the recipient implements `IERC721Receiver.onERC721Received`. If the recipient is a contract that does not implement the interface, the transfer reverts. This prevents tokens from being permanently locked in contracts.

```solidity
interface IERC721Receiver {
    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external returns (bytes4);
}
```

**Metadata Extension (IERC721Metadata).**

```solidity
interface IERC721Metadata {
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function tokenURI(uint256 tokenId) external view returns (string memory);
}
```

**Enumerable Extension (IERC721Enumerable).**

```solidity
interface IERC721Enumerable {
    function totalSupply() external view returns (uint256);
    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256);
    function tokenByIndex(uint256 index) external view returns (uint256);
}
```

### 9.3 Metadata Standards

The `tokenURI` function returns a JSON metadata object conforming to the OpenSea standard:

```json
{
    "name": "Artwork #42",
    "description": "A unique generative artwork on the Ethereum blockchain.",
    "image": "ipfs://QmXa1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d",
    "attributes": [
        {"trait_type": "Background", "value": "Sunset"},
        {"trait_type": "Shape", "value": "Circle"},
        {"trait_type": "Color", "value": "Blue"},
        {"trait_type": "Rarity", "value": "Legendary"}
    ],
    "external_url": "https://example.com/artwork/42"
}
```

### 9.4 IPFS — Content-Addressed Storage

The InterPlanetary File System (IPFS) is a distributed, peer-to-peer file system that addresses content by its hash rather than its location.

**Content Addressing.** A file stored on IPFS is identified by a Content Identifier (CID):

\[
\text{CID} = \text{base58}(\text{SHA-256}(\text{file\_content}))
\]

If the file changes, the CID changes. This provides immutability and verifiability: anyone can hash the retrieved content and compare it to the CID.

**Pinning.** IPFS nodes cache content they have recently fetched. Content may be garbage-collected if not pinned. Pinning services (Pinata, Web3.Storage, NFT.Storage) ensure content remains available indefinitely.

**Filecoin.** Filecoin adds an incentive layer on top of IPFS. Storage providers earn FIL tokens for proving they are storing data over time (via proof-of-replication and proof-of-spacetime).

**NFT.Storage.** A free service that pins NFT metadata and images to IPFS and Filecoin. It provides a simple API:

```javascript
const client = new NFTStorage({ token: process.env.NFT_STORAGE_API_KEY });
const metadata = await client.store({
    name: "Artwork #1",
    description: "...",
    image: new File([imageData], "artwork.png", { type: "image/png" })
});
console.log(metadata.url); // ipfs://bafyrei...
```

### 9.5 URI Storage — On-Chain vs Off-Chain

**Off-Chain (IPFS/Arweave).** The `tokenURI` stores an IPFS CID or an Arweave URL. Benefits: cheap (one SSTORE per token), unlimited data size. Drawback: data availability depends on pinning services.

```solidity
function tokenURI(uint256 tokenId) public view override returns (string memory) {
    return string(abi.encodePacked("ipfs://", cid, "/", Strings.toString(tokenId), ".json"));
}
```

**On-Chain (SVG/JSON in contract).** Metadata is stored entirely in the contract. Benefits: fully decentralized, no reliance on external storage. Drawback: expensive (gas costs scale with data size), practical limits on data.

```solidity
function tokenURI(uint256 tokenId) public view override returns (string memory) {
    return string(abi.encodePacked(
        "data:application/json;base64,",
        Base64.encode(bytes(
            string(abi.encodePacked(
                '{"name":"Art #', Strings.toString(tokenId), '","image":"data:image/svg+xml;base64,',
                Base64.encode(bytes(generateSVG(tokenId))), '"}'
            ))
        ))
    ));
}
```

### 9.6 Minting Process

**Direct Mint.** The creator calls `mint(address to, uint256 tokenId)`. Gas costs are high for large collections.

**Lazy Minting.** The creator signs a voucher that allows a third party to mint the token and pay the gas. The signature is verified on-chain:

```solidity
struct NFTVoucher {
    uint256 tokenId;
    uint256 price;
    address recipient;
    bytes signature;
}

function redeem(NFTVoucher calldata voucher) external payable {
    address signer = _verify(voucher);
    require(signer == owner, "invalid signature");
    _safeMint(voucher.recipient, voucher.tokenId);
}
```

**Reveal Mechanism.** For collections where metadata should remain hidden until after minting (to prevent sniping of rare traits):

```solidity
string private _revealedURI;
string private _placeholderURI;
uint256 public revealBlock;

function reveal() external onlyOwner {
    revealBlock = block.number;
}

function tokenURI(uint256 tokenId) public view override returns (string memory) {
    if (revealBlock == 0 || revealBlock > block.number) {
        return _placeholderURI;
    }
    return string(abi.encodePacked(_revealedURI, Strings.toString(tokenId), ".json"));
}
```

### 9.7 Royalties — EIP-2981

EIP-2981 standardizes on-chain royalty information. Any marketplace that supports the standard pays royalties on secondary sales:

```solidity
interface IERC2981 {
    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        returns (address receiver, uint256 royaltyAmount);
}

contract MyNFT is ERC721, IERC2981 {
    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        public view override returns (address, uint256)
    {
        return (creator, salePrice * 500 / 10000); // 5% royalty
    }
}
```

### 9.8 NFT Marketplaces

**OpenSea.** The largest NFT marketplace. Supports ERC-721 and ERC-1155, offers Listing, Offer, and Auction orders. Uses an off-chain order book with on-chain settlement via the Seaport protocol.

**Blur.** A marketplace optimized for professional traders. Offers zero-fee trading, rapid batch listing, and lending (Blend protocol). Uses a bid-based liquidity model.

### 9.9 Trait Rarity

Rarity determines an NFT's value within a collection. Common metrics:

**Trait Count Rarity:**

\[
\text{score}_{\text{trait}} = \frac{1}{\text{prevalence}}
\]

**Statistical Rarity (OpenSea):**

\[
\text{score} = \frac{1}{\prod \text{prevalence}_i}
\]

**Normalized Rarity:** Scores are normalized to a 0–100 scale per collection.

### 9.10 Generative Art — Art Blocks

Art Blocks is a platform for on-chain generative art. An artist submits a script (p5.js, Three.js) with a deterministic seed. The seed is derived from the token's `block.prevrandao` and `blockhash`. When collected, the script runs in the collector's browser, generating a unique output.

```solidity
function mint() external {
    uint256 tokenId = totalSupply() + 1;
    uint256 seed = uint256(keccak256(abi.encodePacked(
        block.prevrandao, blockhash(block.number - 1), tokenId
    )));
    _safeMint(msg.sender, tokenId);
    emit Minted(tokenId, seed);
}
```

## Examples

### Example 9.1: Complete ERC-721 with Metadata

```solidity
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mint(string memory uri) external onlyOwner {
        uint256 tokenId = nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
    }
}
```

### Example 9.2: IPFS Metadata Structure

A collection of 10,000 generative profile pictures might store:

```
ipfs://QmABC.../
  ├── 0.json   → { "name": "Punk #0", "image": "ipfs://QmXYZ.../0.png", ... }
  ├── 1.json
  ├── ...
  └── 9999.json
```

The contract's `tokenURI(0)` returns `ipfs://QmABC.../0.json`.

## Summary

NFTs represent unique digital assets on the blockchain. The ERC-721 standard defines ownership and transfer semantics. Metadata is typically stored off-chain via IPFS (content-addressed, verifiable) for cost efficiency, though on-chain storage is possible. Lazy minting defers gas costs to buyers. EIP-2981 standardizes creator royalties. Rarity analysis drives market dynamics, and generative art platforms like Art Blocks demonstrate the expressive potential of on-chain randomness.

## Exercises

### Review Questions

1. What is the purpose of `safeTransferFrom`? What problem does it solve?
2. How does IPFS ensure content integrity? What is the relationship between a CID and the file content?
3. Compare on-chain and off-chain metadata. Under what circumstances would a project choose each?
4. Explain the reveal mechanism. Why would a project hide metadata before minting?
5. What does EIP-2981 specify? How does it enable royalties without marketplace cooperation?

### Application Problems

6. Write an ERC-721 contract that:
   - Mints tokens with a maximum supply of 10,000.
   - Uses lazy minting with EIP-712 typed signatures.
   - Charges 0.01 ETH per mint (payable to the creator).
   - Implements EIP-2981 with 5% royalty.
7. Compute the rarity scores for an NFT with: Background (prevalence 20%), Fur (10%), Eyes (5%), Hat (15%). Use both trait-count and statistical rarity formulas.
8. Design an on-chain SVG generator for a simple pixel art NFT. The SVG should use 3 colors and a 16×16 grid. The seed should determine the color palette and pixel arrangement.

### Challenge Problem

9. **(Dynamic NFT with On-Chain Evolution).** Implement an ERC-721 token that evolves its metadata based on on-chain conditions:
   - Each token has a "growth" parameter that increases by 1 every 24 hours.
   - The `tokenURI` generates an SVG that visually reflects the current growth level (e.g., a plant that grows from seed to tree).
   - Growth stops at level 10 (mature).
   - A `levelUp` permissionless function advances growth if 24 hours have elapsed since the last update.
   
   Analyze the gas costs of generating SVG data on-chain versus storing a pre-computed URI at each level. Which approach scales better at collection size 10,000?
