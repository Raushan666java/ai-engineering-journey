package dsa.day46.tests;

import dsa.day46.SegmentTreeFenwickTree;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestDay46 {

    @Test
    public void testFenwickPrefixSum() {
        int[] nums = {1,2,3,4,5};
        SegmentTreeFenwickTree.Fenwick fw = new SegmentTreeFenwickTree.Fenwick(nums.length);
        for (int i = 0; i < nums.length; i++) fw.update(i+1, nums[i]);
        assertEquals(6, fw.query(3)); // 1+2+3
    }

    @Test
    public void testSegmentTreeRangeSum() {
        int[] nums = {1,3,5};
        SegmentTreeFenwickTree.SegmentTree st = new SegmentTreeFenwickTree.SegmentTree(nums);
        assertEquals(9, st.query(0,2));
        st.update(1,2); // set index 1 to 2
        assertEquals(8, st.query(0,2));
    }
}
