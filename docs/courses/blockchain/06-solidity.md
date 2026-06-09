# Chapter 6: Solidity Programming

## Learning Objectives

After completing this chapter, the student will be able to:

1. Write Solidity contracts using appropriate data types, state variables, and functions.
2. Differentiate among storage, memory, calldata, and stack data locations.
3. Apply function visibility modifiers and state mutability qualifiers correctly.
4. Implement custom error handling with require, assert, revert, and custom errors.
5. Use events for logging and external communication.
6. Manage Ether transfers with send, transfer, and call.
7. Design contract hierarchies using inheritance, abstract contracts, and interfaces.

## Theory

### 6.1 Language Basics

Solidity is a statically-typed, contract-oriented programming language designed for the EVM. It is influenced by C++, Python, and JavaScript. Solidity source files are compiled to EVM bytecode.

**Pragma.** The pragma statement specifies the compiler version:

```solidity
pragma solidity ^0.8.0;
```

The caret (^) indicates compatibility with 0.8.0 and above but below 0.9.0. Solidity 0.8.x introduced built-in overflow checks (previously handled by SafeMath).

**Contract.** A contract is the fundamental building block:

```solidity
contract MyContract {
    // state variables
    // functions
    // modifiers
    // events
    // structs and enums
}
```

**State Variables.** Variables that are permanently stored in the contract's storage:

```solidity
uint256 public count;
address public owner;
mapping(address => uint256) public balances;
```

### 6.2 Data Types

**Value Types.**

| Type | Description | Default |
|------|-------------|---------|
| `bool` | Boolean | `false` |
| `uint8` .. `uint256` | Unsigned integer (8 to 256 bits, step 8) | `0` |
| `int8` .. `int256` | Signed integer | `0` |
| `address` | 20-byte Ethereum address | `0x0` |
| `address payable` | Address that can receive Ether | `0x0` |
| `bytes1` .. `bytes32` | Fixed-size byte array | `0x00` |
| `uint` | Alias for `uint256` | `0` |

**Reference Types.**

| Type | Description |
|------|-------------|
| `bytes` | Dynamic byte array |
| `string` | Dynamic UTF-8 string |
| `T[]` | Dynamic array of type T |
| `T[N]` | Fixed-size array of type T (N elements) |
| `struct` | Custom data structure |
| `mapping(K => V)` | Key-value store |

**Enums.**

```solidity
enum Status { Pending, Active, Completed }
Status public status;
```

**Structs.**

```solidity
struct Proposal {
    address proposer;
    uint256 voteCount;
    string description;
}
```

**Mappings.** Mappings are key-value stores with the following properties:
- All keys exist by default (value = type default).
- Keys are not stored; mappings are not iterable.
- Values are stored at slot `keccak256(h(k) . p)` where p is the mapping slot.

```solidity
mapping(address => mapping(uint256 => bool)) public voted;
```

### 6.3 Data Locations

Every reference type must specify a data location:

| Location | Description | Persistence | Cost |
|----------|-------------|-------------|------|
| `storage` | On-chain persistent store | Permanent | High (SSTORE) |
| `memory` | Temporary byte array | Transaction scope | Low |
| `calldata` | Read-only input data | Transaction scope | Lowest |
| `stack` | Local variables (value types) | Function scope | Free |

**Rules:**
- State variables are implicitly `storage`.
- Function parameters of external functions are `calldata`.
- Function parameters of public/internal functions default to `memory`.
- Local variables of reference type must specify a location.
- Assignments between `storage` and `memory` create copies.

### 6.4 Function Types

**Visibility Modifiers.**

| Modifier | External access | Internal access |
|----------|----------------|-----------------|
| `external` | Yes | No (via `this.f()`) |
| `public` | Yes | Yes |
| `internal` | No | Yes |
| `private` | No | Yes (but not derived) |

**State Mutability.**

| Modifier | Description |
|----------|-------------|
| `view` | Reads state; does not modify |
| `pure` | Neither reads nor modifies state |
| `payable` | Can receive Ether |
| (none) | Can read and modify state |

```solidity
function transfer(address to, uint256 amount) external onlyOwner returns (bool) {
    require(balanceOf[msg.sender] >= amount, "insufficient balance");
    balanceOf[msg.sender] -= amount;
    balanceOf[to] += amount;
    emit Transfer(msg.sender, to, amount);
    return true;
}
```

**Function Overloading.** Multiple functions with the same name but different parameters:

```solidity
function deposit() external payable {}
function deposit(address to) external payable {}
```

### 6.5 Modifiers

Modifiers encapsulate reusable preconditions:

```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "not owner");
    _;
}

function withdraw() external onlyOwner {
    payable(owner).transfer(address(this).balance);
}
```

The underscore `_;` is the insertion point for the modified function's body.

### 6.6 require, assert, revert, and Custom Errors

**require.** Used for input validation and preconditions. Unused gas is refunded:

```solidity
require(amount > 0, "amount must be positive");
```

**assert.** Used for internal invariant checking. Consumes all gas on failure:

```solidity
assert(totalSupply == initialSupply);
```

**revert.** Triggers an explicit revert with an optional error message:

```solidity
if (amount > max) {
    revert("amount exceeds maximum");
}
```

**Custom Errors (Solidity ^0.8.4).** Gas-efficient error handling (no string storage):

```solidity
error InsufficientBalance(uint256 requested, uint256 available);

function withdraw(uint256 amount) external {
    if (amount > balances[msg.sender]) {
        revert InsufficientBalance(amount, balances[msg.sender]);
    }
    // ...
}
```

### 6.7 Events and Logging

Events are inheritable members of contracts. They are stored in transaction logs, accessible via the EVM's logging opcodes (LOG0–LOG4).

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);

function transfer(address to, uint256 amount) external {
    _transfer(msg.sender, to, amount);
    emit Transfer(msg.sender, to, amount);
}
```

- Up to three parameters can be `indexed`, enabling efficient filtering.
- Non-indexed parameters are stored in the log data (not searchable but cheaper).
- Events cost 375 gas (LOG0) plus 375 per indexed topic plus 8 gas per byte of data.

### 6.8 Sending Ether

**send (2300 gas).** Returns a boolean. Limited to 2300 gas, sufficient only for logging:

```solidity
bool sent = payable(receiver).send(1 ether);
require(sent, "send failed");
```

**transfer (2300 gas).** Reverts on failure. Same gas restriction:

```solidity
payable(receiver).transfer(1 ether);
```

**call (forward all gas).** Recommended pattern (since Solidity 0.6.x):

```solidity
(bool success, bytes memory data) = payable(receiver).call{value: 1 ether}("");
require(success, "call failed");
```

The `call` method forwards all remaining gas by default and accepts a gas limit:

```solidity
receiver.call{value: 1 ether, gas: 50000}("");
```

### 6.9 receive and fallback

**receive.** Triggered when Ether is sent with no calldata:

```solidity
receive() external payable {
    emit Received(msg.sender, msg.value);
}
```

**fallback.** Triggered when a called function does not exist (or when Ether is sent with calldata and no receive function):

```solidity
fallback() external payable {
    // handle unknown function calls
}
```

### 6.10 Inheritance and Constructor Chaining

Solidity supports multiple inheritance with C3 linearization (resolution order).

```solidity
contract Base {
    uint256 public x;

    constructor(uint256 _x) {
        x = _x;
    }
}

contract Derived is Base {
    uint256 public y;

    constructor(uint256 _x, uint256 _y) Base(_x) {
        y = _y;
    }
}
```

**Virtual Override.** Functions to be overridden must be marked `virtual`; the overriding function must be marked `override`:

```solidity
contract A {
    function foo() public virtual returns (uint256) { return 1; }
}

contract B is A {
    function foo() public override returns (uint256) { return 2; }
}
```

### 6.11 Abstract Contracts and Interfaces

Abstract contracts have at least one unimplemented function:

```solidity
abstract contract AbstractToken {
    function balanceOf(address) public view virtual returns (uint256);
}
```

Interfaces declare function signatures without implementations (no state variables, no constructors):

```solidity
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
}
```

### 6.12 Libraries

Libraries are stateless contracts deployed once and called via `DELEGATECALL`:

```solidity
library SafeMath {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "overflow");
        return c;
    }
}

contract MyContract {
    using SafeMath for uint256;

    function increment(uint256 x) external pure returns (uint256) {
        return x.add(1);
    }
}
```

**Import Syntax.**

```solidity
import "./SafeMath.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
```

## Examples

### Example 6.1: Complete ERC-20-like Token

```solidity
pragma solidity ^0.8.0;

contract SimpleToken {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _totalSupply;
        balanceOf[msg.sender] = _totalSupply;
    }

    function transfer(address to, uint256 amount) external returns (bool) {
        require(balanceOf[msg.sender] >= amount, "insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }
}
```

### Example 6.2: Checks-Effects-Interactions Pattern

```solidity
function withdraw() external {
    uint256 amount = balances[msg.sender];  // Checks
    require(amount > 0, "no balance");

    balances[msg.sender] = 0;              // Effects (state change before external call)

    (bool success, ) = msg.sender.call{value: amount}(""); // Interactions
    require(success, "transfer failed");
}
```

## Summary

Solidity is the primary language for EVM smart contract development. Key concepts include static typing, gas-aware design, data location semantics (storage/memory/calldata), function visibility and mutability modifiers, event-driven logging, and multiple inheritance via C3 linearization. Security-critical patterns such as checks-effects-interactions and proper error handling with custom errors are essential for robust contract design.

## Exercises

### Review Questions

1. What is the difference between `storage` and `memory`? Give an example where each is required.
2. Explain the purpose of the `payable` modifier. What happens if a non-payable function receives Ether?
3. Why should state changes be made before external calls (checks-effects-interactions)?
4. What is the C3 linearization algorithm and why is it needed in Solidity inheritance?
5. Compare `send`, `transfer`, and `call` for sending Ether. Which is recommended and why?

### Application Problems

6. Write a contract `Voting` that allows token holders to vote on proposals. Include:
   - `Proposal` struct with description and vote count
   - `createProposal(string)` function
   - `vote(uint256 proposalId)` function (one vote per address)
   - Events for proposal creation and voting
7. Implement a `TimeLock` contract that holds Ether and releases it only after a specified timestamp. Use a custom error for failed withdrawals.
8. Write a library `ArrayUtils` with a function `find(uint256[] storage, uint256 value) returns (int256)` that returns the index of value or -1 if not found. Use a `for` loop.

### Challenge Problem

9. **(Diamond Multi-Facet Proxy).** Implement a minimal diamond proxy (EIP-2535) in Solidity. The diamond must:
   - Use `delegatecall` to route function calls to facet contracts.
   - Maintain a mapping of 4-byte function selectors to facet addresses.
   - Support adding and removing functions via a `DiamondCut` event.
   - Include a `fallback` function that looks up the selector and delegates.
   
   Explain how this design enables upgradeable contracts beyond the transparent proxy pattern.
