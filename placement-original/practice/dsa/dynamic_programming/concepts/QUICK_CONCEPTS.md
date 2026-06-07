# 🎯 Dynamic Programming - Quick Concepts & Practice

## 🎯 Quick Concepts

### **Definition**
- Method for solving complex problems by breaking them into simpler subproblems
- Optimal substructure + Overlapping subproblems
- Store results of subproblems to avoid recomputation

### **Approaches**
- **Top-Down (Memoization):** Recursive + Cache
- **Bottom-Up (Tabulation):** Iterative + DP Table
- **Space Optimization:** Reduce space complexity

### **Common Patterns**
1. **1D DP:** Fibonacci, House Robber, Climbing Stairs
2. **2D DP:** LCS, Edit Distance, Grid paths
3. **Knapsack:** 0/1 Knapsack, Subset Sum
4. **String DP:** Palindrome, Word Break
5. **Tree DP:** Diameter, Max Path Sum

### **Time/Space Complexity**
- **Time:** O(n) to O(n²) to O(n³)
- **Space:** O(n) to O(n²)
- **Optimization:** Often reduce to O(n) space

---

## 🧠 Practice Questions

### **Easy Level**

#### 1. Climbing Stairs
**Problem:** Number of ways to climb n stairs (1 or 2 steps)
```java
public int climbStairs(int n) {
    if(n <= 2) return n;
    int[] dp = new int[n+1];
    dp[1] = 1;
    dp[2] = 2;
    for(int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

// Space optimized
public int climbStairsOptimized(int n) {
    if(n <= 2) return n;
    int prev2 = 1, prev1 = 2;
    for(int i = 3; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
```

#### 2. House Robber
**Problem:** Maximum amount that can be robbed (no adjacent houses)
```java
public int rob(int[] nums) {
    if(nums.length == 0) return 0;
    if(nums.length == 1) return nums[0];
    
    int[] dp = new int[nums.length];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for(int i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
    }
    return dp[nums.length - 1];
}
```

#### 3. Fibonacci Number
**Problem:** Find nth Fibonacci number
```java
// Memoization
public int fib(int n) {
    int[] memo = new int[n+1];
    return fibHelper(n, memo);
}

private int fibHelper(int n, int[] memo) {
    if(n <= 1) return n;
    if(memo[n] != 0) return memo[n];
    memo[n] = fibHelper(n-1, memo) + fibHelper(n-2, memo);
    return memo[n];
}

// Tabulation
public int fibTabulation(int n) {
    if(n <= 1) return n;
    int[] dp = new int[n+1];
    dp[0] = 0; dp[1] = 1;
    for(int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
```

### **Medium Level**

#### 4. Longest Common Subsequence
**Problem:** Find length of LCS between two strings
```java
public int longestCommonSubsequence(String text1, String text2) {
    int m = text1.length(), n = text2.length();
    int[][] dp = new int[m+1][n+1];
    
    for(int i = 1; i <= m; i++) {
        for(int j = 1; j <= n; j++) {
            if(text1.charAt(i-1) == text2.charAt(j-1)) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}
```

#### 5. Coin Change
**Problem:** Minimum coins needed to make amount
```java
public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    
    for(int i = 1; i <= amount; i++) {
        for(int coin : coins) {
            if(i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}
```

### **Hard Level**

#### 6. Edit Distance
**Problem:** Minimum operations to convert word1 to word2
```java
public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m+1][n+1];
    
    // Initialize base cases
    for(int i = 0; i <= m; i++) dp[i][0] = i;
    for(int j = 0; j <= n; j++) dp[0][j] = j;
    
    for(int i = 1; i <= m; i++) {
        for(int j = 1; j <= n; j++) {
            if(word1.charAt(i-1) == word2.charAt(j-1)) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(dp[i-1][j-1], // replace
                           Math.min(dp[i-1][j],    // delete
                                    dp[i][j-1])) + 1; // insert
            }
        }
    }
    return dp[m][n];
}
```

---

## 📈 Important DP Patterns

### **0/1 Knapsack**
```java
public int knapsack(int[] wt, int[] val, int W, int n) {
    int[][] dp = new int[n+1][W+1];
    
    for(int i = 1; i <= n; i++) {
        for(int w = 1; w <= W; w++) {
            if(wt[i-1] <= w) {
                dp[i][w] = Math.max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w]);
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][W];
}
```

### **Longest Increasing Subsequence**
```java
public int lengthOfLIS(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n];
    Arrays.fill(dp, 1);
    
    for(int i = 1; i < n; i++) {
        for(int j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    int max = 0;
    for(int len : dp) max = Math.max(max, len);
    return max;
}
```

### **Partition Equal Subset Sum**
```java
public boolean canPartition(int[] nums) {
    int sum = 0;
    for(int num : nums) sum += num;
    if(sum % 2 != 0) return false;
    
    int target = sum / 2;
    boolean[] dp = new boolean[target + 1];
    dp[0] = true;
    
    for(int num : nums) {
        for(int j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }
    return dp[target];
}
```

---

## 🎯 Practice Tips

1. **Problem Identification:**
   - Optimal substructure?
   - Overlapping subproblems?
   - Can be solved recursively?

2. **State Definition:**
   - What parameters change?
   - What does each state represent?
   - Base cases clearly defined?

3. **Transition:**
   - How to compute current state from previous?
   - All possibilities covered?
   - Edge cases handled?

4. **Optimization:**
   - Space optimization possible?
   - Can reduce dimensions?
   - Iterative vs recursive?

5. **Common Mistakes:**
   - Off-by-one errors
   - Wrong base cases
   - Not considering all transitions

---

## 📚 Recommended Problems
- LeetCode: 5, 10, 32, 44, 53, 62, 63, 64, 70, 72, 85, 87, 91, 95, 96, 97, 115, 120, 121, 122, 123, 132, 139, 140, 152, 174, 188, 198, 213, 221, 256, 265, 276, 279, 300, 303, 304, 309, 322, 338, 343, 354, 357, 361, 363, 368, 375, 376, 377, 392, 416, 418, 446, 464, 474, 486, 494, 516, 518, 522, 523, 526, 535, 542, 546, 552, 562, 576, 583, 600, 611, 621, 629, 639, 646, 647, 650, 651, 656, 664, 673, 688, 689, 691, 698, 712, 714, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999