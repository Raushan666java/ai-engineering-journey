package dsa.day49.tests;

import dsa.day49.GreedyAlgorithms;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestDay49 {

    @Test
    public void testActivitySelection() {
        int[][] intervals = {{1,2},{2,3},{3,4},{1,3}};
        assertEquals(3, GreedyAlgorithms.activitySelection(intervals));
    }

    @Test
    public void testMinArrows() {
        int[][] points = {{10,16},{2,8},{1,6},{7,12}};
        assertEquals(2, GreedyAlgorithms.findMinArrowShots(points));
    }
}
