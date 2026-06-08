# 3. GAS STATION (LeetCode 134)

## Problem Statement
There are `n` gas stations along a circular route, where the amount of gas at the `i-th` station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `i-th` station to the `(i+1)-th` station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.

## Conceptual Understanding

### The Circular Nature
- **Circular route**: Last station connects back to first
- **Net gas calculation**: `gas[i] - cost[i]` at each station
- **Total gas vs total cost**: Must have non-negative net gas overall

### Greedy Strategy
1. **Start from station 0**
2. **Track current tank level**
3. **When tank goes negative, reset from next station**
4. **Verify total gas >= total cost**

### Why This Works
- **Single solution guarantee**: Problem states if solution exists, it's unique
- **Greedy reset**: When we can't reach next station, start over from there
- **Total check**: Ensures circuit completion is possible

## Solution Approach

### Method 1: Single Pass with Reset
```java
public int canCompleteCircuit(int[] gas, int[] cost) {
    int totalGas = 0, totalCost = 0;
    int start = 0, tank = 0;

    for (int i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        // If tank goes negative, reset from next station
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    // If total gas >= total cost, we can complete the circuit
    return totalGas >= totalCost ? start : -1;
}
```

### Why This Approach Works:
- **Greedy reset**: When current tank becomes negative, we know we can't start from any station in between
- **Total verification**: Ensures the circuit can be completed
- **Single pass**: O(n) time complexity

## Time & Space Complexity
- **Time**: O(n) - single pass through arrays
- **Space**: O(1) - constant extra space

## Edge Cases & Testing
```java
// Test Case 1: Possible circuit
int[] gas1 = {1, 2, 3, 4, 5}, cost1 = {3, 4, 5, 1, 2};
// Result: 3 (start at station 3)

// Test Case 2: Impossible circuit
int[] gas2 = {2, 3, 4}, cost2 = {3, 4, 3};
// Result: -1

// Test Case 3: Single station
int[] gas3 = {2}, cost3 = {2};
// Result: 0

// Test Case 4: All zeros
int[] gas4 = {0, 0, 0}, cost4 = {0, 0, 0};
// Result: 0
```

## Alternative Approaches

### Method 2: Brute Force (Check All Starting Points)
```java
public int canCompleteCircuitBrute(int[] gas, int[] cost) {
    int n = gas.length;

    for (int start = 0; start < n; start++) {
        int tank = 0;
        boolean canComplete = true;

        for (int i = 0; i < n; i++) {
            int station = (start + i) % n;
            tank += gas[station] - cost[station];

            if (tank < 0) {
                canComplete = false;
                break;
            }
        }

        if (canComplete) return start;
    }
    return -1;
}
// Time: O(n²), Space: O(1) - Inefficient for large n
```

## Key Insights
1. **Greedy choice**: Reset start when tank becomes negative
2. **Total sum check**: Essential for feasibility verification
3. **Circular handling**: Modulo arithmetic in brute force
4. **Unique solution**: Problem guarantees at most one valid start

## Similar Problems
- **Jump Game (55)**: Reachability with constraints
- **Lemonade Change (860)**: Resource management simulation
- **Task Scheduler (621)**: Scheduling with resource constraints

## Interview Tips
- Explain why the greedy reset works
- Discuss the importance of total sum verification
- Compare with brute force approach
- Handle circular nature carefully</content>
<parameter name="filePath">c:\xampp\htdocs\Placement\practice\dsa\greedy\questions\3_gas_station.md