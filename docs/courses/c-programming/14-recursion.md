# Chapter 14: Recursion

> **Previous:** [The Preprocessor](./13-preprocessor.md) | **Next:** [Linked Lists](./15-linked-lists.md)

## Learning Objectives

- Understand the recursive function model: base case and recursive case
- Trace recursive function calls using the call stack
- Distinguish tail recursion from non-tail recursion
- Compare recursion and iteration in terms of clarity and performance
- Solve classic problems using recursion


### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Recursion Fundamentals | A function calling itself with a smaller subproblem | Every recursive function needs a base case and a recursive case |
| Call Stack | Each recursive call pushes a new stack frame | Deep recursion can overflow the stack (stack overflow) |
| Tail Recursion | Recursive call is the last operation in the function | Modern compilers optimize tail recursion into iteration |
| Classic Examples | Factorial, Fibonacci, tower of Hanoi | These illustrate the power and pitfalls of recursion |
| Recursion vs Iteration | Recursion trades clarity for stack usage | Use recursion for naturally recursive structures (trees, graphs) |


```mermaid
flowchart LR
    A["14.1 Base Case & Recursive Case"] --> B["14.2 Call Stack"]
    B --> C["14.3 Tail Recursion"]
    C --> D["14.4 Classic Examples"]
    D --> E["14.5 Recursion vs Iteration"]
    E --> F["14.6 Performance & Optimization"]
    F --> G["Summary & Exercises"]
```
## 14.1 Fundamentals of Recursion

![C Recursion, Linked Lists, Stacks and Queues](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch14-recursion-ds.png)

A recursive function is one that calls itself. Every recursive function must satisfy two conditions:

1. **Base case:** A condition that stops the recursion (no further calls).
2. **Recursive case:** The function calls itself with a modified argument that moves toward the base case.

```c
void countdown(int n)
{
    if (n <= 0) {       /* base case */
        printf("Go!\n");
        return;
    }

    printf("%d...\n", n);
    countdown(n - 1);   /* recursive case */
}
```

**Trace for `countdown(3)`:**
```
countdown(3) â†’ prints "3..."
    â†’ countdown(2) â†’ prints "2..."
        â†’ countdown(1) â†’ prints "1..."
            â†’ countdown(0) â†’ prints "Go!"
            â†’ returns
        â†’ returns
    â†’ returns
â†’ returns
```

> **One-Sentence Takeaway:** Every recursion needs a base case that stops the recursion and a recursive case that moves toward the base case

## 14.2 The Call Stack and Recursion

Each recursive call creates a new stack frame containing local variables and the return address. Deep recursion can exhaust stack space.

```c
#include <stdio.h>

void recurse(int depth)
{
    printf("Depth %d: stack frame at %p\n", depth, (void*)&depth);

    if (depth < 5) {
        recurse(depth + 1);
    }

    printf("Depth %d: returning\n", depth);
}

int main(void)
{
    recurse(1);
    return 0;
}
```

**Output:**
```
Depth 1: stack frame at 0x7fff5fbff6dc
Depth 2: stack frame at 0x7fff5fbff6bc
Depth 3: stack frame at 0x7fff5fbff69c
Depth 4: stack frame at 0x7fff5fbff67c
Depth 5: stack frame at 0x7fff5fbff65c
Depth 5: returning
Depth 4: returning
Depth 3: returning
Depth 2: returning
Depth 1: returning
```

> **One-Sentence Takeaway:** Each recursive call consumes stack space — deep recursion causes stack overflow


> **Warning:** Each recursive call consumes a stack frame (~24-32 bytes). For `fib(1000000)`, the stack would need gigabytes — use iteration or tail recursion instead.

## 14.3 Classic Recursive Examples

### 14.3.1 Factorial

```c
#include <stdio.h>

unsigned long long factorial(int n)
{
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main(void)
{
    for (int i = 0; i <= 10; i++) {
        printf("%d! = %llu\n", i, factorial(i));
    }
    return 0;
}
```

**Output:**
```
0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
7! = 5040
8! = 40320
9! = 362880
10! = 3628800
```

### 14.3.2 Fibonacci Sequence

```c
#include <stdio.h>

/* Inefficient recursive version â€” O(2^n) */
unsigned long long fib_recursive(int n)
{
    if (n <= 1) {
        return n;
    }
    return fib_recursive(n - 1) + fib_recursive(n - 2);
}

/* Efficient iterative version â€” O(n) */
unsigned long long fib_iterative(int n)
{
    if (n <= 1) return n;

    unsigned long long a = 0, b = 1, c;
    for (int i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

int main(void)
{
    printf("Recursive Fibonacci:\n");
    for (int i = 0; i <= 10; i++) {
        printf("fib(%d) = %llu\n", i, fib_recursive(i));
    }

    printf("\nIterative Fibonacci:\n");
    for (int i = 0; i <= 10; i++) {
        printf("fib(%d) = %llu\n", i, fib_iterative(i));
    }

    return 0;
}
```

**Output:**
```
Recursive Fibonacci:
fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
fib(6) = 8
fib(7) = 13
fib(8) = 21
fib(9) = 34
fib(10) = 55

Iterative Fibonacci:
fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
fib(6) = 8
fib(7) = 13
fib(8) = 21
fib(9) = 34
fib(10) = 55
```

The recursive Fibonacci is exponential (O(2^n)) and recomputes the same values repeatedly. The iterative version is linear (O(n)). For `n = 50`, the recursive version would take centuries.

### 14.3.3 Tower of Hanoi

```c
#include <stdio.h>

void hanoi(int n, char from, char to, char aux)
{
    if (n == 1) {
        printf("Move disk 1 from %c to %c\n", from, to);
        return;
    }

    hanoi(n - 1, from, aux, to);
    printf("Move disk %d from %c to %c\n", n, from, to);
    hanoi(n - 1, aux, to, from);
}

int main(void)
{
    int n = 3;
    printf("Tower of Hanoi â€” %d disks:\n", n);
    hanoi(n, 'A', 'C', 'B');
    return 0;
}
```

**Output:**
```
Tower of Hanoi â€” 3 disks:
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
```

### 14.3.4 Binary Search

```c
#include <stdio.h>

int binary_search(const int arr[], int left, int right, int target)
{
    if (left > right) {
        return -1;          /* not found */
    }

    int mid = left + (right - left) / 2;

    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] < target) {
        return binary_search(arr, mid + 1, right, target);
    } else {
        return binary_search(arr, left, mid - 1, target);
    }
}

int main(void)
{
    int numbers[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 72};
    int n = sizeof(numbers) / sizeof(numbers[0]);

    int targets[] = {23, 1, 72, 45};
    for (int i = 0; i < 4; i++) {
        int idx = binary_search(numbers, 0, n - 1, targets[i]);
        if (idx >= 0) {
            printf("%d found at index %d\n", targets[i], idx);
        } else {
            printf("%d not found\n", targets[i]);
        }
    }

    return 0;
}
```

**Output:**
```
23 found at index 5
1 not found
72 found at index 9
45 found at index 7
```


> **One-Sentence Takeaway:** Tail recursion places the recursive call as the final operation enabling optimization
> **Pro Tip:** Write recursive calls as the final statement to enable tail-call optimization.
## 14.4 Tail Recursion

A recursive call is **tail-recursive** if it is the last operation in the function, and the function's return value is the recursive call's return value.

```c
/* Tail-recursive factorial */
unsigned long long fact_tail(int n, unsigned long long accumulator)
{
    if (n <= 1) {
        return accumulator;
    }
    return fact_tail(n - 1, n * accumulator);
}

unsigned long long factorial(int n)
{
    return fact_tail(n, 1);
}
```

**Why tail recursion matters:** A compiler that performs **tail-call optimization** (TCO) can reuse the current stack frame for the recursive call, converting recursion into iteration and preventing stack growth.

Not all compilers perform TCO. GCC and Clang do with `-O2` optimization.

```c
/* Non-tail: multiplication happens after recursive call returns */
return n * factorial(n - 1);      /* not tail-recursive */

/* Tail: recursive call is the final operation */
return fact_tail(n - 1, n * acc); /* tail-recursive â€” potential TCO */
```


> **One-Sentence Takeaway:** Classic recursive problems include factorial Fibonacci and Tower of Hanoi
## 14.5 Recursion vs. Iteration

| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| Clarity | Often clearer for naturally recursive problems (trees, divide-and-conquer) | Usually clearer for simple repetition |
| Stack usage | Each call uses stack space â€” risk of stack overflow for deep recursion | Uses fixed stack space (one frame) |
| Performance | Function call overhead; may be slower | Generally faster |
| Optimization | Tail recursion can be optimized to iteration | No optimization needed |
| Infinite | Can overflow the stack | Can run forever (no stack issue) |

> **One-Sentence Takeaway:** Use recursion for tree traversal and divide-and-conquer; use iteration for simple linear problems

## 14.6 Common Pitfalls

**Missing base case:**
```c
void infinite(int n) {
    printf("%d\n", n);
    infinite(n + 1);   /* no base case â€” runs until stack overflow */
}
```

**No progress toward base case:**
```c
int bad(int n) {
    if (n == 0) return 0;
    return n + bad(n);   /* never changes n â€” infinite recursion */
}
```

**Stack overflow from deep recursion:**
```c
/* Factorial of 100,000 will likely overflow the stack */
```


> **One-Sentence Takeaway:** Memoization caches recursive results to reduce exponential to linear time
> **Remember:** Memoization transforms exponential algorithms into linear time by caching results.
## 14.7 Problems Suited to Recursion

1. **Tree traversal** (file systems, expression trees, binary search trees)
2. **Divide-and-conquer algorithms** (merge sort, quick sort, binary search)
3. **Backtracking** (N-queens, maze solving, Sudoku)
4. **Recursive data structures** (linked lists, trees, graphs)
5. **Mathematical definitions** that are naturally recursive (factorial, Fibonacci, GCD)

## Concept Comparison Table

| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| Mechanism | Function calls itself | Loop constructs (for, while) |
| Stack usage | O(depth) stack frames | O(1) stack usage |
| Termination | Base case | Loop condition |
| Readability | Natural for recursive structures | More explicit control flow |
| Optimization | Tail recursion can be optimized | Typically faster |
| Risk | Stack overflow | Infinite loop (less severe) |

## Quick Reference

| Pattern | Code |
|---------|------|
| Base case | `if (n <= 1) return 1;` |
| Recursive case | `return n * factorial(n - 1);` |
| Tail recursive | `int fact(int n, int acc) { if (n <= 1) return acc; return fact(n-1, n*acc); }` |
| Memoized | `if (memo[n] != -1) return memo[n]; memo[n] = fib(n-1) + fib(n-2);` |
| Tree traversal | `postorder(node) { postorder(node->left); postorder(node->right); visit(node); }` |

## Cross-Application Matrix

| Domain | Recursion Pattern |
|--------|------------------|
| File system | Recursively traverse directories |
| Parsing | Recursive descent parser for expressions |
| Sorting | QuickSort (divide and conquer) |
| Graphics | Subdivision surfaces (recursive refinement) |
| AI / Games | Minimax with recursive game tree evaluation |

## Chapter Quiz

1. What is the base case in `int fact(int n) { if (n <= 1) return 1; return n * fact(n-1); }`?
   A) `return n * fact(n-1);`
   B) `n <= 1`
   C) `n * fact(n-1)`
   D) `return 1`

<details><summary>Answer</summary>**B)** `n <= 1` is the condition that stops the recursion — when true, the function returns 1 without recursing.</details>

2. What is the worst-case stack depth for recursive Fibonacci without memoization?
   A) O(log n)
   B) O(n)
   C) O(2ⁿ)
   D) O(n²)

<details><summary>Answer</summary>**B)** While the time complexity is O(2ⁿ), the stack depth is O(n) because each branch recurses down to the base case.</details>

3. What does tail recursion optimization do?
   A) Makes the function faster by inlining
   B) Reuses the current stack frame for the recursive call
   C) Adds memoization automatically
   D) Converts recursion to a separate thread

<details><summary>Answer</summary>**B)** The compiler reuses the current function's stack frame for the tail call, preventing stack growth.</details>

## Summary

- A recursive function has a base case (stopping condition) and a recursive case that moves toward the base.
- Each recursive call creates a new stack frame; deep recursion can cause stack overflow.
- Tail recursion places the recursive call as the final operation; compilers may optimize it to iteration.
- Recursion excels at naturally recursive problems (binary search, tree traversal, divide-and-conquer).
- Iteration is generally more efficient and should be preferred for simple loops.
- Classic recursive problems: factorial, Fibonacci, Tower of Hanoi, binary search.

## Exercises

### Review Questions

1. What are the two essential parts of every recursive function? What happens if either is missing?
2. How does the call stack grow during recursion? What happens when it runs out of space?
3. What is tail recursion? Why is it significant for optimization?
4. Why is recursive Fibonacci (naive implementation) exponential? How can it be improved?
5. When would you choose recursion over iteration? When would you choose iteration over recursion?

### Application Problems

1. Implement a recursive function `int sum_digits(int n)` that returns the sum of the digits of a non-negative integer. Example: `sum_digits(1234)` â†’ 10.
2. Implement a recursive function `int gcd(int a, int b)` using Euclid's algorithm. Compare with an iterative version.
3. Implement a recursive function `void print_reverse(const char *s)` that prints a string in reverse without using loops or `strlen`. *(Hint: recurse until '\0', then print on the way back.)*
4. Implement the recursive function `int power(int base, int exp)` that computes `base^exp` for non-negative exponents. Then optimize it using **exponentiation by squaring**.

### Challenge Problem

Implement a program that solves the **N-Queens problem** using backtracking recursion. Place N queens on an NÃ—N chessboard so that no two queens threaten each other. Print all distinct solutions for N = 8.

The function signature should be something like:
```c
int solve(int board[], int row, int n);
```

Where `board[row] = col` means a queen is placed at (row, col). Use recursion to try placing a queen in each column of the current row, checking diagonals and columns for conflicts. Count and print all 92 solutions for an 8Ã—8 board.
