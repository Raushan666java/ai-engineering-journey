package dsa.day51.tests;

import dsa.day51.Week7Assessment;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestDay51 {

    @Test
    public void testCountTriplets() {
        int[] arr = {2,3,1,6,7};
        assertEquals(4, Week7Assessment.countTriplets(arr));
    }

    @Test
    public void testFindClosestElements() {
        int[] arr = {1,2,3,4,5};
        assertEquals(java.util.Arrays.asList(1,2,3,4), Week7Assessment.findClosestElements(arr,4,3));
    }

    @Test
    public void testCountRangeSum() {
        int[] nums = {-2,5,-1};
        assertEquals(3, Week7Assessment.countRangeSum(nums, -2, 2));
    }
}
