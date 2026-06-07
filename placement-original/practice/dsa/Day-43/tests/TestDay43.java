package dsa.day43.tests;

import dsa.day43.DPContest;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestDay43 {

    @Test
    public void testLISBinarySearch() {
        int[] arr = {10,9,2,5,3,7,101,18};
        assertEquals(4, DPContest.lengthOfLIS(arr));
    }

    @Test
    public void testStockTrading() {
        int[] prices = {3,3,5,0,0,3,1,4};
        assertEquals(6, DPContest.maxProfit(prices));
    }
}
