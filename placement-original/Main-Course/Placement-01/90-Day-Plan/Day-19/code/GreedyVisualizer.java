import java.util.*;

/**
 * Day 19: Greedy Visualizer - step-by-step prints
 */
public class GreedyVisualizer {

    public static void visualizeActivitySelection(int[] start, int[] end) {
        int n = start.length;
        int[][] activities = new int[n][2];
        for (int i = 0; i < n; i++) activities[i] = new int[] {start[i], end[i]};
        Arrays.sort(activities, Comparator.comparingInt(a -> a[1]));
        System.out.println("Sorted activities by end time:");
        for (int[] a : activities) System.out.println(Arrays.toString(a));

        int lastEnd = -1;
        System.out.println("\nSelection steps:");
        for (int[] a : activities) {
            System.out.println("Considering: " + Arrays.toString(a) + " | lastEnd = " + lastEnd);
            if (a[0] >= lastEnd) {
                System.out.println("  -> Select\n");
                lastEnd = a[1];
            } else System.out.println("  -> Skip (overlap)\n");
        }
    }

    public static void visualizeFractionalKnapsack(int[] wt, int[] val, int W) {
        int n = wt.length; Integer[] idx = new Integer[n];
        for (int i = 0; i < n; i++) idx[i] = i;
        Arrays.sort(idx, (a, b) -> Double.compare((double)val[b]/wt[b], (double)val[a]/wt[a]));
        System.out.println("Items sorted by value/weight ratio:");
        for (int id : idx) System.out.println("i=" + id + " wt=" + wt[id] + " val=" + val[id] + " ratio=" + ((double)val[id]/wt[id]));
        double res = 0;
        System.out.println("\nSelection steps:");
        for (int id : idx) {
            if (W == 0) break;
            System.out.println("Consider item i=" + id + " (wt=" + wt[id] + ", val=" + val[id] + ") | remaining W = " + W);
            if (wt[id] <= W) { res += val[id]; W -= wt[id]; System.out.println("  -> Take full item → result = " + res); }
            else { res += (double)val[id] * W / wt[id]; System.out.println("  -> Take partial weight " + W + " of item → result = " + res); W = 0; }
        }
        System.out.println("Total value achieved: " + res);
    }

    public static void main(String[] args) {
        System.out.println("=".repeat(60));
        System.out.println("GREEDY VISUALIZER - DEMO");
        System.out.println("=".repeat(60));

        int[] start = {1,3,0,5,8,5}; int[] end = {2,4,6,7,9,9}; visualizeActivitySelection(start, end);
        System.out.println();
        int[] wt = {10,20,30}; int[] val = {60,100,120}; visualizeFractionalKnapsack(wt, val, 50);
        System.out.println("= Done =");
    }
}
