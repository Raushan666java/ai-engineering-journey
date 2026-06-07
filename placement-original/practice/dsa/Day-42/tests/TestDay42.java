package dsa.day42.tests;

import dsa.day42.AdvancedDP;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestDay42 {

    @Test
    public void testBurstBalloonsSimple() {
        int[] nums = {3,1,5,8};
        assertEquals(167, AdvancedDP.maxCoins(nums));
    }

    @Test
    public void testPalindromePartitioning() {
        String s = "aab";
        assertEquals(1, AdvancedDP.minCut(s));
    }

    @Test
    public void testRegexMatching() {
        assertTrue(AdvancedDP.isMatch("aa", "a*"));
        assertFalse(AdvancedDP.isMatch("a", ".*b"));
    }
}
