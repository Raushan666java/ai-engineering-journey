import java.util.*;

public class GreedyBasics {

    // Interval scheduling: select maximum number of non-overlapping intervals
    static List<int[]> intervalSchedule(int[][] intervals) {
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[1]));
        List<int[]> res = new ArrayList<>();
        int lastEnd = Integer.MIN_VALUE;
        for (int[] iv: intervals) {
            if (iv[0] >= lastEnd) { res.add(iv); lastEnd = iv[1]; }
        }
        return res;
    }

    // Interval partitioning: minimal number of rooms which is max overlapping intervals
    static int minRooms(int[][] intervals) {
        int n = intervals.length;
        int[] starts = new int[n]; int[] ends = new int[n];
        for (int i=0;i<n;i++){ starts[i] = intervals[i][0]; ends[i] = intervals[i][1]; }
        Arrays.sort(starts); Arrays.sort(ends);
        int rooms = 0, j=0;
        for (int i=0;i<n;i++) {
            if (starts[i] < ends[j]) { rooms++; } else { j++; }
        }
        return rooms;
    }

    // Greedy coin change for canonical coin systems (e.g., US currency). We'll test with canonical set [25,10,5,1]
    static List<Integer> coinChangeGreedy(int amount, int[] coins) {
        List<Integer> out = new ArrayList<>();
        for (int c: coins) { int cnt = amount / c; for (int i=0;i<cnt;i++) out.add(c); amount -= cnt*c; }
        if (amount != 0) return Collections.emptyList(); return out;
    }

    // Huffman coding tree build returns a map from character to code string
    static class Node implements Comparable<Node> { char ch; int freq; Node left, right; Node(char c, int f){ch=c;freq=f;} Node(Node l, Node r){left=l; right=r; freq=l.freq+r.freq;} public int compareTo(Node o){return this.freq - o.freq;} boolean isLeaf(){return left==null && right==null;} }
    static Map<Character,String> buildHuffman(Map<Character,Integer> freqMap){
        PriorityQueue<Node> pq = new PriorityQueue<>();
        for (Map.Entry<Character,Integer> e: freqMap.entrySet()) pq.add(new Node(e.getKey(), e.getValue()));
        while (pq.size() > 1) { Node a = pq.poll(), b = pq.poll(); pq.add(new Node(a,b)); }
        Node root = pq.poll(); Map<Character,String> map = new HashMap<>(); buildHuffmanCodes(root, "", map); return map;
    }
    static void buildHuffmanCodes(Node n, String prefix, Map<Character,String> map){
        if (n==null) return; if (n.isLeaf()){ map.put(n.ch, prefix); return; } buildHuffmanCodes(n.left, prefix + '0', map); buildHuffmanCodes(n.right, prefix + '1', map);
    }

    public static void main(String[] args) {
        boolean ci=false; for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;

        int[][] intervals = new int[][]{{0, 6},{1,4},{3,5},{3,8},{5,7},{5,9},{8,9}};
        List<int[]> scheduled = intervalSchedule(intervals);
        System.out.println("Interval schedule chosen (max non-overlap):");
        for (int[] iv: scheduled) System.out.println(Arrays.toString(iv));

        int rooms = minRooms(intervals);
        System.out.println("Min rooms required: " + rooms);

        int[] coins = new int[]{25,10,5,1}; List<Integer> change = coinChangeGreedy(99, coins);
        System.out.println("Coin change greedy for 99c: " + change);

        Map<Character,Integer> freqMap = new HashMap<>(); freqMap.put('a', 5); freqMap.put('b', 9); freqMap.put('c', 12); freqMap.put('d', 13); freqMap.put('e', 16); freqMap.put('f', 45);
        Map<Character,String> codes = buildHuffman(freqMap);
        System.out.println("Huffman codes: " + codes);

        if (ci) {
            boolean ok = true;
            ok &= scheduled.size() == 3; // expected schedule from test set
            ok &= rooms == 4; // overlapping intervals max rooms
            // We'll accept change is canonical and releases valid sum; just check sum
            int sum = 0; for (int c: change) sum += c; ok &= sum == 99;
            ok &= codes.size() == freqMap.size();
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
