# Chapter 4: Adversarial Search and Games

---

## Learning Objectives

- Define the properties of zero-sum, perfect information games.
- Explain the Minimax algorithm and its use in decision-making for two-player games.
- Implement Alpha-Beta pruning to improve the efficiency of adversarial search.
- Evaluate the impact of heuristic evaluation functions on game-playing performance.
- Discuss the challenges of games with imperfect information or stochastic elements.

---

## Theory

![Adversarial Search and CSP](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/artificial-intelligence/ch04-adversarial-csp.png)

### Games in AI
In AI, "games" usually refers to competitive environments where multiple agents have conflicting goals. The most common type is a **zero-sum game** with **perfect information**:
- **Zero-sum**: One player's gain is the other's loss.
- **Perfect information**: All players know the complete state of the game at all times.

### The Minimax Algorithm
The Minimax algorithm determines the optimal move for a player assuming the opponent also plays optimally.
- **MAX Player**: Tries to maximize their score.
- **MIN Player**: Tries to minimize MAX's score (maximize their own).
- **Process**:
  1. Generate the complete game tree down to terminal states.
  2. Apply a utility function to terminal states.
  3. Back up values to the root:
     - For MAX nodes, take the maximum value of children.
     - For MIN nodes, take the minimum value of children.

### Alpha-Beta Pruning
Minimax explores many unnecessary branches. **Alpha-Beta pruning** allows the search to ignore branches that cannot possibly affect the final decision.
- **Alpha ($\alpha$)**: The value of the best (highest-value) choice found so far at any choice point along the path for MAX.
- **Beta ($\beta$)**: The value of the best (lowest-value) choice found so far at any choice point along the path for MIN.
- **Pruning Rule**: If $\alpha \ge \beta$, the current branch can be pruned.

### Heuristic Evaluation Functions
For complex games like Chess or Go, the game tree is too large to search to the end. Agents use **cutoff search** with an **evaluation function**:
- **Cutoff**: Stop searching at a certain depth.
- **Evaluation Function `Eval(s)`**: Estimates the desirability of non-terminal state `s`.

---

## Examples

### Example 1: Minimax on a Small Tree
Consider a 2-level game tree where MAX starts.
- **Step-by-step**:
  1. Root (MAX) has children A and B.
  2. A (MIN) has children with utilities 3 and 12. MIN chooses 3.
  3. B (MIN) has children with utilities 8 and 2. MIN chooses 2.
  4. Root (MAX) chooses between 3 and 2. MAX chooses 3.
- **Code snippet (Recursive Minimax)**:
```python
def minimax(node, depth, is_max):
    if depth == 0 or node.is_terminal():
        return node.utility
    if is_max:
        best_val = -float('inf')
        for child in node.children:
            best_val = max(best_val, minimax(child, depth - 1, False))
        return best_val
    else:
        best_val = float('inf')
        for child in node.children:
            best_val = min(best_val, minimax(child, depth - 1, True))
        return best_val
```
- **What it demonstrates**: The basic recursive structure of game tree search.

### Example 2: Alpha-Beta Pruning in Action
Suppose MAX is evaluating two moves, A and B.
- **Step-by-step**:
  1. MAX evaluates move A and finds its value is 10 ($\alpha = 10$).
  2. MAX starts evaluating move B. The first child of B (a MIN node) has a value of 5.
  3. Since MIN will choose at most 5 for move B, and MAX already has a better option (10), there is no need to evaluate the rest of B's children.
- **Expected result**: Branch B is pruned.
- **What it demonstrates**: How information from one part of the tree can prevent exploration of another.

---

## Summary

- Adversarial search is used in competitive multi-agent environments.
- Minimax provides a perfect play strategy for zero-sum games with perfect information.
- The complexity of games is often measured by their branching factor and depth.
- Alpha-Beta pruning can theoretically double the depth of search compared to pure Minimax.
- Evaluation functions are the "intelligence" in practical game-playing agents.
- Real-time games require efficient move ordering and transposition tables to manage state explosions.

---

## Exercises

### Review Questions
1. Why is the Minimax algorithm called "zero-sum"?
2. Explain the meaning of $\alpha$ and $\beta$ in pruning.
3. What is "quiescence search" and why is it used?
4. How do stochastic games (like Backgammon) differ from deterministic games (like Chess)?

### Application Problems
1. Draw a game tree for a simple game of Tic-Tac-Toe and calculate Minimax values for the first three moves.
2. Given a tree with leaf values [3, 5, 2, 9, 12, 5, 23, 23], trace the Alpha-Beta pruning process. Which nodes are skipped?
3. Design a simple evaluation function for a Connect Four game.

### Challenge Problem
1. Discuss the "Horizon Effect" in game playing. How can an agent be tricked into making a bad move by pushing an inevitable loss just beyond its search depth? Propose a method to mitigate this effect.
