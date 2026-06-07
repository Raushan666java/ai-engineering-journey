package dsa.day44.tests;

import dsa.day44.DPAssessment;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestDay44 {

    @Test
    public void testHouseRobberII() {
        int[] nums = {2,3,2};
        assertEquals(3, DPAssessment.rob(nums));
    }

    @Test
    public void testUniquePathsIII() {
        int[][] grid = {{1,0,0,0},{0,0,0,0},{0,0,2,-1}};
        assertEquals(2, DPAssessment.uniquePathsIII(grid));
    }
}
