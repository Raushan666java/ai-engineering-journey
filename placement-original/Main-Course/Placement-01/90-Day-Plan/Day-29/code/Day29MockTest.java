import java.util.*;

public class Day29MockTest {
    // Small helpers: reverse linked list, detect cycle (Floyd), merge intervals
    static class ListNode { int val; ListNode next; ListNode(int v){val=v;} }
    public static ListNode reverse(ListNode head) {
        ListNode prev=null; ListNode cur=head;
        while(cur!=null){ ListNode nx=cur.next; cur.next=prev; prev=cur; cur=nx; }
        return prev;
    }

    public static boolean hasCycle(ListNode head) {
        ListNode slow=head, fast=head;
        while(fast!=null && fast.next!=null){ slow=slow.next; fast=fast.next.next; if(slow==fast) return true; }
        return false;
    }

    public static int[][] mergeIntervals(int[][] intervals) {
        if(intervals.length==0) return new int[0][];
        Arrays.sort(intervals, Comparator.comparingInt(a->a[0]));
        List<int[]> out=new ArrayList<>();
        int[] cur = intervals[0];
        for(int i=1;i<intervals.length;i++){
            int[] nxt = intervals[i];
            if(nxt[0]<=cur[1]) cur[1]=Math.max(cur[1], nxt[1]); else { out.add(cur); cur=nxt; }
        }
        out.add(cur);
        return out.toArray(new int[out.size()][]);
    }

    public static void main(String[] args) {
        boolean ci = false; if (args != null) for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) ci = true;
        // Reverse list test
        ListNode h = new ListNode(1); h.next=new ListNode(2); h.next.next=new ListNode(3);
        ListNode r = reverse(h);
        int[] revVals = new int[3]; int idx=0; while(r!=null){ revVals[idx++]=r.val; r=r.next; }
        System.out.println("Reversed list values: " + Arrays.toString(revVals));

        // Cycle detection
        ListNode a = new ListNode(1); ListNode b = new ListNode(2); ListNode c = new ListNode(3); a.next=b; b.next=c; c.next=null;
        ListNode d = new ListNode(4); a.next=b; b.next=c; c.next=d; d.next=b; // create cycle
        boolean cycle = hasCycle(a);
        System.out.println("Cycle detected: " + cycle);

        // Merge intervals
        int[][] intervals = new int[][]{{1,3},{2,6},{8,10},{15,18}};
        int[][] merged = mergeIntervals(intervals);
        System.out.println("Merged intervals: " + Arrays.deepToString(merged));

        if (ci) {
            boolean ok = Arrays.equals(revVals, new int[]{3,2,1}) && cycle == true && Arrays.deepEquals(merged, new int[][]{{1,6},{8,10},{15,18}});
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
