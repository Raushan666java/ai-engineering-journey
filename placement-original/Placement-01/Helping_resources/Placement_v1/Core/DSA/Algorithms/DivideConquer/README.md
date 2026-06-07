# Divide and Conquer Algorithms

## Overview
Divide and Conquer is an algorithmic paradigm that breaks a problem into smaller subproblems, solves them independently, and then combines their solutions to solve the original problem.

## Key Steps
1. **Divide**: Break the problem into smaller subproblems
2. **Conquer**: Solve the subproblems recursively
3. **Combine**: Merge the solutions of subproblems into a solution for the original problem

## Complexity Analysis

### Master Theorem
For recurrence relations of the form: T(n) = aT(n/b) + f(n)
- a: number of subproblems
- b: factor by which problem size is reduced
- f(n): cost of dividing and combining

**Time Complexity**:
- **Case 1**: If f(n) = O(n^c) where c < log_b(a), then T(n) = Θ(n^(log_b(a)))
- **Case 2**: If f(n) = Θ(n^c) where c = log_b(a), then T(n) = Θ(n^c * log n)
- **Case 3**: If f(n) = Ω(n^c) where c > log_b(a), then T(n) = Θ(f(n))

**Space Complexity**:
- Typically O(log n) for the recursive call stack
- Additional space depends on specific algorithm implementation

## Common Algorithms

### 1. Binary Search
```java
public int binarySearch(int[] arr, int target, int left, int right) {
    if (left > right) return -1;
    
    int mid = left + (right - left) / 2;
    
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right);
}
```
- **Time Complexity**: O(log n)
- **Space Complexity**: O(log n) for recursive calls
- **Application**: Searching in sorted arrays

### 2. Merge Sort
```java
public void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

private void merge(int[] arr, int left, int mid, int right) {
    int[] temp = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    
    for (i = 0; i < temp.length; i++) {
        arr[left + i] = temp[i];
    }
}
```
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(n)
- **Application**: Efficient general-purpose sorting

### 3. Quick Sort
```java
public void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}

private int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    
    swap(arr, i + 1, high);
    return i + 1;
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```
- **Time Complexity**: O(n log n) average, O(n²) worst case
- **Space Complexity**: O(log n)
- **Application**: Efficient sorting with good cache performance

### 4. Strassen's Matrix Multiplication
For multiplying two n×n matrices:
```java
public int[][] strassenMultiply(int[][] A, int[][] B) {
    int n = A.length;
    int[][] C = new int[n][n];
    
    // Base case
    if (n == 1) {
        C[0][0] = A[0][0] * B[0][0];
        return C;
    }
    
    // Divide matrices into submatrices
    int[][] A11 = new int[n/2][n/2];
    int[][] A12 = new int[n/2][n/2];
    int[][] A21 = new int[n/2][n/2];
    int[][] A22 = new int[n/2][n/2];
    int[][] B11 = new int[n/2][n/2];
    int[][] B12 = new int[n/2][n/2];
    int[][] B21 = new int[n/2][n/2];
    int[][] B22 = new int[n/2][n/2];
    
    // Divide A and B into 4 submatrices each
    divideMatrix(A, A11, A12, A21, A22);
    divideMatrix(B, B11, B12, B21, B22);
    
    // Calculate 7 products using Strassen's formulas
    int[][] P1 = strassenMultiply(add(A11, A22), add(B11, B22));
    int[][] P2 = strassenMultiply(add(A21, A22), B11);
    int[][] P3 = strassenMultiply(A11, subtract(B12, B22));
    int[][] P4 = strassenMultiply(A22, subtract(B21, B11));
    int[][] P5 = strassenMultiply(add(A11, A12), B22);
    int[][] P6 = strassenMultiply(subtract(A21, A11), add(B11, B12));
    int[][] P7 = strassenMultiply(subtract(A12, A22), add(B21, B22));
    
    // Calculate result submatrices
    int[][] C11 = add(subtract(add(P1, P4), P5), P7);
    int[][] C12 = add(P3, P5);
    int[][] C21 = add(P2, P4);
    int[][] C22 = add(subtract(add(P1, P3), P2), P6);
    
    // Combine result submatrices into C
    combineMatrix(C, C11, C12, C21, C22);
    
    return C;
}
```
- **Time Complexity**: O(n^log₂7) ≈ O(n^2.81)
- **Space Complexity**: O(n²)
- **Application**: Efficient matrix multiplication for large matrices

### 5. Closest Pair of Points
```java
public double closestPair(Point[] points) {
    // Sort points by x-coordinate
    Arrays.sort(points, (p1, p2) -> Double.compare(p1.x, p2.x));
    return closestPairRec(points, 0, points.length - 1);
}

private double closestPairRec(Point[] points, int left, int right) {
    if (right - left <= 3) {
        return bruteForce(points, left, right);
    }
    
    int mid = left + (right - left) / 2;
    double midX = points[mid].x;
    
    double leftMin = closestPairRec(points, left, mid);
    double rightMin = closestPairRec(points, mid + 1, right);
    double minDist = Math.min(leftMin, rightMin);
    
    // Merge step: find points with x-distance < minDist from midline
    List<Point> strip = new ArrayList<>();
    for (int i = left; i <= right; i++) {
        if (Math.abs(points[i].x - midX) < minDist) {
            strip.add(points[i]);
        }
    }
    
    // Sort strip by y-coordinate
    strip.sort((p1, p2) -> Double.compare(p1.y, p2.y));
    
    // Check pairs in strip
    for (int i = 0; i < strip.size(); i++) {
        for (int j = i + 1; j < strip.size() && strip.get(j).y - strip.get(i).y < minDist; j++) {
            double dist = distance(strip.get(i), strip.get(j));
            minDist = Math.min(minDist, dist);
        }
    }
    
    return minDist;
}
```
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(n)
- **Application**: Computational geometry, nearest neighbor problems

## Advantages and Disadvantages

### Advantages
- Efficient for large problems
- Parallelizable (subproblems can be solved independently)
- Often leads to optimal solutions

### Disadvantages
- Recursive implementation can lead to stack overflow for very large inputs
- May not be the most efficient for small inputs due to overhead
- Some problems don't have clear divide and combine steps

## When to Use Divide and Conquer
- When the problem can be broken down into identical subproblems
- When the solution to the original problem can be constructed from solutions to subproblems
- When the subproblems are independent (no overlapping subproblems)
- When the problem size reduces substantially with each division

## Practice Problems
1. Implement merge sort for linked lists
2. Find the maximum subarray sum (Kadane's algorithm)
3. Count inversions in an array
4. Implement polynomial multiplication using divide and conquer
5. Implement the Karatsuba algorithm for fast integer multiplication