# 2. LEMONADE CHANGE (LeetCode 860)

## Problem Statement
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time. Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you don't have any change in hand at first. Given an integer array `bills` where `bills[i]` is the bill the `i-th` customer pays, return `true` if you can provide every customer with the correct change, or `false` otherwise.

## Conceptual Understanding

### The Greedy Strategy
We need to give exact change for each transaction. The key insight is:
- **$5 bills**: Keep all (no change needed)
- **$10 bills**: Give $5 change (need at least one $5)
- **$20 bills**: Give $15 change (prefer $10 + $5, or three $5s)

### Why Greedy Works?
1. **Local optimum**: At each step, make the change that allows future transactions
2. **$10 preference**: When giving change for $20, prefer using $10 + $5 over three $5s
3. **Preserve $5s**: Save $5 bills for future $10 transactions

### State Tracking
- Count of $5 bills available
- Count of $10 bills available
- Process each customer in order

## Solution Approach

### Method 1: Greedy with State Tracking
```java
public boolean lemonadeChange(int[] bills) {
    int five = 0, ten = 0;  // Track available bills
    
    for (int bill : bills) {
        if (bill == 5) {
            five++;  // Accept $5, no change needed
        } else if (bill == 10) {
            if (five == 0) return false;  // Need $5 for change
            five--;
            ten++;
        } else {  // bill == 20
            // Try to give $10 + $5 first (greedy choice)
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {  // Fallback: three $5s
                five -= 3;
            } else {
                return false;  // Cannot give change
            }
        }
    }
    return true;
}
```

### Why This Greedy Strategy Works:
1. **$10 + $5 preference**: Saves $5 bills for future $10 transactions
2. **Three $5s fallback**: When no $10 available
3. **Early failure detection**: Return false immediately when change impossible

## Time & Space Complexity
- **Time**: O(n) - single pass through bills
- **Space**: O(1) - constant space for counters

## Edge Cases & Testing
```java
// Test Case 1: Basic successful case
int[] bills1 = {5, 5, 5, 10, 20};  // true

// Test Case 2: Cannot give change for $10
int[] bills2 = {10};  // false

// Test Case 3: Cannot give change for $20
int[] bills3 = {5, 5, 20};  // false

// Test Case 4: Complex case
int[] bills4 = {5, 5, 10, 10, 20};  // false (need 3 fives for second 20)

// Test Case 5: All $5s
int[] bills5 = {5, 5, 5};  // true
```

## Alternative Approaches

### Method 2: Simulation with Queue (Less Efficient)
```java
public boolean lemonadeChangeQueue(int[] bills) {
    Queue<Integer> change = new LinkedList<>();
    
    for (int bill : bills) {
        if (bill == 5) {
            change.offer(5);
        } else if (bill == 10) {
            if (!change.contains(5)) return false;
            change.remove(5);  // Remove one 5
            change.offer(10);
        } else {  // 20
            // Try to remove 10 + 5
            if (change.contains(10) && change.contains(5)) {
                change.remove(10);
                change.remove(5);
            } else if (Collections.frequency(change, 5) >= 3) {
                change.remove(5);
                change.remove(5);
                change.remove(5);
            } else {
                return false;
            }
            change.offer(20);
        }
    }
    return true;
}
// Time: O(n²) due to contains/remove operations
```

## Key Insights
1. **Greedy choice**: Prefer $10 + $5 over three $5s for $20 change
2. **State minimization**: Only track counts of $5 and $10 bills
3. **Early termination**: Fail fast when change impossible
4. **No need to track $20s**: They don't provide change

## Similar Problems
- **Gas Station (134)**: Circular resource management
- **Task Scheduler (621)**: Resource scheduling with constraints
- **Jump Game (55)**: Resource availability checking

## Interview Tips
- Explain why preferring $10 + $5 is greedy optimal
- Discuss why we don't need to track $20 bills
- Mention the queue-based approach and its inefficiency
- Consider edge cases with insufficient change</content>
<parameter name="filePath">c:\xampp\htdocs\Placement\practice\dsa\greedy\2_lemonade_change.md