import java.util.*;

public class DPBasics {
    // Fibonacci (top-down)
    static Map<Integer, Integer> memo = new HashMap<>();
    public static int fibMemo(int n) {
        if (n <= 1) return n;
        if (memo.containsKey(n)) return memo.get(n);
        int val = fibMemo(n-1) + fibMemo(n-2);
        memo.put(n, val);
        return val;
    }

    // Fibonacci (bottom-up)
    public static int fibTab(int n) {
        if (n <= 1) return n;
        int[] dp = new int[n+1]; dp[0]=0; dp[1]=1;
        for (int i=2; i<=n; i++) dp[i]=dp[i-1]+dp[i-2];
        return dp[n];
    }

    // 0/1 Knapsack (bottom-up)
    public static int knapsack(int[] wt, int[] val, int W) {
        int n = wt.length; int[][] dp = new int[n+1][W+1];
        for (int i=1; i<=n; i++) {
            for (int w=0; w<=W; w++) {
                dp[i][w] = dp[i-1][w];
                if (w >= wt[i-1]) dp[i][w] = Math.max(dp[i][w], dp[i-1][w-wt[i-1]] + val[i-1]);
            }
        }
        return dp[n][W];
    }

    // Longest Increasing Subsequence - O(n log n)
    public static int lis(int[] a) {
        List<Integer> tail = new ArrayList<>();
        for (int x : a) {
            int i = Collections.binarySearch(tail, x);
            if (i < 0) i = -i - 1;
            if (i == tail.size()) tail.add(x); else tail.set(i, x);
        }
        return tail.size();
    }

    public static void main(String[] args) {
        boolean ci = false; if (args != null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci = true;

        System.out.println("Fibonacci memo(20) = " + fibMemo(20));
        System.out.println("Fibonacci tab(20) = " + fibTab(20));

        int[] wt = {1, 3, 4}; int[] val = {1, 4, 5};
        int knap = knapsack(wt, val, 7);
        System.out.println("Knapsack(7) = " + knap);

        int[] arr = {10,9,2,5,3,7,101,18};
        System.out.println("LIS = " + lis(arr));

        if (ci) {
            boolean ok = true;
            ok &= (fibMemo(20) == 6765);
            ok &= (fibTab(20) == 6765);
            ok &= (knap == 9);
            ok &= (lis(arr) == 4);
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
