package dsa.day47.tests;

import dsa.day47.BinarySearchAdvanced;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestDay47 {

    @Test
    public void testFindFirstLast() {
        int[] nums = {5,7,7,8,8,10};
        assertEquals(3, BinarySearchAdvanced.findFirst(nums, 8));
        assertEquals(4, BinarySearchAdvanced.findLast(nums, 8));
    }

    @Test
    public void testSplitArrayLargestSum() {
        int[] nums = {7,2,5,10,8};
        assertEquals(18, BinarySearchAdvanced.splitArray(nums, 2));
    }
}
