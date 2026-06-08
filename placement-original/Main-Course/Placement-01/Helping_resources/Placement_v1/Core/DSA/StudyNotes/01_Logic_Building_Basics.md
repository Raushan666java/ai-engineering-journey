# 🧠 Logic Building: Basic to Advanced

## 1. Foundational Logic Skills

### 1.1 Pattern Recognition
Pattern recognition is the ability to identify recurring structures in problems. This is the foundation of algorithmic thinking.

**Exercise 1:** Find the next number in the sequence: 2, 6, 12, 20, 30, ?
- Analysis: Differences between consecutive terms are 4, 6, 8, 10...
- Pattern: Each difference increases by 2
- Next number: 30 + 12 = 42

**Exercise 2:** Complete the pattern: 1, 4, 9, 16, 25, ?
- Analysis: These are perfect squares
- Pattern: n² where n starts from 1
- Next number: 6² = 36

### 1.2 Breaking Down Problems
Complex problems become manageable when broken into smaller parts.

**Technique: Decomposition**
1. Identify the main goal
2. Break it into sub-problems
3. Solve each sub-problem
4. Combine solutions

**Example:** Calculate the sum of even numbers from 1 to 100
- Sub-problem 1: Identify even numbers (2, 4, 6...)
- Sub-problem 2: Sum them up
- Solution: Use the formula n(n+1) where n=50, or 50×51 = 2550

### 1.3 Logical Operators
Understanding logical operations is crucial for programming.

```
AND (&&): true only when both conditions are true
OR (||): true when at least one condition is true
NOT (!): inverts the truth value
```

**Truth Table Exercise:**
```
A    B    A && B    A || B    !A
T    T      T         T       F
T    F      F         T       F
F    T      F         T       T
F    F      F         F       T
```

## 2. Intermediate Logic Skills

### 2.1 Conditional Logic
Conditional logic involves making decisions based on conditions.

**Exercise:** FizzBuzz Problem
- Print numbers from 1 to 100
- For multiples of 3, print "Fizz"
- For multiples of 5, print "Buzz"
- For multiples of both, print "FizzBuzz"

```java
for (int i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        System.out.println("FizzBuzz");
    } else if (i % 3 == 0) {
        System.out.println("Fizz");
    } else if (i % 5 == 0) {
        System.out.println("Buzz");
    } else {
        System.out.println(i);
    }
}
```

### 2.2 Recursive Thinking
Recursion is solving a problem by breaking it into smaller instances of the same problem.

**Example:** Factorial calculation
```java
public int factorial(int n) {
    // Base case
    if (n == 0 || n == 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}
```

**Exercise:** Calculate the nth Fibonacci number recursively
```java
public int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### 2.3 Logical Puzzles
Puzzles enhance critical thinking and problem-solving abilities.

**Puzzle 1: River Crossing**
A farmer needs to cross a river with a wolf, a goat, and a cabbage. The boat can only carry the farmer and one item. If left alone, the wolf will eat the goat, and the goat will eat the cabbage. How can the farmer get everything across?

**Solution:**
1. Take goat across, return alone
2. Take wolf across, bring goat back
3. Take cabbage across, return alone
4. Take goat across

**Puzzle 2: Light Bulbs and Switches**
You have three switches outside a room, each connected to one of three light bulbs inside. You can flip the switches as many times as you want, but can only enter the room once. How do you determine which switch controls which bulb?

**Solution:**
1. Turn on switch 1 for several minutes, then turn it off
2. Turn on switch 2 and enter the room
3. The hot bulb corresponds to switch 1, the lit bulb to switch 2, and the cold, unlit bulb to switch 3

## 3. Advanced Logic Skills

### 3.1 Algorithmic Thinking
Algorithmic thinking involves creating step-by-step procedures to solve problems efficiently.

**Example: Binary Search**
```java
public int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Not found
}
```

### 3.2 Optimization Thinking
Optimization involves finding the most efficient solution to a problem.

**Example: Finding the maximum subarray sum**
```java
// Brute force: O(n³) time
public int maxSubarraySumBruteForce(int[] nums) {
    int maxSum = Integer.MIN_VALUE;
    for (int i = 0; i < nums.length; i++) {
        for (int j = i; j < nums.length; j++) {
            int sum = 0;
            for (int k = i; k <= j; k++) {
                sum += nums[k];
            }
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}

// Optimized: O(n) time (Kadane's algorithm)
public int maxSubarraySum(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```

### 3.3 Proof by Contradiction
This technique involves assuming the opposite of what you want to prove, then showing this leads to a contradiction.

**Example: Prove that √2 is irrational**
1. Assume √2 is rational, so √2 = a/b where a and b are integers with no common factors
2. Then 2 = a²/b²
3. So a² = 2b²
4. This means a² is even, so a must be even
5. If a is even, then a = 2k for some integer k
6. Substituting: 2b² = (2k)² = 4k²
7. So b² = 2k²
8. This means b² is even, so b must be even
9. But if both a and b are even, they have a common factor of 2
10. This contradicts our assumption that a and b have no common factors
11. Therefore, √2 cannot be rational

## 4. Logic in Programming

### 4.1 Boolean Logic in Code
```java
// Short-circuit evaluation
if (obj != null && obj.getValue() > 0) {
    // Safe access to obj.getValue() only if obj is not null
}

// De Morgan's Laws
// !(A && B) is equivalent to !A || !B
// !(A || B) is equivalent to !A && !B
```

### 4.2 Logical Problem Solving Steps
1. **Understand the problem** - Identify inputs, outputs, constraints
2. **Plan a solution** - Choose appropriate algorithms and data structures
3. **Implement the solution** - Write clean, efficient code
4. **Test and debug** - Verify with test cases, edge cases
5. **Optimize if needed** - Improve time/space complexity

### 4.3 Common Logical Fallacies in Programming
- **Off-by-one errors** - Incorrect loop boundaries
- **Infinite loops** - Missing exit conditions
- **Confusing AND/OR logic** - Incorrect boolean expressions
- **Assuming valid input** - Not handling edge cases

## 5. Practice Problems

### Problem 1: Logical Sequence
Find the next two numbers: 1, 3, 6, 10, 15, ?

**Solution:**
- Differences: 2, 3, 4, 5...
- Pattern: Each number is the sum of its position and the previous number
- Next numbers: 15 + 6 = 21, 21 + 7 = 28

### Problem 2: Light Bulbs
You have 100 light bulbs initially turned off. You perform 100 iterations: in the ith iteration, you toggle every ith bulb (if it's off, you turn it on; if it's on, you turn it off). Which bulbs will be on after 100 iterations?

**Solution:**
- A bulb will be toggled once for each of its factors
- Bulbs with an odd number of factors will end up on
- Only perfect squares have an odd number of factors
- So bulbs 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 will be on

### Problem 3: Logical Deduction
In a village, there are two types of people: knights who always tell the truth and knaves who always lie. You meet three villagers A, B, and C.
- A says: "B is a knight."
- B says: "A and C are the same type."
- C says: "I am a knight."

What are A, B, and C?

**Solution:**
- If C is a knight, then C's statement is true
- If C is a knave, then C's statement is false
- Either way, C's statement doesn't help us determine C's type directly
- Let's try cases for A and B:
  - If A is a knight, then B is a knight (A's statement is true)
  - If B is a knight, then A and C are the same type (B's statement is true)
  - This means A and C are both knights
  - This is consistent with all statements
- Therefore, A is a knight, B is a knight, and C is a knight

### Problem 4: Weighing Puzzle
You have 9 identical-looking coins, but one is counterfeit and lighter than the others. Using a balance scale, find the counterfeit coin in just 2 weighings.

**Solution:**
1. Divide the coins into 3 groups of 3 coins each: G1, G2, G3
2. First weighing: Compare G1 vs G2
   - If they balance, the counterfeit is in G3. Weigh any 2 coins from G3.
   - If they don't balance, take the lighter group. Weigh any 2 coins from that group.
3. Second weighing:
   - If they balance, the remaining coin is counterfeit
   - If not, the lighter coin is counterfeit

### Problem 5: Logical Grid Puzzle
Three friends (Alex, Beth, and Charlie) each have a different favorite color (red, green, blue) and a different favorite sport (tennis, swimming, basketball). Given the clues:
- The person who likes red doesn't like basketball
- Beth likes swimming
- Charlie doesn't like blue
- Alex doesn't like tennis or red

Determine each person's favorite color and sport.

**Solution:**
- Beth likes swimming (given)
- Alex doesn't like tennis or red
- Charlie doesn't like blue
- The person who likes red doesn't like basketball

Step by step:
1. Since Beth likes swimming, she doesn't like tennis or basketball
2. Since Alex doesn't like tennis, and Beth has swimming, Charlie must like tennis
3. Since Alex doesn't like red, and the red-liker doesn't like basketball, Beth must like red
4. Since Charlie doesn't like blue, and Beth likes red, Charlie must like green
5. This means Alex likes blue
6. Since Beth likes swimming and red, and Charlie likes tennis and green, Alex must like basketball and blue

Final answer:
- Alex: blue, basketball
- Beth: red, swimming
- Charlie: green, tennis

## 6. Logic Improvement Exercises

### Exercise 1: Truth Tables
Complete the truth table for the expression: (A OR B) AND (NOT C)

```
A    B    C    A OR B    NOT C    (A OR B) AND (NOT C)
T    T    T      T         F             F
T    T    F      T         T             T
T    F    T      T         F             F
T    F    F      T         T             T
F    T    T      T         F             F
F    T    F      T         T             T
F    F    T      F         F             F
F    F    F      F         T             F
```

### Exercise 2: Logical Equivalence
Prove that (A AND B) OR (A AND C) is logically equivalent to A AND (B OR C)

**Solution:**
```
(A AND B) OR (A AND C)
= A AND (B OR C)    [By distributive property]
```

### Exercise 3: Inductive Reasoning
Prove that the sum of the first n positive integers is n(n+1)/2.

**Solution:**
1. Base case: For n=1, sum = 1 = 1(1+1)/2 = 1
2. Inductive hypothesis: Assume true for n=k, so sum of first k integers is k(k+1)/2
3. Inductive step: For n=k+1, sum = k(k+1)/2 + (k+1) = (k(k+1) + 2(k+1))/2 = (k+1)(k+2)/2 = (k+1)((k+1)+1)/2
4. Therefore, the formula holds for all positive integers n

### Exercise 4: Logical Puzzles
You have two hourglasses, one measuring 7 minutes and one measuring 4 minutes. How can you measure exactly 9 minutes?

**Solution:**
1. Start both hourglasses simultaneously
2. When the 4-minute hourglass finishes, flip it immediately
3. When the 7-minute hourglass finishes (7 minutes total), flip it
4. When the 4-minute hourglass finishes again (8 minutes total), flip the 7-minute hourglass
5. The 7-minute hourglass now has 1 minute of sand in it
6. When this remaining minute runs out, exactly 9 minutes will have passed

### Exercise 5: Algorithmic Logic
Design an algorithm to find the second largest element in an array without sorting.

```java
public int findSecondLargest(int[] arr) {
    if (arr.length < 2) {
        throw new IllegalArgumentException("Array must have at least 2 elements");
    }
    
    int largest = Integer.MIN_VALUE;
    int secondLargest = Integer.MIN_VALUE;
    
    for (int num : arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num != largest) {
            secondLargest = num;
        }
    }
    
    return secondLargest;
}
```

## 7. Advanced Logic Challenges

### Challenge 1: The Monty Hall Problem
You're on a game show with three doors. Behind one door is a car; behind the others are goats. You pick a door. The host, who knows what's behind each door, opens another door revealing a goat. Should you switch your choice to the remaining door?

**Solution:**
Yes, you should switch. Your initial probability of choosing the car is 1/3. The probability that the car is behind one of the other doors is 2/3. When the host reveals a goat, the entire 2/3 probability is now concentrated on the remaining door, so switching gives you a 2/3 chance of winning.

### Challenge 2: Knights and Knaves Advanced
You encounter two people, A and B. A says, "At least one of us is a knave." What are A and B?

**Solution:**
- If A is a knight, then A's statement is true, meaning at least one of them is a knave. So B must be a knave.
- If A is a knave, then A's statement is false, meaning neither is a knave. This is a contradiction.
- Therefore, A is a knight and B is a knave.

### Challenge 3: The Blue-Eyed Islanders Puzzle
On an island, there are 100 people with blue eyes, 100 with brown eyes, and 100 with green eyes. They have no mirrors and never discuss eye color. One day, a visitor announces that at least one person has blue eyes. If a person knows their own eye color, they must leave at midnight. How many days until all blue-eyed people leave?

**Solution:**
100 days. Each blue-eyed person sees 99 others with blue eyes but doesn't know their own eye color. If there was only 1 blue-eyed person, they would leave on day 1. If there were 2, each would see 1 other blue-eyed person, realize they must also have blue eyes (otherwise the other would have left on day 1), and both would leave on day 2. This logic extends: with 100 blue-eyed people, they all leave on day 100.

## 8. Logic in Competitive Programming

### 8.1 Time and Space Complexity Analysis
Understanding the efficiency of algorithms is crucial.

**Time Complexity Hierarchy:**
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)

**Example Analysis:**
```java
// O(n) time complexity
for (int i = 0; i < n; i++) {
    // O(1) operation
}

// O(n²) time complexity
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        // O(1) operation
    }
}

// O(log n) time complexity
int i = n;
while (i > 0) {
    i /= 2;
    // O(1) operation
}
```

### 8.2 Problem-Solving Framework
1. **Understand** - Read the problem carefully
2. **Match** - Identify the problem type and applicable techniques
3. **Plan** - Design an algorithm
4. **Implement** - Write clean code
5. **Review** - Test with different cases
6. **Optimize** - Improve if needed

### 8.3 Common Logical Patterns
- **Greedy algorithms** - Make locally optimal choices
- **Divide and conquer** - Break problem into subproblems
- **Dynamic programming** - Store solutions to overlapping subproblems
- **Backtracking** - Try all possibilities with pruning
- **Graph algorithms** - BFS, DFS, shortest paths

## 9. Logic Improvement Plan

### Week 1-2: Foundational Logic
- Solve 5 pattern recognition problems daily
- Complete 3 logical puzzles weekly
- Practice truth tables and boolean logic

### Week 3-4: Intermediate Logic
- Implement 5 recursive algorithms
- Solve 3 optimization problems
- Practice conditional logic with complex scenarios

### Week 5-6: Advanced Logic
- Tackle 3 advanced logical puzzles weekly
- Implement algorithms with optimal time complexity
- Practice proof techniques

### Week 7-8: Applied Logic in Programming
- Solve 10 DSA problems weekly
- Analyze and optimize existing algorithms
- Create your own logical puzzles

## 10. Resources for Further Practice

### Online Platforms
- LeetCode
- HackerRank
- CodeSignal
- Project Euler

### Books
- "How to Solve It" by George Pólya
- "Thinking, Fast and Slow" by Daniel Kahneman
- "Gödel, Escher, Bach" by Douglas Hofstadter
- "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein

### Logic Puzzle Collections
- Raymond Smullyan's logic puzzles
- Martin Gardner's mathematical puzzles
- "The Lady or the Tiger?" puzzle collection
- Chess puzzles for strategic thinking